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

Everything is built on an 8192x4096 canvas — the drawing's own resolution
(6378x4096) pasted 1:1, no resampling — which matches the Godherja map_data
so the pipeline's native-resolution prov8.png layer genuinely carries 2x
the detail of the 4096x2048 id grid (crisp GPU borders and coastlines).

Small islands are kept: instead of a blanket area cut, components are
filtered by shape (solidity/aspect), which admits archipelago islets while
still rejecting dashed gridlines; isolated dark ink dots in open sea are
promoted to islets too, with a clustering test that rejects rows of text
glyphs and gridline dashes.

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
from skimage.measure import regionprops
from skimage.segmentation import watershed

Image.MAX_IMAGE_PIXELS = None
ROOT = __import__("pathlib").Path(__file__).resolve().parent.parent
SRC = ROOT / "worldsource" / "worldmap.png"
MD = ROOT / "worldsource" / "map_data"
CW, CH = 8192, 4096           # 2:1 canvas; 2x the pipeline grid, like Godherja
ID0 = 20000                   # first province id (above Godherja's 9410)
RNG = np.random.default_rng(7)

MD.mkdir(parents=True, exist_ok=True)

# ------------------------------------------------------------- segmentation
print("segmenting the drawing ...")
src = Image.open(SRC).convert("RGB")
# paste the drawing 1:1 (6378x4096 fits the canvas by height), ocean margins
canvas = np.full((CH, CW, 3), 245, np.int16)
x0 = (CW - src.width) // 2
canvas[:src.height, x0:x0 + src.width] = np.asarray(src, dtype=np.int16)
a = canvas
r, g, b = a[..., 0], a[..., 1], a[..., 2]
dark = (r.astype(np.int32) + g + b) < 430
warm = (r - b) > 24

land = warm.copy()
land = ndimage.binary_closing(land, structure=np.ones((3, 3)), iterations=2)
holes = ndimage.binary_fill_holes(land) & ~land
hl, hn = ndimage.label(holes)
hs = ndimage.sum(np.ones_like(hl), hl, range(1, hn + 1))
small = np.zeros(hn + 1, bool)
small[1:] = hs < 1600
land = land | small[hl]

# component filter: big landmasses always stay; small ones stay when they are
# compact blobs (real islets) rather than dashed-gridline segments or thin
# lettering strokes, judged by solidity and bounding-box shape
ll, ln = ndimage.label(land)
keep = np.zeros(ln + 1, bool)
n_islet = 0
for p in regionprops(ll):
    if p.area >= 800:
        keep[p.label] = True
        continue
    if p.area < 25:
        continue
    bh = p.bbox[2] - p.bbox[0]
    bw = p.bbox[3] - p.bbox[1]
    if min(bh, bw) < 5 or max(bh, bw) / min(bh, bw) > 3.0:
        continue
    if p.solidity < 0.72:
        continue
    keep[p.label] = True
    n_islet += 1
land = keep[ll]
# smooth the big-coastline jaggies without erasing the small islands
areas = np.bincount(ll.ravel(), minlength=ln + 1)
big = keep & (areas >= 800)
small_mask = land & ~big[ll]
land = (ndimage.gaussian_filter(land.astype(np.float32), 1.5) > 0.5) | small_mask
print(f"  land {land.mean():.3f}  (+{n_islet} small islands kept)")

# ink-dot islets: compact dark specks in open sea, but only when isolated —
# text glyphs and gridline dashes come in tight rows and are rejected by the
# neighbour count
sea0 = ~land
ink = dark & sea0 & ~ndimage.binary_dilation(land, iterations=4)
il, inn = ndimage.label(ink)
cands = []
for p in regionprops(il):
    if not (12 <= p.area <= 400):
        continue
    bh = p.bbox[2] - p.bbox[0]
    bw = p.bbox[3] - p.bbox[1]
    if max(bh, bw) / max(1, min(bh, bw)) > 3.0 or p.solidity < 0.6:
        continue
    cands.append((p.label, p.centroid))
if cands:
    cent = np.array([c for _, c in cands])
    tree = cKDTree(cent)
    n_near = np.array([len(tree.query_ball_point(c, 30)) - 1 for c in cent])
    lone = [cands[i][0] for i in range(len(cands)) if n_near[i] <= 1]
    if lone:
        dots = np.isin(il, lone)
        dots = ndimage.binary_dilation(dots, iterations=2)
        land |= dots
        print(f"  +{len(lone)} ink-dot islets")
sea = ~land

rg = r - g
mtn_m = warm & land & (rg >= 42)
mtn_m = ndimage.binary_opening(mtn_m, iterations=2)
mtn = np.clip((rg - 38) / 70.0, 0, 1) * mtn_m
mtn = ndimage.gaussian_filter(mtn.astype(np.float32), 4.0)

# ------------------------------------------------------------- heightmap
print("sculpting heightmap ...")
SEA = 0.34
dc = ndimage.distance_transform_edt(land).astype(np.float32)     # into land
dsea = ndimage.distance_transform_edt(sea).astype(np.float32)    # into sea
h = np.full((CH, CW), SEA, np.float32)
# land: a firm rise from the coast + strong mountain uplift + low-freq roll
coast_ramp = np.clip(dc / 160.0, 0, 1)
land_base = SEA + 0.02 + coast_ramp * 0.10
# mountains: blur the salmon field just enough to read as connected ridges
# while keeping the ranges steep and pronounced
uplift = ndimage.gaussian_filter(mtn, 8.0) * 0.95
lown = ndimage.gaussian_filter(
    ndimage.zoom(RNG.random((CH // 48, CW // 48)).astype(np.float32), 48, order=1), 16.0)
py, px = CH - lown.shape[0], CW - lown.shape[1]
if py > 0 or px > 0:
    lown = np.pad(lown, ((0, max(py, 0)), (0, max(px, 0))), mode="edge")
lown = lown[:CH, :CW]
h = np.where(land, land_base + uplift + (lown - 0.5) * 0.02, h)
# sea: fall off with distance from any coast (shallow shelf -> deep)
h = np.where(sea, SEA - np.clip(dsea / 300.0, 0, 1) * 0.26 - 0.01, h)
# light smoothing: kill relief-shading zebra but keep the rise steep
h = ndimage.gaussian_filter(h, 4.0)
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
route = hs_ + dc_s * 1e-4
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
# the pipeline wants rivers.png at 2x its 4096x2048 grid — that IS this canvas
Image.fromarray(riv_img).save(MD / "rivers.png")
print(f"  river px {river.mean()*100:.2f}%")

# ------------------------------------------------------------- provinces
print("partitioning provinces ...")
markers = np.zeros((CH, CW), np.int32)
# land provinces: jittered-grid seeds per landmass; every island — however
# small — gets at least one seed so it becomes a real province
comp, ncomp = ndimage.label(land)
STEP = 68
mk = 0
for c in range(1, ncomp + 1):
    ys, xs = np.where(comp == c)
    if len(xs) >= 480:
        y0, y1, x0b, x1b = ys.min(), ys.max(), xs.min(), xs.max()
        gy, gx = np.mgrid[y0:y1 + 1:STEP, x0b:x1b + 1:STEP]
        sy = (gy + RNG.integers(-20, 21, gy.shape)).clip(0, CH - 1)
        sx = (gx + RNG.integers(-20, 21, gx.shape)).clip(0, CW - 1)
        inside = comp[sy, sx] == c
        sy, sx = sy[inside], sx[inside]
    else:
        sy, sx = np.array([], int), np.array([], int)
    if len(sx) == 0:
        # deepest interior point of the component
        sub = (slice(ys.min(), ys.max() + 1), slice(xs.min(), xs.max() + 1))
        m = comp[sub] == c
        d = ndimage.distance_transform_edt(m)
        yy, xx = np.unravel_index(np.argmax(d), d.shape)
        sy, sx = np.array([ys.min() + yy]), np.array([xs.min() + xx])
    for yy, xx in zip(sy, sx):
        mk += 1
        markers[yy, xx] = mk
# watershed grows markers over land only, following the terrain a little
elev = ndimage.gaussian_filter(-dc, 2.0) + (lown - 0.5) * 8.0
lab_land = watershed(elev, markers, mask=land)
del elev, markers
# sea provinces: coarser jittered grid over all water
smark = np.zeros((CH, CW), np.int32)
gy, gx = np.mgrid[0:CH:128, 0:CW:128]
sy = (gy + RNG.integers(-36, 37, gy.shape)).clip(0, CH - 1)
sx = (gx + RNG.integers(-36, 37, gx.shape)).clip(0, CW - 1)
smk = 0
for yy, xx in zip(sy.ravel(), sx.ravel()):
    if sea[yy, xx]:
        smk += 1
        smark[yy, xx] = smk
lab_sea = watershed(np.zeros((CH, CW), np.float32), smark, mask=sea)
del smark
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
lat = np.abs(np.linspace(-1, 1, CH))[:, None] * np.ones((1, CW), np.float32)

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
