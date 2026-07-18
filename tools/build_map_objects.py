#!/usr/bin/env python3
"""Convert the mod's Paradox 3-D models into web assets for the map.

Reads the game's own data:
  gfx/models/**            - .mesh (Paradox binary) models, .asset descriptors,
                             .dds textures (trees, holdings, landmarks, rocks)
  content_source/map_objects/masks/*.png - authored tree/rock density masks
                             (4096x2048, aligned with docs/map/prov.png)
  gfx/map/map_object_data/building_locators.txt - one settlement per barony
                             (id = province id, game coords, z flipped)
  gfx/map/map_object_data/0_GH_special_building_locators.txt - unique landmarks

Writes docs/map/objects/:
  models.json  - geometry (quantized, base64) + instance lists per model
  tex_*.png    - converted diffuse textures

Run AFTER build_fixed_map.py (needs docs/map/prov.png + meta.json).
"""
import base64
import json
import math
import re
import struct
from pathlib import Path

import numpy as np
from PIL import Image

Image.MAX_IMAGE_PIXELS = None
ROOT = Path(__file__).resolve().parent.parent
GFX = ROOT / "gfx" / "models"
MASKS = ROOT / "content_source" / "map_objects" / "masks"
MOD = ROOT / "gfx" / "map" / "map_object_data"
OUT = ROOT / "docs" / "map" / "objects"
OUT.mkdir(parents=True, exist_ok=True)
for stale in OUT.glob("*"):
    stale.unlink()

W, H = 4096, 2048          # grid == mask resolution; game coords are 2x
RNG = np.random.default_rng(1420)

# ---------------------------------------------------------- pdx binary parser
def parse_pdx(data: bytes):
    assert data[:4] == b"@@b@", "not a pdx binary file"
    i, n = 4, len(data)
    root = {"name": "root", "props": {}, "children": []}
    stack = [root]
    while i < n:
        c = data[i:i + 1]
        if c == b"!":
            nl = data[i + 1]
            name = data[i + 2:i + 2 + nl].decode("ascii", "replace")
            i += 2 + nl
            t = data[i:i + 1]
            i += 1
            cnt = struct.unpack_from("<I", data, i)[0]
            i += 4
            if t == b"i":
                vals = list(struct.unpack_from("<%di" % cnt, data, i)); i += 4 * cnt
            elif t == b"f":
                vals = list(struct.unpack_from("<%df" % cnt, data, i)); i += 4 * cnt
            elif t == b"s":
                vals = []
                for _ in range(max(1, cnt)):
                    sl = struct.unpack_from("<I", data, i)[0]; i += 4
                    vals.append(data[i:i + sl].split(b"\0")[0].decode("utf-8", "replace")); i += sl
            else:
                raise ValueError("bad type %r @%d" % (t, i))
            stack[-1]["props"][name] = vals
        elif c == b"[":
            depth = 0
            while data[i + depth:i + depth + 1] == b"[":
                depth += 1
            j = data.index(b"\0", i + depth)
            name = data[i + depth:j].decode("ascii", "replace")
            i = j + 1
            node = {"name": name, "props": {}, "children": []}
            del stack[depth:]
            stack[depth - 1]["children"].append(node)
            stack.append(node)
        else:
            raise ValueError("unexpected byte %r @%d" % (c, i))
    return root

# --------------------------------------------------- .asset descriptor lookup
# pdxmesh blocks: name = "x_mesh"  file = "x.mesh"  scale = s  texture_diffuse
ASSET_RE = re.compile(
    r'pdxmesh\s*=\s*\{[^{}]*?name\s*=\s*"([^"]+)"[^{}]*?file\s*=\s*"([^"]+)"', re.S)

asset_index = {}   # mesh name -> (mesh path, scale, diffuse-override)
for af in GFX.rglob("*.asset"):
    try:
        txt = af.read_text(encoding="utf-8-sig", errors="replace")
    except OSError:
        continue
    for m in re.finditer(r'pdxmesh\s*=\s*\{', txt):
        # take the balanced block
        depth, j = 0, m.end() - 1
        while j < len(txt):
            if txt[j] == "{": depth += 1
            elif txt[j] == "}":
                depth -= 1
                if depth == 0: break
            j += 1
        blk = txt[m.start():j + 1]
        nm = re.search(r'name\s*=\s*"([^"]+)"', blk)
        fl = re.search(r'file\s*=\s*"([^"]+)"', blk)
        if not nm or not fl:
            continue
        sc = re.search(r'\bscale\s*=\s*([\d.]+)', blk)
        td = re.search(r'texture_diffuse\s*=\s*"([^"]+)"', blk)
        asset_index.setdefault(nm.group(1), (
            af.parent / fl.group(1), float(sc.group(1)) if sc else 1.0,
            td.group(1) if td else None))
print(f"{len(asset_index)} pdxmesh entries in .asset files")

# ------------------------------------------------------------ texture output
tex_written = {}
def write_texture(src: Path, max_side: int, tint=None) -> str | None:
    key = str(src.resolve()) + (f"|{tint}" if tint else "")
    if key in tex_written:
        return tex_written[key]
    try:
        im = Image.open(src).convert("RGBA")
    except Exception as e:
        print(f"  ! texture {src.name}: {e}")
        return None
    if max(im.size) > max_side:
        r = max_side / max(im.size)
        im = im.resize((max(1, int(im.width * r)), max(1, int(im.height * r))),
                       Image.LANCZOS)
    if tint is not None:
        # the game's tree shader modulates the (grayscale-ish) diffuse with a
        # tint swatch; bake the same 2x modulate in so foliage isn't white
        a = np.asarray(im).astype(np.float32)
        a[:, :, :3] *= np.array(tint, np.float32) / 255.0 * 2.0
        im = Image.fromarray(np.clip(a, 0, 255).astype(np.uint8), "RGBA")
    name = f"tex_{len(tex_written):02d}_{src.stem[:28]}.png"
    im.save(OUT / name, optimize=True)
    tex_written[key] = name
    return name

def tint_for(mesh_path: Path):
    """Average colour of the model's tint swatch (prefer the green variant)."""
    for pat in ("*tint_green*.dds", "*tint*.dds"):
        cands = [p for p in sorted(mesh_path.parent.glob(pat)) if "blue" not in p.name]
        if cands:
            try:
                a = np.asarray(Image.open(cands[0]).convert("RGB"), np.float32)
                return tuple(a.reshape(-1, 3).mean(0))
            except Exception:
                return None
    return None

def find_texture(name: str, near: Path) -> Path | None:
    for d in (near, near.parent):
        c = d / name
        if c.exists():
            return c
    hits = list(GFX.rglob(name))
    return hits[0] if hits else None

# ------------------------------------------------------- geometry extraction
def extract_model(mesh_path: Path, scale: float, diffuse_override: str | None,
                  tex_side: int, tint=None):
    """-> dict(parts=[...], scale, hgt) or None"""
    try:
        root = parse_pdx(mesh_path.read_bytes())
    except Exception as e:
        print(f"  ! mesh {mesh_path.name}: {e}")
        return None
    by_tex = {}
    for obj in root["children"]:
        if obj["name"] != "object":
            continue
        for shape in obj["children"]:
            lod = shape["props"].get("lod")
            if lod and lod[0] != 0:
                continue
            if "decal" in shape["name"].lower():
                continue  # flat ground-projection planes, not real geometry
            for msh in shape["children"]:
                if msh["name"] != "mesh" or "p" not in msh["props"]:
                    continue
                mat = next((c for c in msh["children"] if c["name"] == "material"), None)
                diff = diffuse_override or (mat["props"].get("diff", [None])[0] if mat else None)
                if not diff:
                    continue
                # bake the .asset scale straight into the vertices so all
                # exported geometry is in game units
                v = np.asarray(msh["props"]["p"], np.float32).reshape(-1, 3) * scale
                u = np.asarray(msh["props"].get("u0", []), np.float32).reshape(-1, 2)
                t = np.asarray(msh["props"]["tri"], np.uint32)
                if len(u) != len(v):
                    u = np.zeros((len(v), 2), np.float32)
                ent = by_tex.setdefault(diff, [[], [], [], 0])
                ent[0].append(v); ent[1].append(u); ent[2].append(t + ent[3])
                ent[3] += len(v)
    parts, hgt = [], 0.0
    for diff, (vs, us, ts, _) in by_tex.items():
        v = np.concatenate(vs); u = np.concatenate(us); t = np.concatenate(ts)
        src = find_texture(diff, mesh_path.parent)
        tex = write_texture(src, tex_side, tint) if src else None
        if tex is None:
            continue
        lo, hi = v.min(0), v.max(0)
        hgt = max(hgt, float(hi[1] - lo[1]))
        span = np.maximum(hi - lo, 1e-6)
        vq = np.clip((v - lo) / span * 65535, 0, 65535).astype(np.uint16)
        uq = np.clip((u % 1.0001) * 65535, 0, 65535).astype(np.uint16)
        idx = t.astype(np.uint32) if len(v) > 65535 else t.astype(np.uint16)
        parts.append({
            "tex": tex,
            "lo": [round(float(x), 4) for x in lo], "hi": [round(float(x), 4) for x in hi],
            "v": base64.b64encode(vq.tobytes()).decode(),
            "u": base64.b64encode(uq.tobytes()).decode(),
            "x": base64.b64encode(idx.tobytes()).decode(),
            "x32": len(v) > 65535,
        })
    if not parts:
        return None
    return {"parts": parts, "scale": scale, "hgt": round(hgt, 3)}

def model_from_asset(mesh_name: str, tex_side: int, tint=None):
    ent = asset_index.get(mesh_name)
    if not ent:
        print(f"  ! no .asset for {mesh_name}")
        return None
    path, scale, diff = ent
    if not path.exists():
        print(f"  ! missing mesh file {path}")
        return None
    return extract_model(path, scale, diff, tex_side, tint)

# ---------------------------------------------------------------- world grid
print("loading world grid ...")
ids_im = np.asarray(Image.open(ROOT / "docs/map/prov.png").convert("RGB"))
ids = ids_im[:, :, 0].astype(np.int32) | (ids_im[:, :, 1].astype(np.int32) << 8)
meta = json.load(open(ROOT / "docs/map/meta.json"))
NMAX = 65536
p_terr = np.zeros(NMAX, np.int16)
p_sea = np.ones(NMAX, bool)
p_cult = np.full(NMAX, -1, np.int32)
for k, v in meta["provinces"].items():
    k = int(k)
    p_terr[k] = v["t"]; p_sea[k] = bool(v["s"]); p_cult[k] = v.get("cu", -1)
sea_grid = p_sea[ids]

models = {}
inst = {}

def add_instances(key, arr):
    """arr rows: gx, gy, rot(0..2pi), scale"""
    a = np.asarray(arr, np.float32)
    if a.size == 0:
        return
    q = np.zeros((len(a), 6), np.uint8)
    xi = np.clip(a[:, 0], 0, W - 1).astype(np.uint16)
    yi = np.clip(a[:, 1], 0, H - 1).astype(np.uint16)
    q[:, 0] = xi & 255; q[:, 1] = xi >> 8
    q[:, 2] = yi & 255; q[:, 3] = yi >> 8
    q[:, 4] = np.clip(a[:, 2] / (2 * math.pi) * 255, 0, 255).astype(np.uint8)
    q[:, 5] = np.clip((a[:, 3] - 0.25) / 2.75 * 255, 0, 255).astype(np.uint8)
    e = inst.setdefault(key, [])
    e.append(q)

# -------------------------------------------------------------------- trees
# mask name -> (model key, mesh name in .asset files)
TREES = {
    "tree_leaf_01_mask":            ("birch",   "tree_birch_yellow_01_a_mesh"),
    "tree_leaf_01_single_mask":     ("birch",   None),
    "tree_leaf_02_mask":            ("birch2",  "tree_birch_yellow_01_b_mesh"),
    "tree_pine_01_a_mask":          ("cedar",   "tree_cedar_01_a_mesh"),
    "tree_pine_01_b_mask":          ("cedar2",  "tree_cedar_01_b_mesh"),
    "tree_pine_impassable_01_a_mask": ("cedarhi", "tree_cedar_02_a_mesh"),
    "tree_cedar_02_mask":           ("cedarhi", None),
    "tree_cypress_01_mask":         ("cedarhi", None),
    "tree_jungle_01_c_mask":        ("parasol", "tree_emperorparasol_01_a_mesh"),
    "tree_jungle_01_d_mask":        ("parasol2", "tree_emperorparasol_02_a_mesh"),
    "tree_palm_01_mask":            ("acacia",  "tree_acacia_01_a_mesh"),
    "tree_dead_01_mask":            ("dead",    "tree_dead_01_a_mesh"),
    "tree_dead_01_paintable_mask":  ("dead",    None),
    # the pink tree's diffuse is a vanilla texture the mod doesn't ship;
    # its (tiny) mask reuses the yellow-leaf tree instead
    "tree_leaf_pink_01_mask":       ("yellow",  None),
    "tree_leaf_yellow_mask":        ("yellow",  "tree_leaf_yellow_01_a_mesh"),
    "tree_redwood_01_mask":         ("redwood", "tree_redwood_01_a_mesh"),
    "rock_desert_01_mask":          ("rockd",   "rock_desert_01_a_mesh"),
    "rock_hardened_lava_01_mask":   ("rockl",   "rock_hardened_lava_01_a_mesh"),
}
TREE_TARGET = 42000
print("extracting tree/rock models ...")
# natural foliage colours for trees whose folder ships no tint swatch
# (same 2x-modulate semantics as the game's tint textures)
FOLIAGE_FALLBACK = {
    "birch": (56, 68, 40), "birch2": (56, 68, 40),
    "cedar": (46, 60, 42), "cedar2": (46, 60, 42), "cedarhi": (44, 58, 44),
    "acacia": (58, 68, 38), "dead": (74, 64, 52),
}
mesh_of_key = {}
for mask, (key, mesh_name) in TREES.items():
    if mesh_name:
        mesh_of_key[key] = mesh_name
for key, mesh_name in mesh_of_key.items():
    ent = asset_index.get(mesh_name)
    tint = tint_for(ent[0]) if ent else None
    if tint is None:
        tint = FOLIAGE_FALLBACK.get(key)
    mdl = model_from_asset(mesh_name, 256, tint)
    if mdl:
        models[key] = mdl

print("sampling tree masks ...")
weights = {}
mask_px = {}
for mask, (key, _) in TREES.items():
    f = MASKS / f"{mask}.png"
    if key not in models or not f.exists():
        continue
    a = np.asarray(Image.open(f).convert("L")).astype(np.float32) / 255.0
    a[sea_grid] = 0
    mask_px[mask] = a
    weights[mask] = float(a.sum())
total_w = sum(weights.values()) or 1.0
for mask, a in mask_px.items():
    key = TREES[mask][0]
    target = max(150, int(TREE_TARGET * weights[mask] / total_w))
    ys, xs = np.nonzero(a > 0.02)
    if len(xs) == 0:
        continue
    p = a[ys, xs]
    p = p / p.sum()
    take = min(target, len(xs))
    sel = RNG.choice(len(xs), size=take, replace=False, p=p)
    gx = xs[sel] + RNG.uniform(-1.2, 1.2, take)
    gy = ys[sel] + RNG.uniform(-1.2, 1.2, take)
    rot = RNG.uniform(0, 2 * math.pi, take)
    sc = RNG.uniform(0.8, 1.35, take)
    add_instances(key, np.stack([gx, gy, rot, sc], 1))
    print(f"  {mask:36s} -> {TREES[mask][0]:8s} {take} instances")

# ---------------------------------------------------------------- buildings
# one settlement model per barony, styled by the province's culture
STYLES = [
    {"castle": "chinese_castle_01_mesh", "city": "building_chinese_city_01_mesh",
     "temple": "pagoda_01_mesh"},
    # (the levantine/punic set needs a vanilla atlas the mod doesn't ship)
    {"castle": "building_sea_castle_01_mesh", "city": "building_sea_city_01_mesh",
     "temple": "building_sea_temple_01_mesh"},
    {"castle": "slavic_castle_01_mesh", "city": "slavic_city_01_a_mesh",
     "temple": "slavic_temple_01_mesh"},
    {"castle": "building_celtic_hillfort_01_mesh", "city": "building_celtic_city_01_mesh",
     "temple": "building_celtic_temple_01_mesh"},
]
print("extracting holding models ...")
bkeys = {}
for si, st in enumerate(STYLES):
    for kind, mesh_name in st.items():
        k = f"b{si}_{kind}"
        mdl = model_from_asset(mesh_name, 512)
        if mdl:
            bkeys[(si, kind)] = k
            models[k] = mdl

print("placing baronies ...")
txt = (MOD / "building_locators.txt").read_text(encoding="utf-8-sig")
found = re.findall(
    r'id=(\d+)\s+position=\{\s*([\d.\-]+)\s+[\d.\-]+\s+([\d.\-]+)\s*\}', txt)
placed = 0
binst = {}
for pid_s, xs_, zs_ in found:
    pid = int(pid_s)
    if pid >= NMAX or p_sea[pid]:
        continue
    gx = float(xs_) / 2.0
    gy = (H - 1) - float(zs_) / 2.0
    t = int(p_terr[pid])
    kind = "castle" if t in (7, 10) else ("temple" if pid % 11 == 0 else "city")
    si = (p_cult[pid] if p_cult[pid] >= 0 else pid) % len(STYLES)
    k = bkeys.get((si, kind)) or bkeys.get((si, "city"))
    if not k:
        continue
    binst.setdefault(k, []).append(
        [gx, gy, RNG.uniform(0, 2 * math.pi), RNG.uniform(0.9, 1.15)])
    placed += 1
    # CK3-style hamlet cluster: scatter smaller outbuildings around the
    # holding so settlements read as villages, not lone houses
    nsat = {"castle": 3, "city": 5, "temple": 2}.get(kind, 4)
    for _ in range(nsat):
        ang = RNG.uniform(0, 2 * math.pi)
        dist = RNG.uniform(1.8, 4.8)
        sx = gx + math.cos(ang) * dist
        sy = gy + math.sin(ang) * dist * 0.8
        xi, yi = int(sx), int(sy)
        if not (0 <= xi < W and 0 <= yi < H) or sea_grid[yi, xi]:
            continue
        binst[k].append([sx, sy, RNG.uniform(0, 2 * math.pi), RNG.uniform(0.38, 0.58)])
for k, rows in binst.items():
    add_instances(k, rows)
print(f"  {placed} settlements")

# ----------------------------------------------------------------- landmarks
print("extracting landmarks ...")
spec = []
stxt = (MOD / "0_GH_special_building_locators.txt").read_text(encoding="utf-8-sig")
# blocks are 'object={ ... }' where transform="..." spans multiple lines;
# split on the headers instead of brace-matching (no braces occur inside)
for blk in re.split(r'\bobject\s*=\s*\{', stxt)[1:]:
    nm = re.search(r'name\s*=\s*"([^"]+)"', blk)
    pm = re.search(r'pdxmesh\s*=\s*"([^"]+)"', blk)
    tm = re.search(r'transform\s*=\s*"([^"]*)"', blk, re.S)
    if not nm or not tm:
        continue
    # a few objects give only a display name; map them to their real pdxmesh
    ALIAS = {
        "celtic_round_tower_01": "building_celtic_round_tower_01_mesh",
        "Sophocos_broken_top": "sophocos_broken_top_mesh",
        "Tower_Normal": "aersanon_tower_mesh",
    }
    mesh_name = pm.group(1) if pm else ALIAS.get(nm.group(1), nm.group(1))
    skey = "s_" + re.sub(r"\W+", "_", mesh_name)[:28]
    if skey not in models:
        mdl = model_from_asset(mesh_name, 512)
        if not mdl:
            continue
        models[skey] = mdl
    rows = tm.group(1).split("\n")
    for row in rows:
        f = row.split()
        if len(f) < 10:
            continue
        x, y, z = float(f[0]), float(f[1]), float(f[2])
        qx, qy, qz, qw = (float(v) for v in f[3:7])
        s = float(f[7])
        yaw = 2.0 * math.atan2(qy, qw)
        spec.append({"k": skey, "x": round(x / 2.0, 2),
                     "y": round((H - 1) - z / 2.0, 2),
                     "r": round(yaw, 3), "s": round(s, 3)})
print(f"  {len(spec)} landmark instances, {sum(1 for k in models if k.startswith('s_'))} meshes")

# -------------------------------------------------------------------- output
out = {"models": {}, "inst": {}, "spec": spec}
for k, m in models.items():
    out["models"][k] = m
for k, chunks in inst.items():
    q = np.concatenate(chunks)
    out["inst"][k] = {"n": int(len(q)), "d": base64.b64encode(q.tobytes()).decode()}
with open(OUT / "models.json", "w") as f:
    json.dump(out, f, separators=(",", ":"))
size = (OUT / "models.json").stat().st_size
ninst = sum(v["n"] for v in out["inst"].values())
print(f"models.json {size/1e6:.2f} MB, {len(models)} models, "
      f"{ninst} instances + {len(spec)} landmarks, {len(tex_written)} textures")
