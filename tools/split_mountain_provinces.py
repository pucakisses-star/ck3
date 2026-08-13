#!/usr/bin/env python3
"""Carve drawn mountain ranges out of the provinces that swallowed them.

Where the province template merged a range into the lowland around it, one
province ends up holding both a snow-capped range and a stretch of farmland,
and the map paints the whole thing one terrain. This splits those provinces
along the range: the range becomes its own mountain province, the rest keeps
the original id (so ids already in use — and any saved map edits keyed to
them — stay valid), and the new pieces are appended after the highest id.

The range shape comes from the drawing's own salmon ridge shading in
worldsource/worldmap.png, closed and hole-filled into solid polygons so a
range reads as one body rather than a spray of hatching. A split only
happens when BOTH sides are big enough to be a province on their own;
anything smaller is folded into whichever neighbour it touches, so no
stringy collars are created.

Rewrites, in place: provinces.png, definition.csv, 00_province_terrain.txt
and default.map (its impassable_mountains list). Land and sea are untouched,
so rivers.png and heightmap.png stay valid. Run the normal pipeline
afterwards (build_world_names -> build_fixed_map -> build_world_polity).

Dev-only: needs scipy (not the CI's pillow/numpy). Run it locally and commit
the map_data outputs.
"""
import csv

import numpy as np
from PIL import Image
from scipy import ndimage

Image.MAX_IMAGE_PIXELS = None
ROOT = __import__("pathlib").Path(__file__).resolve().parent.parent
SRC = ROOT / "worldsource" / "worldmap.png"
MD = ROOT / "worldsource" / "map_data"
CW, CH = 8192, 4096
MIN_PIECE = 5000              # px: below this a piece is not its own province
SEA = 0.34                    # heightmap sea level, as in the generators

# ------------------------------------------------------------- current map
print("loading map_data ...")
prov = np.asarray(Image.open(MD / "provinces.png").convert("RGB"), dtype=np.uint32)
key = (prov[:, :, 0] << 16) | (prov[:, :, 1] << 8) | prov[:, :, 2]
col2id, id2col = {}, {}
with open(MD / "definition.csv", encoding="utf-8") as f:
    for row in csv.reader(f, delimiter=";"):
        if row and row[0].isdigit() and int(row[0]):
            c = (int(row[1]) << 16) | (int(row[2]) << 8) | int(row[3])
            col2id[c] = int(row[0])
            id2col[int(row[0])] = (int(row[1]), int(row[2]), int(row[3]))

terr = {}
with open(MD / "00_province_terrain.txt", encoding="utf-8") as f:
    for line in f:
        if "=" in line and not line.startswith("default"):
            k, v = line.strip().split("=")
            terr[int(k)] = v

pal = np.array(sorted(col2id), dtype=np.uint32)
pal_id = np.array([col2id[int(c)] for c in pal], dtype=np.int32)
pos = np.searchsorted(pal, key).clip(0, len(pal) - 1)
idg = np.where(pal[pos] == key, pal_id[pos], -1).astype(np.int32)
del prov, key, pos

sea_ids = {p for p, t in terr.items() if t == "sea"}
land = (idg >= 0) & ~np.isin(idg, np.array(sorted(sea_ids), dtype=np.int32))

# -------------------------------------------------- the drawn ranges
print("reading the drawn ridge shading ...")
src = Image.open(SRC).convert("RGB")
canvas = np.full((CH, CW, 3), 245, np.int16)
x0 = (CW - src.width) // 2
canvas[:src.height, x0:x0 + src.width] = np.asarray(src, dtype=np.int16)
r, g, b = canvas[..., 0], canvas[..., 1], canvas[..., 2]
warm = (r - b) > 24
shade = warm & (r - g >= 42)
shade = ndimage.binary_opening(shade, iterations=2)
sl_, sn_ = ndimage.label(shade)
ssz = np.bincount(sl_.ravel(), minlength=sn_ + 1)
skeep = ssz >= 3000
skeep[0] = False
shade = skeep[sl_]
del sl_, sn_, ssz, skeep

# hatching -> solid range bodies
st = np.ones((3, 3), bool)
ranges = ndimage.binary_closing(shade, structure=st, iterations=12)
ranges = ndimage.binary_fill_holes(ranges)
ranges = ndimage.binary_opening(ranges, structure=st, iterations=4) & land
print(f"  {int(shade.sum())} shaded px -> {int(ranges.sum())} px of range body")
shade_raw = shade.copy()          # the classifier scores raw shading, as the
                                  # generators do; the solid body is for carving

# fields the terrain classifier scores provinces on (same as the generators)
mtn = np.clip((((r - g).astype(np.float32)) - 38) / 70.0, 0, 1) * shade
mtn = ndimage.gaussian_filter(mtn, 9.0)
h16 = np.asarray(Image.open(MD / "heightmap.png"), dtype=np.float32) / 255.0
lat = np.abs(np.linspace(-1, 1, CH, dtype=np.float32))[:, None] * np.ones((1, CW), np.float32)
del canvas, r, g, b, warm, shade

# ------------------------------------------------------------------ split
print("splitting provinces along their ranges ...")
next_id = max(terr) + 1
used = set(id2col.values())

def fresh_color():
    """A colour no province uses; white and the rivers' magenta are reserved."""
    global _v
    while True:
        _v = (_v * 2654435761 + 40503) & 0xFFFFFF
        c = (_v >> 16 & 255, _v >> 8 & 255, _v & 255)
        if c in used or c == (255, 255, 255) or c == (255, 0, 128):
            continue
        used.add(c)
        return c

_v = 7
objs = ndimage.find_objects(np.where(idg >= 0, idg, 0))
split_log = []
for pid in sorted(set(terr) - sea_ids):
    sl = objs[pid - 1] if pid - 1 < len(objs) else None
    if sl is None:
        continue
    sub_id = idg[sl]
    m = sub_id == pid
    area = int(m.sum())
    rng = m & ranges[sl]
    if int(rng.sum()) < MIN_PIECE:
        continue

    # every piece: range bodies first, then what is left of the province
    lab = np.zeros(m.shape, np.int32)
    rl, rn = ndimage.label(rng)
    nxt = 0
    kinds = {}                       # piece label -> "mtn" / "rest"
    for c in range(1, rn + 1):
        blob = rl == c
        if blob.sum() < MIN_PIECE:
            continue
        nxt += 1
        lab[blob] = nxt
        kinds[nxt] = "mtn"
    if not kinds:
        continue
    ol, on = ndimage.label(m & (lab == 0))
    for c in range(1, on + 1):
        blob = ol == c
        if blob.sum() < MIN_PIECE:
            continue
        nxt += 1
        lab[blob] = nxt
        kinds[nxt] = "rest"
    if not any(k == "rest" for k in kinds.values()):
        continue                     # the province IS the range: leave it whole

    # slivers below the threshold join whichever piece they touch
    gap = m & (lab == 0)
    if gap.any():
        _, ind = ndimage.distance_transform_edt(lab == 0, return_indices=True)
        lab[gap] = lab[ind[0][gap], ind[1][gap]]

    # the biggest piece keeps the id; the others are new provinces
    sizes = {k: int((lab == k).sum()) for k in kinds}
    keeper = max(sizes, key=lambda k: sizes[k])
    for k in kinds:
        if k == keeper:
            continue
        new = next_id
        next_id += 1
        id2col[new] = fresh_color()
        idg[sl][(lab == k)] = new
        terr[new] = "plains"         # reclassified below
    split_log.append((pid, area, sizes[keeper], len(kinds) - 1))

print(f"  split {len(split_log)} provinces into "
      f"{len(split_log) + sum(x[3] for x in split_log)} pieces")

# ------------------------------------------------------- reclassify terrain
print("reclassifying terrain ...")
ids = np.array(sorted(terr), dtype=np.int32)
remap = np.full(int(ids.max()) + 2, -1, np.int32)
for i, p in enumerate(ids):
    remap[p] = i
li = np.where(idg >= 0, remap[np.clip(idg, 0, None)], -1)
ok = li >= 0
n = len(ids)
cnt = np.bincount(li[ok], minlength=n).astype(np.float64)
mm_ = np.bincount(li[ok], weights=mtn[ok], minlength=n) / np.maximum(cnt, 1)
hh_ = np.bincount(li[ok], weights=h16[ok], minlength=n) / np.maximum(cnt, 1)
la_ = np.bincount(li[ok], weights=lat[ok], minlength=n) / np.maximum(cnt, 1)
mf_ = np.bincount(li[ok & shade_raw], minlength=n) / np.maximum(cnt, 1)
MTN_COVER = 0.20

def impassable(i):
    return mm_[i] > 0.18 or hh_[i] > SEA + 0.34

def classify(i, pid):
    if impassable(i) or mf_[i] >= MTN_COVER:
        return "mountains"
    if mm_[i] > 0.06 or hh_[i] > SEA + 0.16:
        return "hills"
    if la_[i] > 0.82:
        return "taiga"
    if la_[i] > 0.7:
        return "plains"
    if la_[i] < 0.28:
        return "plains"
    return "forest" if ((pid * 73) % 5 == 0) else ("farmlands" if (pid % 7 == 0) else "plains")

wild = []
for i, p in enumerate(ids):
    p = int(p)
    if p in sea_ids:
        continue
    terr[p] = classify(i, p)
    if impassable(i):
        wild.append(p)
print(f"  {sum(1 for p in terr if terr[p] == 'mountains')} mountain provinces, "
      f"{len(wild)} of them impassable")

# ------------------------------------------------------------------ output
print("writing map_data ...")
assert not (idg < 0).any(), "some pixels belong to no province"
out = np.zeros((CH, CW, 3), np.uint8)
lut = np.zeros((int(ids.max()) + 2, 3), np.uint8)
for p, c in id2col.items():
    lut[p] = c
out[ok] = lut[idg[ok]]
Image.fromarray(out).save(MD / "provinces.png")

with open(MD / "definition.csv", "w", encoding="utf-8") as f:
    f.write("0;0;0;0;x;\n")
    for p in sorted(id2col):
        c = id2col[p]
        f.write(f"{p};{c[0]};{c[1]};{c[2]};x;\n")

with open(MD / "00_province_terrain.txt", "w", encoding="utf-8") as f:
    f.write("default_land=plains\ndefault_sea=sea\ndefault_coastal_sea=coastal_sea\n")
    for p in sorted(terr):
        f.write(f"{p}={terr[p]}\n")

dm = (MD / "default.map").read_text(encoding="utf-8")
head = [l for l in dm.splitlines()
        if not l.strip().startswith("impassable_mountains")]
with open(MD / "default.map", "w", encoding="utf-8") as f:
    f.write("\n".join(head).rstrip("\n") + "\n")
    for i in range(0, len(wild), 300):
        chunk = " ".join(str(x) for x in sorted(wild)[i:i + 300])
        f.write(f"impassable_mountains = LIST {{ {chunk} }}\n")
print("done.")
