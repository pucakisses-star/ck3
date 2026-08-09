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

# --- sea-name lettering must not become islands -------------------------
# The drawing's big sea names ("THE PASSAPARTAGOS", "LVNMARE", ...) have
# warm-pale fills that pass the land test and are the same size/shape as real
# islands.  What letters have that islands don't is context: words are >=5
# similar-size components in a regularly-spaced, locally-collinear chain.
# Detected chains are removed, with a per-member colour veto (island-tan
# fill r-b >= 39 stays land; letters measure ~26-35), plus an aligned
# single-pass mop-up for word-initial stragglers.  A hand-checked whitelist
# (source-image coords) restores archipelago islets the chains still graze,
# and the two gold compass ornaments are dropped by colour+circularity.
ll, ln = ndimage.label(land)
props = [p for p in regionprops(ll)]
WHITELIST = [(1111, 2232), (1173, 2438), (1194, 1320), (1210, 2274),
             (1279, 5880), (1414, 1116), (1499, 2675), (1525, 2990),
             (1576, 1816), (1616, 3203), (1797, 2839), (1918, 1997),
             (1919, 3025), (1934, 1773), (1973, 1618), (2080, 1384),
             (3797, 1479), (3801, 1650)]
wl_labels = set()
for wy, wx in WHITELIST:
    lab = ll[wy, wx + x0]
    if lab:
        wl_labels.add(int(lab))

cands = []
for p in props:
    if not (300 <= p.area <= 4500):
        continue
    y0c, x0c, y1c, x1c = p.bbox
    sub = ll[y0c:y1c, x0c:x1c] == p.label
    rbv = float((r[y0c:y1c, x0c:x1c][sub] - b[y0c:y1c, x0c:x1c][sub]).mean())
    cands.append((p.label, p.centroid[0], p.centroid[1],
                  float(max(y1c - y0c, x1c - x0c)), rbv))
nC = len(cands)
Cyx = np.array([[c[1], c[2]] for c in cands]) if nC else np.zeros((0, 2))
Ch = np.array([c[3] for c in cands])
Crb = np.array([c[4] for c in cands])
Dm = np.linalg.norm(Cyx[:, None, :] - Cyx[None, :, :], axis=2)
np.fill_diagonal(Dm, 1e9)
sim = (np.minimum(Ch[:, None], Ch[None, :]) * 1.9 >= np.maximum(Ch[:, None], Ch[None, :]))
adjm = (Dm >= 40) & (Dm <= 340) & sim

def _grow(P, A, i, j):
    chain = [i, j]
    while True:
        a_, b_ = chain[-2], chain[-1]
        v = P[b_] - P[a_]
        d0 = np.linalg.norm(v)
        best, bestdev = -1, 1e9
        for kk in np.flatnonzero(A[b_]):
            if kk in chain:
                continue
            w = P[kk] - P[b_]
            d1 = np.linalg.norm(w)
            if not (0.55 * d0 <= d1 <= 1.8 * d0):
                continue
            cos = (v @ w) / (d0 * d1 + 1e-9)
            if cos < np.cos(np.radians(30)):
                continue
            dev = np.degrees(np.arccos(np.clip(cos, -1, 1)))
            if dev < bestdev:
                best, bestdev = kk, dev
        if best < 0:
            return chain
        chain.append(best)

is_text = np.zeros(nC, bool)
chain_dir = {}
for i in range(nC):
    for j in np.flatnonzero(adjm[i]):
        ch = _grow(Cyx, adjm, i, int(j))
        if len(ch) < 5 or Crb[ch].mean() >= 37:
            continue
        for t, m in enumerate(ch):
            if Crb[m] >= 39:
                continue
            is_text[m] = True
            p0, p1 = ch[max(0, t - 1)], ch[min(len(ch) - 1, t + 1)]
            v = Cyx[p1] - Cyx[p0]
            chain_dir[m] = v / (np.linalg.norm(v) + 1e-9)
for i in range(nC):
    if is_text[i] or Crb[i] >= 36:
        continue
    for m in chain_dir:
        if Dm[i, m] > 320 or not sim[i, m]:
            continue
        v = Cyx[i] - Cyx[m]
        cos = abs(v @ chain_dir[m]) / (np.linalg.norm(v) + 1e-9)
        if cos > np.cos(np.radians(25)):
            is_text[i] = True
            break
text_labels = {cands[i][0] for i in range(nC) if is_text[i]} - wl_labels

# zones where lettering was removed: serif fragments and dark outlines in
# them must not survive as islets
text_zone = np.zeros((CH, CW), bool)
for p in props:
    if p.label in text_labels:
        y0c, x0c, y1c, x1c = p.bbox
        text_zone[max(0, y0c - 30):y1c + 30, max(0, x0c - 30):x1c + 30] = True

# component filter: big landmasses always stay; small ones stay when they are
# compact blobs (real islets) rather than dashed-gridline segments, judged by
# solidity and bounding-box shape
keep = np.zeros(ln + 1, bool)
n_islet = 0
for p in props:
    if p.label in text_labels:
        continue
    bh = p.bbox[2] - p.bbox[0]
    bw = p.bbox[3] - p.bbox[1]
    asp = max(bh, bw) / max(1, min(bh, bw))
    y0c, x0c, y1c, x1c = p.bbox
    sub = ll[y0c:y1c, x0c:x1c] == p.label
    rbv = float((r[y0c:y1c, x0c:x1c][sub] - b[y0c:y1c, x0c:x1c][sub]).mean())
    # gold compass ornaments: circular, very saturated discs in open sea
    if 2000 <= p.area <= 6000 and rbv >= 52 and p.solidity >= 0.88 and asp <= 1.35 \
            and p.label not in wl_labels:
        continue
    if p.area >= 800 or p.label in wl_labels:
        keep[p.label] = True
        continue
    if p.area < 25:
        continue
    if min(bh, bw) < 5 or asp > 3.0:
        continue
    if p.solidity < 0.72:
        continue
    if text_zone[int(p.centroid[0]), int(p.centroid[1])]:
        continue
    keep[p.label] = True
    n_islet += 1
print(f"  text components removed {len(text_labels)}, whitelisted {len(wl_labels)}")
# extend the zone with the other dropped mid-size components (ornaments,
# shape-filter rejects) so the ink pass can't resurrect their outlines
for p in props:
    if p.label not in wl_labels and not keep[p.label] and p.area >= 300:
        y0c, x0c, y1c, x1c = p.bbox
        text_zone[max(0, y0c - 14):y1c + 14, max(0, x0c - 14):x1c + 14] = True
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
# the drawing's rivers are thin non-warm lines that would otherwise cut sea
# channels through the continents now that the coastline morphology is light;
# seal water that is thin everywhere (<=6px to land) while leaving lakes,
# bays and real straits open
# seal by opening the SEA: erode it, then regrow from the wide water that
# survives -- channels narrower than ~16px never come back and become land.
# (closing the land instead leaves 1px seams down the middle of channels
# just wider than the reach, which used to turn into thread provinces)
sea_er = ndimage.binary_erosion(~land, structure=np.ones((3, 3)), iterations=8,
                                border_value=1)
sea_op = ndimage.binary_dilation(sea_er, structure=np.ones((3, 3)), iterations=8)
land |= ~land & ~sea_op
del sea_er, sea_op
# safety: no land component may be a hairline sliver
ll2, ln2 = ndimage.label(land)
for lab, sl in enumerate(ndimage.find_objects(ll2), start=1):
    if sl is None:
        continue
    bh = sl[0].stop - sl[0].start
    bw = sl[1].stop - sl[1].start
    if min(bh, bw) <= 2:
        reg = land[sl]
        reg[ll2[sl] == lab] = False
        land[sl] = reg
del ll2

sea0 = ~land
# classification context: ALL dark sea marks, including those inside letter
# zones -- excluding them beforehand blinds the density rules exactly where
# ghosts appear; only the promoted candidates are zone-filtered
ink = dark & sea0 & ~ndimage.binary_dilation(land, iterations=4)
il, inn = ndimage.label(ink)
info = []
for p in regionprops(il):
    bh = p.bbox[2] - p.bbox[0]
    bw = p.bbox[3] - p.bbox[1]
    asp = max(bh, bw) / max(1, min(bh, bw))
    info.append((p.label, p.centroid, p.area, asp, p.solidity))
if info:
    all_pts = np.array([i[1] for i in info])
    all_area = np.array([i[2] for i in info])
    all_asp = np.array([i[3] for i in info])
    tree_all = cKDTree(all_pts)
    dash_pts = all_pts[(all_area >= 10) & (all_asp >= 2.5)]
    tree_dash = cKDTree(dash_pts) if len(dash_pts) else None
    tiny_pts = all_pts[all_area <= 12]
    tree_tiny = cKDTree(tiny_pts) if len(tiny_pts) else None
    ci = [i for i, inf in enumerate(info)
          if 12 <= inf[2] <= 400 and inf[3] <= 3.0 and inf[4] >= 0.6
          and not text_zone[int(inf[1][0]), int(inf[1][1])]]
    cpts = np.array([info[i][1] for i in ci])
    tree_c = cKDTree(cpts) if len(ci) else None
    lone = []
    for k_, i in enumerate(ci):
        c = np.array(info[i][1])
        # near a gridline dash -> a graticule crossing, not an islet
        if tree_dash is not None and len(tree_dash.query_ball_point(c, 45)):
            continue
        # dense dark neighbourhood -> tiny text or letter engraving
        if len(tree_all.query_ball_point(c, 25)) - 1 >= 3:
            continue
        # crowded same-kind dots -> letter stipple rows
        if tree_c is not None and len(tree_c.query_ball_point(c, 30)) - 1 > 1:
            continue
        # on a finely-dotted graticule line
        if tree_tiny is not None and len(tree_tiny.query_ball_point(c, 45)) >= 4:
            continue
        # two same-kind neighbours in opposite directions -> a dotted
        # rhumb ring or line, not a skerry cluster
        nb = [j for j in tree_c.query_ball_point(c, 70) if j != k_]
        ring = False
        for x_ in range(len(nb)):
            v1 = cpts[nb[x_]] - c
            d1 = np.linalg.norm(v1)
            if d1 < 20:
                continue
            for y_ in range(x_ + 1, len(nb)):
                v2 = cpts[nb[y_]] - c
                d2 = np.linalg.norm(v2)
                if d2 < 20:
                    continue
                if (v1 @ v2) / (d1 * d2 + 1e-9) < np.cos(np.radians(130)):
                    ring = True
                    break
            if ring:
                break
        if ring:
            continue
        lone.append(info[i][0])
    if lone:
        dots = np.isin(il, lone)
        dots = ndimage.binary_dilation(dots, iterations=2)
        land |= dots
        print(f"  +{len(lone)} ink-dot islets")
sea = ~land

rg = r - g
mtn_m = warm & land & (rg >= 42)
mtn_m = ndimage.binary_opening(mtn_m, iterations=2)
# the continents' names are written in big red capitals whose strokes pass
# the salmon test and would become letter-shaped mountains; real ranges are
# huge connected fields, so drop small isolated components
ml_, mn_ = ndimage.label(mtn_m)
msz = np.bincount(ml_.ravel(), minlength=mn_ + 1)
mkeep = msz >= 3000
mkeep[0] = False
mtn_m = mkeep[ml_]
del ml_
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
csizes = np.bincount(comp.ravel(), minlength=ncomp + 1)
STEP = 68
mk = 0
for c, sl in enumerate(ndimage.find_objects(comp), start=1):
    if sl is None:
        continue
    if csizes[c] >= 480:
        y0, y1 = sl[0].start, sl[0].stop - 1
        x0b, x1b = sl[1].start, sl[1].stop - 1
        gy, gx = np.mgrid[y0:y1 + 1:STEP, x0b:x1b + 1:STEP]
        sy = (gy + RNG.integers(-20, 21, gy.shape)).clip(0, CH - 1)
        sx = (gx + RNG.integers(-20, 21, gx.shape)).clip(0, CW - 1)
        inside = comp[sy, sx] == c
        sy, sx = sy[inside], sx[inside]
    else:
        sy, sx = np.array([], int), np.array([], int)
    if len(sx) == 0:
        # deepest interior point of the component
        m = comp[sl] == c
        d = ndimage.distance_transform_edt(m)
        yy, xx = np.unravel_index(np.argmax(d), d.shape)
        sy, sx = np.array([sl[0].start + yy]), np.array([sl[1].start + xx])
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
defs, terr = [], []
lat = np.abs(np.linspace(-1, 1, CH, dtype=np.float32))[:, None] * np.ones((1, CW), np.float32)

# vectorised per-province stats + colour LUTs (33M-px masks per province
# would take hours as a Python loop)
lcount = np.bincount(lab_land.ravel(), minlength=mk + 1)
lidx = [m for m in range(1, mk + 1) if lcount[m] > 0]
mm_ = ndimage.mean(mtn, lab_land, lidx)
la_ = ndimage.mean(lat, lab_land, lidx)
hh_ = ndimage.mean(h16, lab_land, lidx)
lut_land = np.zeros((mk + 1, 3), np.uint8)
k = 0
for i, m in enumerate(lidx):
    pid_ = ID0 + k
    col = cols[k]
    lut_land[m] = col
    mm, la, hh = mm_[i], la_[i], hh_[i]
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
scount = np.bincount(lab_sea.ravel(), minlength=smk + 1)
lut_sea = np.zeros((smk + 1, 3), np.uint8)
for m in range(1, smk + 1):
    if scount[m] == 0:
        continue
    pid_ = ID0 + k
    col = cols[k]
    lut_sea[m] = col
    defs.append(f"{pid_};{col[0]};{col[1]};{col[2]};x;")
    terr.append(f"{pid_}=sea")
    sea_ids.append(pid_)
    k += 1

prov_rgb = np.where((lab_land > 0)[..., None], lut_land[lab_land], lut_sea[lab_sea])

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
