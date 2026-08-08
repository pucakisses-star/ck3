#!/usr/bin/env python3
"""Derive a full CK3-style map_data set from a hand-drawn world image.

Reads worldsource/worldmap.png (tan land on white ocean, salmon mountain
shading, drawn on a parchment sheet) and produces the geometry inputs the
existing pipeline (tools/build_fixed_map.py) consumes, written under
worldsource/map_data/ (point build_fixed_map.py at them with its
GH_MAP_DATA / GH_TERRAIN_FILE / GH_OUT_DIR env overrides):

  provinces.png               unique colour per province (land + sea)
  definition.csv              colour -> id table
  default.map                 lists the sea province ids
  heightmap.png               8-bit sculpted elevation
  rivers.png                  river mask (white land / magenta sea / blue river)
  adjacencies.csv             empty (no straits yet)
  00_province_terrain.txt     terrain keyword per province

Province ids start at 20000 so they never collide with the Godherja
history/landed_titles data (max id 9410); the political layers therefore
come out blank, which is intended for a fresh invented world.

Dev-only: needs scipy + scikit-image (not the CI's pillow/numpy). Run it
locally and commit the map_data outputs; CI then rebuilds docs/ from them.
"""
import numpy as np
from PIL import Image
from scipy import ndimage
from scipy.spatial import cKDTree
from skimage.segmentation import watershed

ROOT = __import__("pathlib").Path(__file__).resolve().parent.parent
SRC = ROOT / "worldsource" / "worldmap.png"
MD = ROOT / "worldsource" / "map_data"
CW, CH = 4096, 2048           # 2:1 canvas the pipeline expects
ID0 = 20000                   # first province id (above Godherja's 9410)
RNG = np.random.default_rng(7)

MD.mkdir(parents=True, exist_ok=True)

# ------------------------------------------------------------- segmentation
print("segmenting the drawing ...")
src = Image.open(SRC).convert("RGB")
# fit the world (aspect ~1.557) into the 2:1 canvas by height, ocean margins
fit_h = CH
fit_w = int(round(CH * src.width / src.height))
world = np.asarray(src.resize((fit_w, fit_h), Image.LANCZOS)).astype(np.int32)
canvas = np.full((CH, CW, 3), 245, np.int32)   # ocean-white margins
x0 = (CW - fit_w) // 2
canvas[:, x0:x0 + fit_w] = world
a = canvas
r, g, b = a[..., 0], a[..., 1], a[..., 2]

achro = (np.abs(r - g) < 14) & (np.abs(g - b) < 16)
bright = (r + g + b) > 690
warm = (r - b) > 24

land = warm.copy()
land = ndimage.binary_closing(land, structure=np.ones((3, 3)), iterations=4)
holes = ndimage.binary_fill_holes(land) & ~land
hl, hn = ndimage.label(holes)
hs = ndimage.sum(np.ones_like(hl), hl, range(1, hn + 1))
small = np.zeros(hn + 1, bool)
small[1:] = hs < 400
land = land | small[hl]
ll, ln = ndimage.label(land)
ls = ndimage.sum(np.ones_like(ll), ll, range(1, ln + 1))
bigl = np.zeros(ln + 1, bool)
bigl[1:] = ls > 200                       # drop dashed-gridline specks
land = bigl[ll]
sea = ~land
print(f"  land {land.mean():.3f}")

rg = r - g
mtn_m = warm & land & (rg >= 42)
mtn_m = ndimage.binary_opening(mtn_m, iterations=1)
mtn = np.clip((rg - 38) / 70.0, 0, 1) * mtn_m
mtn = ndimage.gaussian_filter(mtn.astype(np.float32), 2.0)

# ------------------------------------------------------------- heightmap
print("sculpting heightmap ...")
SEA = 0.34
dc = ndimage.distance_transform_edt(land).astype(np.float32)     # into land
dsea = ndimage.distance_transform_edt(sea).astype(np.float32)    # into sea
h = np.full((CH, CW), SEA, np.float32)
# land: gentle rise from the coast + mountain uplift + low-freq roll
coast_ramp = np.clip(dc / 110.0, 0, 1)
land_base = SEA + 0.015 + coast_ramp * 0.055
# smooth, rounded mountains: blur the salmon field generously so ranges are
# broad ridges rather than spiky speckle
uplift = ndimage.gaussian_filter(mtn, 6.0) * 0.60
lown = ndimage.gaussian_filter(
    ndimage.zoom(RNG.random((CH // 24, CW // 24)).astype(np.float32), 24, order=1), 8.0)
py, px = CH - lown.shape[0], CW - lown.shape[1]
if py > 0 or px > 0:
    lown = np.pad(lown, ((0, max(py, 0)), (0, max(px, 0))), mode="edge")
lown = lown[:CH, :CW]
h = np.where(land, land_base + uplift + (lown - 0.5) * 0.018, h)
# sea: fall off with distance from any coast (shallow shelf -> deep)
h = np.where(sea, SEA - np.clip(dsea / 150.0, 0, 1) * 0.26 - 0.01, h)
# heavy smoothing kills the relief-shading zebra; keeps broad landforms
h = ndimage.gaussian_filter(h, 3.5)
h16 = np.clip(h, 0, 1)
# save 8-bit: PIL's 16-bit PNG round-trip byte-swaps (reads back as noise),
# and the app only ever consumes an 8-bit height texture anyway
Image.fromarray((h16 * 255).astype(np.uint8), mode="L").save(MD / "heightmap.png")

# ------------------------------------------------------------- rivers
print("flowing rivers ...")
# flow accumulation on a coarse grid, steepest descent, then upscale mask.
# Route on float elevation plus a small distance-to-coast tilt: the tilt
# breaks flat plains (where 8-bit routing used to stall) and guarantees
# every stream keeps moving toward the sea.
rw, rh = 1536, 768
zy, zx = rh / CH, rw / CW
hs_ = ndimage.zoom(h16, (zy, zx), order=1).astype(np.float32)[:rh, :rw]
dc_s = ndimage.zoom(dc, (zy, zx), order=1).astype(np.float32)[:rh, :rw]
land_s = np.asarray(Image.fromarray((land * 255).astype(np.uint8)).resize((rw, rh), Image.NEAREST)) > 127
route = hs_ + dc_s * 2e-4
order = np.argsort(route.ravel())[::-1]         # high -> low
acc = np.ones(rw * rh, np.float32)
H_, W_ = rh, rw
nb = np.array([-W_ - 1, -W_, -W_ + 1, -1, 1, W_ - 1, W_, W_ + 1])
hflat = route.ravel()
land_flat = land_s.ravel()
for idx in order:
    if not land_flat[idx]:
        continue
    y, x = divmod(idx, W_)
    if y == 0 or y == H_ - 1 or x == 0 or x == W_ - 1:
        continue
    cand = idx + nb
    lo = cand[np.argmin(hflat[cand])]
    if hflat[lo] < hflat[idx]:
        acc[lo] += acc[idx]
acc = acc.reshape(H_, W_)
river_s = land_s & (acc > 220)
river_s = ndimage.binary_dilation(river_s, iterations=1)
river = np.asarray(Image.fromarray((river_s * 255).astype(np.uint8)).resize((CW, CH), Image.NEAREST)) > 127
river &= land
riv_img = np.zeros((CH, CW, 3), np.uint8)
riv_img[land] = (255, 255, 255)
riv_img[sea] = (255, 0, 128)          # magenta = water per the pipeline parser
riv_img[river] = (60, 90, 200)
# the pipeline reads rivers.png at 2x and downsamples 2x2 -> save at 2x
Image.fromarray(riv_img).resize((CW * 2, CH * 2), Image.NEAREST).save(MD / "rivers.png")
print(f"  river px {river.mean()*100:.2f}%")

# ------------------------------------------------------------- provinces
print("partitioning provinces ...")
pid = np.zeros((CH, CW), np.int32)
next_id = ID0
markers = np.zeros((CH, CW), np.int32)
# land provinces: jittered-grid seeds per connected landmass -> nearest seed
comp, ncomp = ndimage.label(land)
STEP = 34
mk = 0
seed_owner = {}
for c in range(1, ncomp + 1):
    ys, xs = np.where(comp == c)
    if len(xs) < 120:
        continue
    y0, y1, x0b, x1b = ys.min(), ys.max(), xs.min(), xs.max()
    gy, gx = np.mgrid[y0:y1 + 1:STEP, x0b:x1b + 1:STEP]
    sy = (gy + RNG.integers(-10, 11, gy.shape)).clip(0, CH - 1)
    sx = (gx + RNG.integers(-10, 11, gx.shape)).clip(0, CW - 1)
    inside = comp[sy, sx] == c
    sy, sx = sy[inside], sx[inside]
    if len(sx) == 0:
        sy, sx = np.array([ys[len(ys) // 2]]), np.array([xs[len(xs) // 2]])
    for yy, xx in zip(sy, sx):
        mk += 1
        markers[yy, xx] = mk
        seed_owner[mk] = None
# watershed grows markers over land only, following the terrain a little
elev = ndimage.gaussian_filter(-dc, 1.0) + (lown - 0.5) * 4.0
lab_land = watershed(elev, markers, mask=land)
# sea provinces: coarser jittered grid over all water
smark = np.zeros((CH, CW), np.int32)
gy, gx = np.mgrid[0:CH:64, 0:CW:64]
sy = (gy + RNG.integers(-18, 19, gy.shape)).clip(0, CH - 1)
sx = (gx + RNG.integers(-18, 19, gx.shape)).clip(0, CW - 1)
smk = 0
for yy, xx in zip(sy.ravel(), sx.ravel()):
    if sea[yy, xx]:
        smk += 1
        smark[yy, xx] = smk
lab_sea = watershed(np.zeros((CH, CW), np.float32), smark, mask=sea)
print(f"  land provinces {mk}, sea provinces {smk}")

# assign ids + colours; build definition.csv & terrain
def uniq_colors(n):
    seen, out = set(), []
    v = 1
    while len(out) < n:
        v = (v * 2654435761 + 40503) & 0xFFFFFF
        if v in seen or v == 0xFFFFFF or v == 0xFF0080:
            continue
        seen.add(v)
        out.append((v >> 16 & 255, v >> 8 & 255, v & 255))
    return out

nprov = mk + smk
cols = uniq_colors(nprov)
prov_rgb = np.zeros((CH, CW, 3), np.uint8)
defs, terr = [], []
lat = np.abs(np.linspace(-1, 1, CH))[:, None] * np.ones((1, CW))

k = 0
for m in range(1, mk + 1):
    sel = lab_land == m
    if not sel.any():
        continue
    pid_ = ID0 + k
    col = cols[k]
    prov_rgb[sel] = col
    mm = mtn[sel].mean()
    la = lat[sel].mean()
    hh = h16[sel].mean()
    if mm > 0.18 or hh > SEA + 0.34:
        t = "mountains"
    elif mm > 0.06 or hh > SEA + 0.16:
        t = "hills"
    elif la > 0.82:
        t = "taiga"
    elif la > 0.7:
        t = "plains"
    elif la < 0.28:
        t = "desert"
    else:
        t = "forest" if ((pid_ * 73) % 5 == 0) else ("farmlands" if (pid_ % 7 == 0) else "plains")
    defs.append(f"{pid_};{col[0]};{col[1]};{col[2]};x;")
    terr.append(f"{pid_}={t}")
    k += 1

sea_ids = []
for m in range(1, smk + 1):
    sel = lab_sea == m
    if not sel.any():
        continue
    pid_ = ID0 + k
    col = cols[k]
    prov_rgb[sel] = col
    defs.append(f"{pid_};{col[0]};{col[1]};{col[2]};x;")
    terr.append(f"{pid_}=sea")
    sea_ids.append(pid_)
    k += 1

# any unassigned pixels (rare watershed gaps) -> nearest coloured pixel
gap = (prov_rgb.sum(2) == 0)
if gap.any():
    idx = ndimage.distance_transform_edt(gap, return_distances=False, return_indices=True)
    prov_rgb = prov_rgb[tuple(idx)]
Image.fromarray(prov_rgb).save(MD / "provinces.png")
print(f"  wrote {k} provinces")

# ------------------------------------------------------------- text outputs
with open(MD / "definition.csv", "w", encoding="utf-8") as f:
    f.write("0;0;0;0;x;\n")
    f.write("\n".join(defs) + "\n")

with open(MD / "00_province_terrain.txt", "w", encoding="utf-8") as f:
    f.write("default_land=plains\ndefault_sea=sea\ndefault_coastal_sea=coastal_sea\n")
    f.write("\n".join(terr) + "\n")

with open(MD / "default.map", "w", encoding="utf-8") as f:
    f.write('definitions = "definition.csv"\nprovinces = "provinces.png"\n')
    f.write('rivers = "rivers.png"\nadjacencies = "adjacencies.csv"\n\n')
    for i in range(0, len(sea_ids), 300):
        chunk = " ".join(str(x) for x in sea_ids[i:i + 300])
        f.write(f"sea_zones = LIST {{ {chunk} }}\n")

(MD / "adjacencies.csv").write_text(
    "From;To;Type;Through;start_x;start_y;stop_x;stop_y;Comment;\n-1;-1;;-1;-1;-1;-1;-1;;\n",
    encoding="utf-8")
print("done.")
