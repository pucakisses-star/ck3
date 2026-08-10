#!/usr/bin/env python3
"""Replace the world's province partition with an externally supplied map.

Reads worldsource/province_template.png (a user-supplied 8192x4096 region
map matching the world canvas: one flat colour per province, boundaries
following the drawing's coastline) and rewrites worldsource/map_data/
provinces.png + definition.csv + 00_province_terrain.txt + default.map to
match it, replacing the watershed-generated partition from
tools/build_world_from_image.py.

The template's own colours are NOT reused verbatim: some are repeated
across unrelated, disconnected regions (a decorative/quantised palette,
not a strict one-colour-per-province id map), so every connected same-
colour blob is treated as its own province and given a freshly assigned
unique colour. Land/sea per province is decided by majority vote against
the CURRENT map_data (which already carries all the coastline cleanup —
letter removal, island keeping, lake detection — done in the main
generator); terrain type is reclassified from the committed heightmap and
a freshly recomputed mountain-colour field, the same way the main
generator does it. heightmap.png and rivers.png are untouched.

Dev-only: needs scipy (not the CI's pillow/numpy). Run locally and commit
the map_data outputs; CI then rebuilds docs/ from them.
"""
import csv
from pathlib import Path

import numpy as np
from PIL import Image
from scipy import ndimage
from scipy.sparse import coo_matrix
from scipy.sparse.csgraph import connected_components

Image.MAX_IMAGE_PIXELS = None
ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "worldsource" / "worldmap.png"
TEMPLATE = ROOT / "worldsource" / "province_template.png"
MD = ROOT / "worldsource" / "map_data"
CW, CH = 8192, 4096
ID0 = 20000
MIN_SIZE = 30          # smaller stray components merge into a neighbour

# ------------------------------------------------------------- load inputs
print("loading province template ...")
tmpl = np.asarray(Image.open(TEMPLATE).convert("RGB"))
if tmpl.shape[:2] != (CH, CW):
    raise SystemExit(f"template is {tmpl.shape[1]}x{tmpl.shape[0]}, expected {CW}x{CH}")

old_prov = np.asarray(Image.open(MD / "provinces.png").convert("RGB"), dtype=np.uint32)
old_key = (old_prov[:, :, 0] << 16) | (old_prov[:, :, 1] << 8) | old_prov[:, :, 2]
old_col2id = {}
with open(MD / "definition.csv", encoding="utf-8") as f:
    for row in csv.reader(f, delimiter=";"):
        if row and row[0].isdigit() and int(row[0]):
            old_col2id[(int(row[1]) << 16) | (int(row[2]) << 8) | int(row[3])] = int(row[0])
old_terr = {}
with open(MD / "00_province_terrain.txt", encoding="utf-8") as f:
    for line in f:
        if "=" in line and not line.startswith("default"):
            pid, t = line.strip().split("=")
            old_terr[int(pid)] = t
pal = np.array(sorted(old_col2id), dtype=np.uint32)
pal_id = np.array([old_col2id[int(k)] for k in pal], dtype=np.int32)
pos = np.searchsorted(pal, old_key).clip(0, len(pal) - 1)
old_id_grid = np.where(pal[pos] == old_key, pal_id[pos], -1)
old_sea_ids = {pid for pid, t in old_terr.items() if t == "sea"}
old_land = ~np.isin(old_id_grid, list(old_sea_ids)) & (old_id_grid >= 0)

# ---------------------------------------------------- connected components
print("labelling connected same-colour regions ...")
key = (tmpl[:, :, 0].astype(np.int64) << 16) | (tmpl[:, :, 1].astype(np.int64) << 8) | tmpl[:, :, 2]
idx = np.arange(CH * CW).reshape(CH, CW)
rows, cols = [], []
m = key[:, :-1] == key[:, 1:]
rows.append(idx[:, :-1][m]); cols.append(idx[:, 1:][m])
m = key[:-1, :] == key[1:, :]
rows.append(idx[:-1, :][m]); cols.append(idx[1:, :][m])
rows = np.concatenate(rows); cols = np.concatenate(cols)
g = coo_matrix((np.ones(len(rows), np.uint8), (rows, cols)), shape=(CH * CW, CH * CW))
n_comp, labels = connected_components(g, directed=False)
labels = labels.reshape(CH, CW)
print(f"  {n_comp} regions")

# merge tiny stray components into their largest touching neighbour
sizes = np.bincount(labels.ravel(), minlength=n_comp)
tiny = np.flatnonzero(sizes < MIN_SIZE)
if len(tiny):
    keep = np.ones(n_comp, bool)
    keep[tiny] = False
    src_ok = keep[labels]
    fill_idx = ndimage.distance_transform_edt(~src_ok, return_distances=False, return_indices=True)
    filled = np.where(src_ok, labels, labels[tuple(fill_idx)])
    uniq_vals, inv = np.unique(filled, return_inverse=True)
    labels = inv.reshape(CH, CW)
    n_comp = len(uniq_vals)
    print(f"  merged {len(tiny)} stray regions under {MIN_SIZE}px")

# ------------------------------------------------------ land/sea + terrain
print("classifying land/sea and terrain ...")
land_vote = ndimage.mean(old_land.astype(np.float32), labels, range(n_comp))
is_land = np.asarray(land_vote) >= 0.5

# ---- tiny islands directly off a coast join that coastal province ----
# The template colours islets as their own regions; a speck of land hugging
# a bigger landmass shouldn't stand alone as a province. Each qualifying
# islet is merged WHOLE into the single nearest coastal province — an
# island is never split between two provinces.
ISLAND_MAX = 100       # canvas px: only land-mask islets smaller than this
REACH = 10             # ...and only when this close to other land
land_mask = is_land[labels]
lm_lab, lm_n = ndimage.label(land_mask)
lm_sizes = np.bincount(lm_lab.ravel(), minlength=lm_n + 1)
tiny_ids = np.flatnonzero(lm_sizes < ISLAND_MAX)
tiny_ids = tiny_ids[tiny_ids != 0]
big_land = land_mask & ~np.isin(lm_lab, tiny_ids)
if len(tiny_ids) and big_land.any():
    dist, (iy, ix) = ndimage.distance_transform_edt(~big_land, return_indices=True)
    objs = ndimage.find_objects(lm_lab)
    merged = 0
    for t in tiny_ids:
        sl = objs[t - 1]
        m = lm_lab[sl] == t
        d = np.where(m, dist[sl], np.inf)
        pos = np.unravel_index(np.argmin(d), d.shape)
        if d[pos] > REACH:
            continue
        target = labels[iy[sl][pos], ix[sl][pos]]
        labels[sl][m] = target
        merged += 1
    uniq_vals, inv = np.unique(labels, return_inverse=True)
    labels = inv.reshape(CH, CW)
    is_land = is_land[uniq_vals]
    n_comp = len(uniq_vals)
    print(f"  merged {merged} tiny coastal islets whole into their coastal "
          f"provinces ({n_comp} regions remain)")
    del dist, iy, ix
del land_mask, lm_lab, lm_sizes, tiny_ids, big_land

print("  recomputing the mountain-colour field ...")
src = Image.open(SRC).convert("RGB")
canvas = np.full((CH, CW, 3), 245, np.int16)
x0 = (CW - src.width) // 2
canvas[:src.height, x0:x0 + src.width] = np.asarray(src, dtype=np.int16)
r, g, b = canvas[..., 0], canvas[..., 1], canvas[..., 2]
warm = (r - b) > 24
mtn_m = warm & (r - g >= 42)
mtn_m = ndimage.binary_opening(mtn_m, iterations=2)
ml_, mn_ = ndimage.label(mtn_m)
msz = np.bincount(ml_.ravel(), minlength=mn_ + 1)
mkeep = msz >= 3000
mkeep[0] = False
mtn_m = mkeep[ml_]
mtn = np.clip((((r - g).astype(np.float32)) - 38) / 70.0, 0, 1) * mtn_m
mtn = ndimage.gaussian_filter(mtn, 9.0)
del ml_, mn_, mkeep, msz

h16 = np.asarray(Image.open(MD / "heightmap.png"), dtype=np.float32) / 255.0
lat = np.abs(np.linspace(-1, 1, CH, dtype=np.float32))[:, None] * np.ones((1, CW), np.float32)
SEA = 0.34
mm_ = np.asarray(ndimage.mean(mtn, labels, range(n_comp)))
hh_ = np.asarray(ndimage.mean(h16, labels, range(n_comp)))
la_ = np.asarray(ndimage.mean(lat, labels, range(n_comp)))

def classify(i):
    mm, hh, la = mm_[i], hh_[i], la_[i]
    if mm > 0.18 or hh > SEA + 0.34:
        return "mountains"
    if mm > 0.06 or hh > SEA + 0.16:
        return "hills"
    if la > 0.82:
        return "taiga"
    if la > 0.7:
        return "plains"
    if la < 0.28:
        return "desert"
    pid_ = ID0 + i
    return "forest" if ((pid_ * 73) % 5 == 0) else ("farmlands" if (pid_ % 7 == 0) else "plains")

# ---------------------------------------------------------------- outputs
print("writing province_template outputs ...")
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

cols = uniq_colors(n_comp)
prov_rgb = np.zeros((CH, CW, 3), np.uint8)
defs, terr_lines, sea_ids = [], [], []
land_order = [i for i in range(n_comp) if is_land[i]]
sea_order = [i for i in range(n_comp) if not is_land[i]]
remap = np.zeros(n_comp, np.int32)
k = 0
for i in land_order:
    pid_ = ID0 + k
    col = cols[k]
    prov_rgb[labels == i] = col
    defs.append(f"{pid_};{col[0]};{col[1]};{col[2]};x;")
    terr_lines.append(f"{pid_}={classify(i)}")
    remap[i] = pid_
    k += 1
for i in sea_order:
    pid_ = ID0 + k
    col = cols[k]
    prov_rgb[labels == i] = col
    defs.append(f"{pid_};{col[0]};{col[1]};{col[2]};x;")
    terr_lines.append(f"{pid_}=sea")
    sea_ids.append(pid_)
    remap[i] = pid_
    k += 1
print(f"  {len(land_order)} land provinces, {len(sea_order)} sea provinces")

Image.fromarray(prov_rgb).save(MD / "provinces.png")

with open(MD / "definition.csv", "w", encoding="utf-8") as f:
    f.write("0;0;0;0;x;\n")
    f.write("\n".join(defs) + "\n")

with open(MD / "00_province_terrain.txt", "w", encoding="utf-8") as f:
    f.write("default_land=plains\ndefault_sea=sea\ndefault_coastal_sea=coastal_sea\n")
    f.write("\n".join(terr_lines) + "\n")

with open(MD / "default.map", "w", encoding="utf-8") as f:
    f.write('definitions = "definition.csv"\nprovinces = "provinces.png"\n')
    f.write('rivers = "rivers.png"\nadjacencies = "adjacencies.csv"\n\n')
    for i in range(0, len(sea_ids), 300):
        chunk = " ".join(str(x) for x in sea_ids[i:i + 300])
        f.write(f"sea_zones = LIST {{ {chunk} }}\n")

print("done.")
