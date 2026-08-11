#!/usr/bin/env python3
"""Nudge province borders onto rivers, lakes and coasts.

Rivers make natural frontiers, but the supplied province template draws its
boundaries freehand, so a border often runs a little off the river it clearly
means to follow. This re-grows every land province from its own core through
a cost field that is cheap far from water and expensive next to it, so the
watershed lines between provinces settle onto the drawn rivers (and onto the
lake/sea coasts, which are barriers already).

It is deliberately conservative:
  * every existing province keeps its identity and its core — none are
    created, deleted or merged, so islands, lakes and the realm hierarchy
    all survive;
  * only land is re-partitioned; water provinces are untouched;
  * a border only moves as far as the river it snaps to, because the cost
    field is flat beyond RIVER_PULL px from water.

Dev-only (needs scipy + skimage). Run after the province template and river
map are both in place; commit the rewritten provinces.png.
"""
import csv
import re
from pathlib import Path

import numpy as np
from PIL import Image
from scipy import ndimage
from skimage.segmentation import watershed

Image.MAX_IMAGE_PIXELS = None
ROOT = Path(__file__).resolve().parent.parent
MD = ROOT / "worldsource" / "map_data"
RIVER_PULL = 120     # px: how far from water the pull is felt
CORE_ERODE = 10      # px: how far a province core is pulled back from its edge

print("loading province + river data ...")
prov = np.asarray(Image.open(MD / "provinces.png").convert("RGB"), dtype=np.uint32)
key = (prov[:, :, 0] << 16) | (prov[:, :, 1] << 8) | prov[:, :, 2]
col2id, id2col = {}, {}
for row in csv.reader(open(MD / "definition.csv", encoding="utf-8"), delimiter=";"):
    if row and row[0].isdigit() and int(row[0]):
        i = int(row[0]); c = (int(row[1]), int(row[2]), int(row[3]))
        col2id[(c[0] << 16) | (c[1] << 8) | c[2]] = i
        id2col[i] = c
terr = {}
for line in open(MD / "00_province_terrain.txt", encoding="utf-8"):
    m = re.match(r"^(\d+)=(.+)$", line)
    if m:
        terr[int(m.group(1))] = m.group(2)
sea_ids = {p for p, t in terr.items() if t == "sea"}
pal = np.array(sorted(col2id), dtype=np.uint32)
pal_id = np.array([col2id[int(k)] for k in pal], dtype=np.int32)
pos = np.searchsorted(pal, key).clip(0, len(pal) - 1)
idg = np.where(pal[pos] == key, pal_id[pos], -1)
water = np.isin(idg, list(sea_ids)) | (idg < 0)
land = ~water

rv = np.asarray(Image.open(MD / "rivers.png").convert("RGB"), dtype=np.uint16)
white = (rv[:, :, 0] > 200) & (rv[:, :, 1] > 200) & (rv[:, :, 2] > 200)
mag = (rv[:, :, 0] > 200) & (rv[:, :, 1] < 80) & (rv[:, :, 2] > 80)
river = ~(white | mag)
print(f"  {int(river.sum())} river px over {int(land.sum())} land px")

# ---- cost field: expensive to cross near water, flat far from it, so the
# watershed boundary between two provinces prefers to lie on a river
print("building the river-pull cost field ...")
dwater = ndimage.distance_transform_edt(~(river | water)).astype(np.float32)
# watershed lines form on RIDGES, so water must be the ridge: 1 on a river,
# falling to 0 beyond RIVER_PULL px, which is where borders are free to sit
cost = 1.0 - np.clip(dwater / RIVER_PULL, 0, 1)
cost = ndimage.gaussian_filter(cost, 1.5)

# ---- seeds: each land province's eroded core keeps its identity
print("eroding province cores as seeds ...")
land_ids = sorted(set(np.unique(idg[land]).tolist()) - {-1})
markers = np.zeros(idg.shape, np.int32)
kept = 0
for pid in land_ids:
    m = idg == pid
    core = ndimage.binary_erosion(m, iterations=CORE_ERODE)
    if not core.any():                              # tiny province: keep as is
        core = m
    markers[core] = pid
    kept += 1
print(f"  {kept} province cores seeded")

print("re-growing provinces through the cost field ...")
new_id = watershed(cost, markers, mask=land)
# any land the watershed missed keeps its old province
new_id = np.where((new_id == 0) & land, idg, new_id)
new_id = np.where(land, new_id, idg)

moved = int(((new_id != idg) & land).sum())
lost = [p for p in land_ids if not (new_id == p).any()]
print(f"  {moved} land px changed province ({moved / max(1, int(land.sum())):.1%})")
print(f"  provinces lost: {len(lost)}")
if lost:                                            # never drop a province
    for pid in lost:
        m = idg == pid
        new_id[m] = pid
    print("  restored them from the original partition")

# ---- how much of the river network now acts as a province border?
driver = ndimage.distance_transform_edt(~river)
dcoast = ndimage.distance_transform_edt(land)
def _stats(ids):
    e = (ndimage.grey_dilation(ids, size=3) != ndimage.grey_erosion(ids, size=3)) & land
    interior = e & (dcoast > 4)                      # coastal borders are trivially on water
    rb = river & land
    return (100 * (interior & (driver <= 3)).sum() / max(1, interior.sum()),
            100 * (rb & ndimage.binary_dilation(e, iterations=2)).sum() / max(1, rb.sum()))
a0, b0 = _stats(idg)
a1, b1 = _stats(new_id)
print(f"  interior border on a river: {a0:.1f}% -> {a1:.1f}%")
print(f"  river network acting as a border: {b0:.1f}% -> {b1:.1f}%")

out_rgb = np.zeros((*idg.shape, 3), np.uint8)
for pid, col in id2col.items():
    out_rgb[new_id == pid] = col
Image.fromarray(out_rgb).save(MD / "provinces.png")
print(f"provinces.png rewritten ({len(land_ids)} land + {len(sea_ids)} water provinces, all kept)")
