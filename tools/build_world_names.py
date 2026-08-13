#!/usr/bin/env python3
"""Name the invented world's oceans and mountain ranges after the artwork.

The hand-drawn map (worldsource/worldmap.png) labels its seas with big
engraved letter arcs and its ranges with red ridge lettering. Those names
were read off the drawing and anchored here at source-image coordinates;
every sea province takes the name of its nearest sea anchor, and every
mountain province takes the name of its nearest range anchor (within a
cap, so unnamed minor ranges keep their generated names).

Writes worldsource/map_data/names.csv ("id;name") which
tools/build_fixed_map.py picks up via GH_NAMES_FILE.

Needs pillow, numpy and scipy (all installed by the build workflow).
"""
import csv
import re
import numpy as np
from PIL import Image
from scipy import ndimage

ROOT = __import__("pathlib").Path(__file__).resolve().parent.parent
MD = ROOT / "worldsource" / "map_data"
Image.MAX_IMAGE_PIXELS = None
X0 = 907                       # the drawing sits at this x offset on the canvas

# (y, x) anchors in source-image coordinates, read from the artwork
SEAS = {
    "Lindmare": [(60, 1700), (90, 1950), (130, 2200)],
    "Qveen's Sae": [(650, 940), (850, 860), (1050, 780)],
    "Abvlidron": [(1160, 1100), (1250, 1230), (1330, 1360)],
    "Vvnvnd": [(1900, 280), (2050, 270), (2200, 260)],
    "Ioyity": [(2200, 880), (2400, 900), (2600, 850), (2800, 800)],
    "The Passapartagos": [(1580, 1700), (1600, 2200), (1620, 2700), (1300, 2400)],
    "Grandiver": [(900, 2850), (920, 3100), (940, 3350)],
    "Breadwaters": [(80, 3700), (120, 4200), (160, 4700)],
    "Lvnmare": [(450, 4600), (600, 4750), (750, 4880)],
    "Impermare": [(1200, 5800), (1500, 5900), (1800, 6000)],
    "Oliver": [(2100, 5550), (2110, 5700)],
    "Bazimare": [(2400, 5950), (2700, 6000), (3000, 6050)],
    "Yearlos": [(3170, 5100), (3190, 5300)],
    "Kisocletian Way": [(3500, 3900), (3600, 4200), (3650, 4500), (3220, 4680)],
    "The Dangers": [(3950, 2300), (3980, 2600), (4000, 2900)],
    "Is Vdan": [(3780, 1450), (3810, 1650), (3840, 1830)],
    "Sayen": [(3900, 5700), (3980, 5900)],
}
RANGES = {
    "Shaorg Crvip": [(760, 1600), (860, 1810)],
    "Saghclios": [(200, 2100)],
    "Killopis": [(497, 2700)],
    "Trapomes": [(920, 3450)],
    "Whateview": [(1200, 4360)],
    "The Grvdges": [(1850, 4200), (2200, 4200), (2450, 4300)],
    "Tinmill": [(1140, 5450)],
    "Wolenhills": [(630, 4380)],
    "Doshhills": [(820, 4450)],
    "Amewill": [(1930, 5610)],
    "Spyarber": [(3880, 5620)],
    "Ragsas": [(4000, 5200)],
    "Cimbin Jealen": [(3220, 2100), (3120, 2450)],
    "Eymbvsry": [(3600, 1550)],
    "Annhvr": [(3040, 1900)],
    "Qimarre": [(3400, 3430)],
    "Resoeti": [(3120, 750)],
    "Rivnho": [(2800, 2920)],
}
RANGE_CAP = 700.0              # px: ranges farther than this stay unnamed
SEA_CAP = 1000.0               # px: keeps inland lakes out of the ocean names

print("naming provinces ...")
prov = np.asarray(Image.open(MD / "provinces.png").convert("RGB"), dtype=np.uint32)
key = (prov[:, :, 0] << 16) | (prov[:, :, 1] << 8) | prov[:, :, 2]
H, W = key.shape

col2id = {}
with open(MD / "definition.csv", encoding="utf-8") as f:
    for row in csv.reader(f, delimiter=";"):
        if row and row[0].isdigit() and int(row[0]):
            col2id[(int(row[1]) << 16) | (int(row[2]) << 8) | int(row[3])] = int(row[0])

terr = {}
with open(MD / "00_province_terrain.txt", encoding="utf-8") as f:
    for line in f:
        if "=" in line and not line.startswith("default"):
            pid, t = line.strip().split("=")
            terr[int(pid)] = t

# centroids per colour, vectorised
flat = key.ravel()
ys = np.repeat(np.arange(H, dtype=np.int64), W)
xs = np.tile(np.arange(W, dtype=np.int64), H)
order = np.argsort(flat, kind="stable")
sflat = flat[order]
bounds = np.flatnonzero(np.r_[True, sflat[1:] != sflat[:-1], True])
cent = {}
for i in range(len(bounds) - 1):
    idxs = order[bounds[i]:bounds[i + 1]]
    pid = col2id.get(int(sflat[bounds[i]]))
    if pid is None:
        continue
    cent[pid] = (float(ys[idxs].mean()), float(xs[idxs].mean()))

def nearest(anchors, cy, cx):
    best, bd = None, 1e18
    for name, pts in anchors.items():
        for (ay, ax) in pts:
            d = (cy - ay) ** 2 + (cx - (ax + X0)) ** 2
            if d < bd:
                best, bd = name, d
    return best, bd ** 0.5

# inland lakes are not the ocean: a water province that belongs to a water
# body which never reaches the map edge is a lake, and must not be handed an
# ocean's name (a small lake stamped "Grandiver" reads as a sea, not a lake)
sea_ids = [p for p, t in terr.items() if t == "sea"]
pal = np.array(sorted(col2id), dtype=np.uint32)
pal_id = np.array([col2id[int(c)] for c in pal], dtype=np.int32)
pos = np.searchsorted(pal, key).clip(0, len(pal) - 1)
idg = np.where(pal[pos] == key, pal_id[pos], -1)
water = np.isin(idg, sea_ids)
wlab, wn = ndimage.label(water)
edge = set(np.unique(np.concatenate([wlab[0], wlab[-1], wlab[:, 0], wlab[:, -1]])).tolist()) - {0}
lake_ids = set()
for comp in range(1, wn + 1):
    if comp in edge:
        continue                      # touches the frame: open ocean
    lake_ids |= set(np.unique(idg[wlab == comp]).tolist())
lake_ids.discard(-1)
print(f"  {len(lake_ids)} inland lake provinces kept out of the ocean names")

names = {}
n_sea = n_mtn = 0
for pid, (cy, cx) in cent.items():
    t = terr.get(pid)
    if pid in lake_ids:
        continue
    if t == "sea":
        nm, d = nearest(SEAS, cy, cx)
        if nm and d <= SEA_CAP:
            names[pid] = nm
            n_sea += 1
    elif t == "mountains":
        nm, d = nearest(RANGES, cy, cx)
        if nm and d <= RANGE_CAP:
            names[pid] = nm
            n_mtn += 1

# a lake is water but not a navigable sea zone: default.map lists it under
# "lakes" instead of "sea_zones" (build_fixed_map counts both as water)
dm_path = MD / "default.map"
dm = dm_path.read_text(encoding="utf-8")
head, zones = [], []
for line in dm.splitlines():
    m = re.match(r"^sea_zones = LIST \{ (.*) \}$", line.strip())
    if m:
        zones += [int(x) for x in m.group(1).split()]
    else:
        head.append(line)
head = [h for h in head if not h.strip().startswith("lakes = LIST")]
kept = [z for z in zones if z not in lake_ids]
lakes = sorted(lake_ids)
with open(dm_path, "w", encoding="utf-8") as f:
    f.write("\n".join(head).rstrip("\n") + "\n")
    for i in range(0, len(kept), 300):
        f.write(f"sea_zones = LIST {{ {' '.join(str(x) for x in kept[i:i+300])} }}\n")
    for i in range(0, len(lakes), 300):
        f.write(f"lakes = LIST {{ {' '.join(str(x) for x in lakes[i:i+300])} }}\n")
print(f"  moved {len(lakes)} lakes from sea_zones to the lakes list")

with open(MD / "names.csv", "w", encoding="utf-8") as f:
    for pid in sorted(names):
        f.write(f"{pid};{names[pid]}\n")
print(f"  named {n_sea} sea provinces, {n_mtn} mountain provinces "
      f"({len(SEAS)} seas, {len(RANGES)} ranges)")
