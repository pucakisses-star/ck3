#!/usr/bin/env python3
"""Refit worldsource/map_data/rivers.png to the CURRENT landmass shape.

The rivers were traced from the hand-drawn map's coastline, but the province
template that now defines the world redrew the coasts: river strokes can run
across what is now open sea, or stop short of a coastline that moved.

rivers.png uses the game's encoding — white land, magenta water, coloured
river strokes. This rebuilds the land/water fields from the current
provinces.png + terrain file, re-clips the river strokes to the new land,
drops the tiny orphan fragments clipping leaves behind, and where a river no
longer reaches the sea it extends the mouth from its closest approach
straight to the nearest coast.

Dev-only (needs scipy). Run after tools/apply_province_template.py, commit
the refreshed rivers.png; CI rebuilds docs/ from it.
"""
import csv
import re
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage

Image.MAX_IMAGE_PIXELS = None
ROOT = Path(__file__).resolve().parent.parent
MD = ROOT / "worldsource" / "map_data"
MIN_FRAG = 30          # clipped fragments smaller than this are dropped
MOUTH_REACH = 200      # extend a landlocked river to a sea up to this far
BRUSH = 1              # half-width of the drawn mouth stroke (rivers are ~3px)
RIVER_COL = (60, 90, 200)

print("loading current landmass ...")
prov = np.asarray(Image.open(MD / "provinces.png").convert("RGB"), dtype=np.uint32)
key = (prov[:, :, 0] << 16) | (prov[:, :, 1] << 8) | prov[:, :, 2]
col2id = {}
with open(MD / "definition.csv", encoding="utf-8") as f:
    for row in csv.reader(f, delimiter=";"):
        if row and row[0].isdigit() and int(row[0]):
            col2id[(int(row[1]) << 16) | (int(row[2]) << 8) | int(row[3])] = int(row[0])
sea_ids = set()
with open(MD / "00_province_terrain.txt", encoding="utf-8") as f:
    for line in f:
        m = re.match(r"^(\d+)=sea", line)
        if m:
            sea_ids.add(int(m.group(1)))
pal = np.array(sorted(col2id), dtype=np.uint32)
pal_id = np.array([col2id[int(k)] for k in pal], dtype=np.int32)
pos = np.searchsorted(pal, key).clip(0, len(pal) - 1)
idg = np.where(pal[pos] == key, pal_id[pos], -1)
land = ~np.isin(idg, list(sea_ids)) & (idg >= 0)
sea = ~land
print(f"  land fraction {land.mean():.3f}")

print("clipping rivers to land ...")
rv = np.asarray(Image.open(MD / "rivers.png").convert("RGB"), dtype=np.uint16)
white = (rv[:, :, 0] > 200) & (rv[:, :, 1] > 200) & (rv[:, :, 2] > 200)
magenta = (rv[:, :, 0] > 200) & (rv[:, :, 1] < 80) & (rv[:, :, 2] > 80)
riv = ~(white | magenta)
before = int(riv.sum())
riv &= land
clipped = before - int(riv.sum())

lab, n = ndimage.label(riv)
sizes = np.bincount(lab.ravel(), minlength=n + 1)
keep = sizes >= MIN_FRAG
keep[0] = False
dropped = int(np.count_nonzero(~keep[1:] & (sizes[1:] > 0)))
riv = keep[lab]
print(f"  clipped {clipped}px of sea-running strokes, dropped {dropped} orphan fragments")

print("extending cut-off river mouths to the new coast ...")
dsea, (iy, ix) = ndimage.distance_transform_edt(~sea, return_indices=True)
lab, n = ndimage.label(riv)
img = Image.fromarray(riv.astype(np.uint8) * 255, mode="L")
dr = ImageDraw.Draw(img)
objs = ndimage.find_objects(lab)
extended = 0
for c in range(1, n + 1):
    sl = objs[c - 1]
    m = lab[sl] == c
    d = np.where(m, dsea[sl], np.inf)
    pos2 = np.unravel_index(np.argmin(d), d.shape)
    dmin = d[pos2]
    if dmin <= 1.5:
        continue                       # already touches the sea
    if dmin > MOUTH_REACH:
        continue                       # far inland basin: leave it be
    y0, x0 = pos2[0] + sl[0].start, pos2[1] + sl[1].start
    y1, x1 = int(iy[y0, x0]), int(ix[y0, x0])
    dr.line([(x0, y0), (x1, y1)], fill=255, width=BRUSH * 2 + 1)
    extended += 1
print(f"  extended {extended} river mouths")

riv = (np.asarray(img) > 128) & land   # trim any overhang into the sea

print("writing rivers.png in the game encoding ...")
out = np.empty((*land.shape, 3), np.uint8)
out[land] = (255, 255, 255)
out[sea] = (255, 0, 128)
out[riv] = RIVER_COL
Image.fromarray(out).save(MD / "rivers.png")
print(f"done: {int(riv.sum())}px of river on the current landmass")
