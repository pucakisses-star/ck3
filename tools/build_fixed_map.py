#!/usr/bin/env python3
"""Preprocess the Godherja mod files into compact web assets for docs/map/.

Inputs (repo): map_data/provinces.png, map_data/heightmap.png,
map_data/definition.csv, 00_province_terrain.txt, map_data/default.map,
common/landed_titles/*.txt, localization/**/*_l_english.yml,
history/provinces/*.txt, common/culture/cultures/*.txt,
common/religion/religions/*.txt, map_data/rivers.png

Outputs (docs/map/):
  prov.png   - province id per pixel (id encoded in R/G)
  height.png - 8-bit downsampled heightmap
  rivers.png - river mask (white on black)
  meta.json  - per-province name/terrain/sea + REAL de jure hierarchy
               (county/duchy/kingdom/empire with names & colours), plus real
               culture & faith per province with names & colours.
"""
import colorsys
import json
import re
from pathlib import Path

import numpy as np
from PIL import Image

Image.MAX_IMAGE_PIXELS = None
ROOT = Path(__file__).resolve().parent.parent
MD = ROOT / "map_data"
OUT = ROOT / "docs" / "map"
OUT.mkdir(parents=True, exist_ok=True)

W, H = 4096, 2048

# ---------------------------------------------------------------- terrain map
T = dict(DEEP=0, OCEAN=1, SHALLOW=2, BEACH=3, PLAINS=4, FARM=5, FOREST=6,
         HILLS=7, DRY=8, WET=9, MTN=10, SNOW=11)
TERRAIN_MAP = {
    "plains": T["PLAINS"], "steppe": T["PLAINS"], "marcher_plains": T["PLAINS"],
    "farmlands": T["FARM"], "marcher_farmlands": T["FARM"], "floodplains": T["FARM"],
    "oasis": T["FARM"],
    "forest": T["FOREST"], "taiga": T["FOREST"], "jungle": T["FOREST"],
    "marcher_forest": T["FOREST"],
    "hills": T["HILLS"], "marcher_hills": T["HILLS"],
    "mountains": T["MTN"], "desert_mountains": T["MTN"], "redlands_mountains": T["MTN"],
    "marcher_mountains": T["MTN"], "mayik_caverns": T["MTN"], "mayik_chamber": T["MTN"],
    "mayik_corridors": T["MTN"],
    "desert": T["DRY"], "drylands": T["DRY"], "redlands_drylands": T["DRY"],
    "redlands_desert": T["DRY"], "deadlands": T["DRY"], "redlands_chasms": T["DRY"],
    "wetlands": T["WET"], "marcher_wetlands": T["WET"],
    "archipelagic": T["BEACH"],
    "coastal_sea": T["SHALLOW"], "sea": T["OCEAN"],
}

# ------------------------------------------------------- Paradox script lexer
TOKEN_RE = re.compile(r'"(?:[^"\\]|\\.)*"|[{}=]|[^\s{}=]+')

def tokenize(text: str):
    text = re.sub(r"#[^\n]*", "", text)
    return TOKEN_RE.findall(text)

def parse_blocks(tokens, i=0):
    """Parses into nested (key, value) lists; value is list (block) or str."""
    out = []
    n = len(tokens)
    while i < n:
        t = tokens[i]
        if t == "}":
            return out, i + 1
        if i + 1 < n and tokens[i + 1] == "=":
            key = t
            v = tokens[i + 2] if i + 2 < n else ""
            if v == "{":
                sub, i = parse_blocks(tokens, i + 3)
                out.append((key, sub))
            else:
                out.append((key, v))
                i += 3
        elif t == "{":
            sub, i = parse_blocks(tokens, i + 1)
            out.append(("", sub))
        else:
            out.append(("", t))
            i += 1
    return out, i

def parse_color(v):
    """color = { r g b } ints or 0..1 floats, or hsv { h s v }."""
    if not isinstance(v, list):
        return None
    vals, mode = [], "rgb"
    flat = []
    for k, x in v:
        if isinstance(x, list):
            flat.extend(y for _, y in x if not isinstance(y, list))
        else:
            if x in ("hsv", "hsv360"):
                mode = x
                continue
            flat.append(x)
    # handle "hsv { .. }" tokenized as ('', 'hsv'), ('', [..]) or similar
    strs = [s for s in flat if isinstance(s, str)]
    if strs and strs[0] in ("hsv", "hsv360"):
        mode = strs[0]; strs = strs[1:]
    try:
        vals = [float(s) for s in strs[:3]]
    except ValueError:
        return None
    if len(vals) < 3:
        return None
    if mode == "hsv":
        r, g, b = colorsys.hsv_to_rgb(vals[0], vals[1], vals[2])
        return [int(r * 255), int(g * 255), int(b * 255)]
    if mode == "hsv360":
        r, g, b = colorsys.hsv_to_rgb(vals[0] / 360, vals[1] / 100, vals[2] / 100)
        return [int(r * 255), int(g * 255), int(b * 255)]
    if all(x <= 1.001 for x in vals):
        return [int(x * 255) for x in vals]
    return [int(x) for x in vals]

# ------------------------------------------------------- localization (names)
print("parsing localization ...")
LOC = {}
for f in ROOT.glob("localization/**/*_l_english.yml"):
    try:
        txt = f.read_text(encoding="utf-8-sig", errors="replace")
    except OSError:
        continue
    for m in re.finditer(r'^\s*([A-Za-z0-9_\-.]+):\d*\s*"(.*?)"\s*(?:#.*)?$', txt, re.M):
        LOC.setdefault(m.group(1), m.group(2))
print(f"  {len(LOC)} loc keys")

def prettify(key: str) -> str:
    return re.sub(r"^[ekdcb]_", "", key).replace("_", " ").title()

def disp(key: str) -> str:
    v = LOC.get(key)
    if v and not v.startswith("$") and "[" not in v:
        return re.sub(r"\s+", " ", v).strip() or prettify(key)
    return prettify(key)

# ------------------------------------------------- landed titles (real world)
print("parsing landed_titles ...")
county_of_prov = {}          # province id -> county key
county_meta = {}             # county key -> {duchy, color}
duchy_meta, king_meta, emp_meta = {}, {}, {}

def walk_titles(block, stack):
    for key, val in block:
        if not isinstance(val, list):
            continue
        m = re.match(r"^([ekdcb])_", key)
        if not m:
            # descend into non-title blocks only when they might hold baronies
            continue
        tier = m.group(1)
        color = None
        capital = None
        for k2, v2 in val:
            if k2 == "color":
                color = parse_color(v2)
            elif k2 == "capital" and not isinstance(v2, list):
                capital = v2
        ns = dict(stack)
        ns[tier] = key
        if tier == "e":
            emp_meta.setdefault(key, {"color": color, "cap": capital})
        elif tier == "k":
            king_meta.setdefault(key, {"color": color, "emp": ns.get("e"), "cap": capital})
        elif tier == "d":
            duchy_meta.setdefault(key, {"color": color, "king": ns.get("k")})
        elif tier == "c":
            county_meta.setdefault(key, {"color": color, "duchy": ns.get("d")})
        elif tier == "b":
            for k2, v2 in val:
                if k2 == "province" and not isinstance(v2, list):
                    try:
                        county_of_prov[int(v2)] = ns.get("c")
                    except ValueError:
                        pass
        walk_titles(val, ns)

for f in sorted((ROOT / "common" / "landed_titles").glob("*.txt")):
    blocks, _ = parse_blocks(tokenize(f.read_text(encoding="utf-8-sig", errors="replace")))
    walk_titles(blocks, {})
print(f"  {len(county_of_prov)} baronies -> {len(county_meta)} counties, "
      f"{len(duchy_meta)} duchies, {len(king_meta)} kingdoms, {len(emp_meta)} empires")

# -------------------------------------------- history/provinces (culture/faith)
print("parsing province history ...")
HOLDING_IDX = {"castle_holding": 1, "city_holding": 2, "church_holding": 3,
               "tribal_holding": 4}
prov_culture, prov_faith, prov_holding = {}, {}, {}
for f in (ROOT / "history" / "provinces").glob("*.txt"):
    blocks, _ = parse_blocks(tokenize(f.read_text(encoding="utf-8-sig", errors="replace")))
    for key, val in blocks:
        if not key.isdigit() or not isinstance(val, list):
            continue
        pid = int(key)
        for k2, v2 in val:
            if isinstance(v2, list):
                continue
            if k2 == "culture":
                prov_culture.setdefault(pid, v2)
            elif k2 == "religion":
                prov_faith.setdefault(pid, v2)
            elif k2 == "holding":
                prov_holding.setdefault(pid, HOLDING_IDX.get(v2, 0))
print(f"  culture for {len(prov_culture)}, faith for {len(prov_faith)} provinces")

# ------------------------------------ title holders at the default bookmark
# Godherja's default bookmark is bm_1254_the_dying_world -> 1254.1.1
START = (1254, 1, 1)
START_LABEL = "1254"

def parse_date(s):
    try:
        p = [int(x) for x in s.split(".")]
        return (p[0], p[1] if len(p) > 1 else 1, p[2] if len(p) > 2 else 1)
    except ValueError:
        return None

print("parsing title history ...")
title_holder = {}
for f in (ROOT / "history" / "titles").glob("*.txt"):
    blocks, _ = parse_blocks(tokenize(f.read_text(encoding="utf-8-sig", errors="replace")))
    for key, val in blocks:
        if not isinstance(val, list) or not re.match(r"^[ekdcb]_", key):
            continue
        best = None
        for dk, dv in val:
            d = parse_date(dk)
            if d is None or d > START or not isinstance(dv, list):
                continue
            for k2, v2 in dv:
                if k2 == "holder" and not isinstance(v2, list):
                    if best is None or d >= best[0]:
                        best = (d, v2)
        if best and best[1] not in ("0", ""):
            title_holder[key] = best[1]
print(f"  holders for {len(title_holder)} titles at {START_LABEL}")

print("parsing characters & dynasties ...")
SKILLS = ("diplomacy", "martial", "stewardship", "intrigue", "learning")
char_info = {}
for f in (ROOT / "history" / "characters").glob("*.txt"):
    blocks, _ = parse_blocks(tokenize(f.read_text(encoding="utf-8-sig", errors="replace")))
    for key, val in blocks:
        if not isinstance(val, list):
            continue
        nm = dyn = None
        female = False
        skills = {}
        traits = []
        birth = death = None
        for k2, v2 in val:
            if isinstance(v2, list):
                d = parse_date(k2)
                if d:
                    for k3, v3 in v2:
                        if k3 == "birth":
                            birth = d[0]
                        elif k3 == "death":
                            death = d[0]
                continue
            if k2 == "name":
                nm = v2.strip('"')
            elif k2 in ("dynasty", "dynasty_house"):
                dyn = v2
            elif k2 == "female" and v2 == "yes":
                female = True
            elif k2 in SKILLS:
                try:
                    skills[k2] = int(v2)
                except ValueError:
                    pass
            elif k2 == "trait":
                traits.append(v2)
        if nm:
            char_info[key] = {
                "n": nm, "dyn": dyn, "f": female,
                "sk": [skills.get(s) for s in SKILLS],
                "tr": traits, "b": birth, "dd": death,
            }
dyn_name, dyn_motto = {}, {}
for f in (ROOT / "common" / "dynasties").rglob("*.txt"):
    blocks, _ = parse_blocks(tokenize(f.read_text(encoding="utf-8-sig", errors="replace")))
    for key, val in blocks:
        if not isinstance(val, list):
            continue
        for k2, v2 in val:
            if isinstance(v2, list):
                continue
            if k2 == "name":
                dyn_name[key] = disp(v2.strip('"'))
            elif k2 == "motto":
                dyn_motto[key] = v2.strip('"')
print(f"  {len(char_info)} characters, {len(dyn_name)} dynasties")

TRAIT_FALLBACK = {
    "intellect_good_1": "Quick", "intellect_good_2": "Intelligent", "intellect_good_3": "Genius",
    "intellect_bad_1": "Slow", "intellect_bad_2": "Stupid", "intellect_bad_3": "Imbecile",
    "beauty_good_1": "Comely", "beauty_good_2": "Pretty", "beauty_good_3": "Beautiful",
    "beauty_bad_1": "Homely", "beauty_bad_2": "Ugly", "beauty_bad_3": "Repulsive",
    "physique_good_1": "Hale", "physique_good_2": "Robust", "physique_good_3": "Amazonian",
    "physique_bad_1": "Delicate", "physique_bad_2": "Frail", "physique_bad_3": "Feeble",
}
def trait_name(t):
    v = LOC.get("trait_" + t) or LOC.get(t) or TRAIT_FALLBACK.get(t)
    if v:
        return v
    m = re.match(r"^education_(\w+?)_(\d)$", t)
    if m:
        return f"{m.group(1).title()} Education"
    return re.sub(r"^(way_of_)", "", t).replace("_", " ").title()

trait_icon_idx = {}   # trait key -> index into the exported ui/tr_{i}.png set
def trait_icon(t):
    """Export the game's icon for trait key t (lazily) and return its index."""
    if t in trait_icon_idx:
        return trait_icon_idx[t]
    idx = -1
    for rel in (f"icons/traits/{t}.dds", f"interface/icons/traits/{t}.dds",
                f"gfx/interface/icons/traits/{t}.dds"):
        if (ROOT / rel).exists():
            idx = len([v for v in trait_icon_idx.values() if v >= 0])
            _pending_trait_icons.append((rel, idx))
            break
    trait_icon_idx[t] = idx
    return idx
_pending_trait_icons = []   # exported after the ui/ dir is (re)created

chars_out = {}   # charKey -> character card (only for referenced holders)
def holder_of(title_key):
    """-> (display string, char key) or (None, None); registers the card."""
    ck = title_holder.get(title_key)
    if not ck:
        return None, None
    info = char_info.get(ck)
    if not info:
        return None, None
    nm = disp(info["n"]) if "_" in info["n"] else info["n"]
    dn = dyn_name.get(info["dyn"]) if info["dyn"] else None
    if ck not in chars_out:
        motto = dyn_motto.get(info["dyn"]) if info["dyn"] else None
        chars_out[ck] = {
            "n": nm, "dy": dn,
            "mo": strip_game_syntax(disp(motto)) if motto else None,
            "f": 1 if info["f"] else 0,
            "sk": info["sk"],
            "tr": [trait_name(t) for t in info["tr"][:8]],
            "ti": [trait_icon(t) for t in info["tr"][:8]],
            "b": info["b"], "dd": info["dd"],
        }
    return (f"{nm} {dn}" if dn else nm), ck

# ------------------------------------------------ culture & faith colour/name
print("parsing cultures & faiths ...")
culture_color, culture_meta2 = {}, {}
for f in (ROOT / "common" / "culture" / "cultures").glob("*.txt"):
    blocks, _ = parse_blocks(tokenize(f.read_text(encoding="utf-8-sig", errors="replace")))
    for key, val in blocks:
        if not isinstance(val, list):
            continue
        cm = {}
        for k2, v2 in val:
            if k2 == "color":
                c = parse_color(v2)
                if c:
                    culture_color[key] = c
            elif isinstance(v2, list):
                if k2 == "traditions":
                    cm["tr"] = [t for _, t in v2 if isinstance(t, str)]
            elif k2 in ("ethos", "heritage", "language", "martial_custom"):
                cm[k2] = v2
        if cm:
            culture_meta2[key] = cm
faith_color, faith_icon = {}, {}
faith_relig, faith_tenets, faith_sites = {}, {}, {}
def walk_faiths(block, relig=None):
    for key, val in block:
        if not isinstance(val, list):
            continue
        if key == "faiths":
            for fk, fv in val:
                if not isinstance(fv, list):
                    continue
                faith_relig.setdefault(fk, relig)
                for k2, v2 in fv:
                    if k2 == "color":
                        c = parse_color(v2)
                        if c:
                            faith_color.setdefault(fk, c)
                    elif isinstance(v2, list):
                        continue
                    elif k2 == "icon":
                        faith_icon.setdefault(fk, v2)
                    elif k2 == "doctrine" and v2.startswith("tenet_"):
                        faith_tenets.setdefault(fk, []).append(v2)
                    elif k2 == "holy_site":
                        faith_sites.setdefault(fk, []).append(v2)
        else:
            walk_faiths(val, key if re.match(r"^\w+$", key) else relig)
for f in (ROOT / "common" / "religion" / "religions").glob("*.txt"):
    blocks, _ = parse_blocks(tokenize(f.read_text(encoding="utf-8-sig", errors="replace")))
    walk_faiths(blocks)
print(f"  {len(culture_color)} culture colours, {len(faith_color)} faith colours")

# holy sites: site key -> county title key
site_county = {}
for f in (ROOT / "common" / "religion" / "holy_sites").glob("*.txt"):
    blocks, _ = parse_blocks(tokenize(f.read_text(encoding="utf-8-sig", errors="replace")))
    for key, val in blocks:
        if not isinstance(val, list):
            continue
        for k2, v2 in val:
            if k2 == "county" and not isinstance(v2, list):
                site_county[key] = v2
print(f"  {len(site_county)} holy sites")

def strip_game_syntax(s):
    """Remove [concept|E]-style links, Concept('k','Display') calls and
    $refs$ from flavour text, keeping the readable words."""
    s = re.sub(r"Concept\(\s*'[^']*'\s*,\s*'([^']*)'\s*\)", r"\1", s)
    s = re.sub(r"\w+\([^()]*\)", "", s)  # other scripted calls
    def _link(m):
        t = m.group(1)
        return t.replace("_", " ").title() if "_" in t else t
    s = re.sub(r"\[([^|\]]+)\|[^\]]*\]", _link, s)
    s = re.sub(r"\[([^\]]*)\]", lambda m: _link(m) if "_" in m.group(1) and " " not in m.group(1) else "", s)
    s = re.sub(r"\$[^$]*\$", "", s)
    s = s.replace("\\n", " ")
    return re.sub(r"\s+", " ", s).strip()

# ---------------------------------------------------------------- definitions
id_rgb, id_name = {}, {}
with open(MD / "definition.csv", encoding="utf-8-sig") as f:
    for line in f:
        p = line.strip().split(";")
        if len(p) < 5:
            continue
        try:
            i = int(p[0]); r = int(p[1]); g = int(p[2]); b = int(p[3])
        except ValueError:
            continue
        id_rgb[i] = (r, g, b)
        nm = p[4].strip()
        if nm and nm != "x":
            disp_name = disp(nm) if nm.startswith("b_") else prettify("b_" + nm)
            id_name[i] = disp_name

id_terr = {}
with open(ROOT / "00_province_terrain.txt", encoding="utf-8-sig") as f:
    for line in f:
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        k, v = line.split("=", 1)
        k = k.strip(); v = v.strip()
        if k.isdigit():
            id_terr[int(k)] = TERRAIN_MAP.get(v, T["PLAINS"])

dm = (MD / "default.map").read_text(encoding="utf-8-sig")
def collect(key):
    out = set()
    for m in re.finditer(key + r"\s*=\s*(?:LIST|RANGE)\s*\{([^}]*)\}", dm):
        out.update(int(x) for x in m.group(1).split())
    return out
water = collect("sea_zones") | collect("lakes") | collect("impassable_seas")
mtn_impass = collect("impassable_mountains")

# ------------------------------------------------------------- province grid
print("rasterizing provinces.png ...")
prov_img = Image.open(MD / "provinces.png").convert("RGB").resize((W, H), Image.NEAREST)
px = np.asarray(prov_img, dtype=np.uint32)
color_key = (px[:, :, 0] << 16) | (px[:, :, 1] << 8) | px[:, :, 2]
key_to_id = {(r << 16) | (g << 8) | b: i for i, (r, g, b) in id_rgb.items()}
id_grid = np.zeros((H, W), dtype=np.int32)
for k in np.unique(color_key):
    id_grid[color_key == k] = key_to_id.get(int(k), 0)
present = sorted(int(x) for x in np.unique(id_grid) if x != 0)
print(f"  {len(present)} provinces present")

print("downsampling heightmap ...")
hm = Image.open(MD / "heightmap.png")
if hm.mode not in ("I", "I;16", "L"):
    hm = hm.convert("I")
hm = hm.resize((W, H), Image.BILINEAR)
ha = np.asarray(hm).astype(np.float32)
if ha.max() > 255:
    ha = ha / 256.0
Image.fromarray(np.clip(ha, 0, 255).astype(np.uint8), "L").save(OUT / "height.png")

print("extracting rivers ...")
rv = np.asarray(Image.open(MD / "rivers.png").convert("RGB"), dtype=np.uint16)
is_river = ~(((rv[:, :, 0] > 200) & (rv[:, :, 1] > 200) & (rv[:, :, 2] > 200))     # white land
             | ((rv[:, :, 0] > 200) & (rv[:, :, 1] < 80) & (rv[:, :, 2] > 80)))    # magenta water
# any river pixel within each 2x2 block survives the downsample
riv = is_river.reshape(H, 2, W, 2).any(axis=(1, 3))
# embedded in meta.json as a data URL so every output stays text-pushable
import base64, io
_buf = io.BytesIO()
Image.fromarray((riv * 255).astype(np.uint8), "L").save(_buf, format="PNG")
rivers_data_url = "data:image/png;base64," + base64.b64encode(_buf.getvalue()).decode()
print(f"  river pixels at {W}x{H}: {int(riv.sum())}")

# ------------------------------------------------------------- id grid encode
enc = np.zeros((H, W, 3), dtype=np.uint8)
enc[:, :, 0] = id_grid & 255
enc[:, :, 1] = (id_grid >> 8) & 255
Image.fromarray(enc, "RGB").save(OUT / "prov.png")

# full-resolution id map (8192x4096) for GPU-side crisp province borders
print("rasterizing prov8.png (native resolution) ...")
px8 = np.asarray(Image.open(MD / "provinces.png").convert("RGB"), dtype=np.uint32)
key8 = ((px8[:, :, 0] << 16) | (px8[:, :, 1] << 8) | px8[:, :, 2]).ravel()
H8, W8 = px8.shape[:2]
del px8
# vectorised colour->id: binary search into the sorted definition palette
pal = np.array(sorted(key_to_id), dtype=np.uint32)
pal_id = np.array([key_to_id[int(k)] for k in pal], dtype=np.uint16)
pos = np.searchsorted(pal, key8).clip(0, len(pal) - 1)
id8 = np.where(pal[pos] == key8, pal_id[pos], 0).reshape(H8, W8)
del key8, pos
enc8 = np.zeros((H8, W8, 3), dtype=np.uint8)
enc8[:, :, 0] = id8 & 255
enc8[:, :, 1] = (id8 >> 8) & 255
del id8
Image.fromarray(enc8, "RGB").save(OUT / "prov8.png")
del enc8
print("  prov8.png", (OUT / "prov8.png").stat().st_size, "bytes")

# ----------------------------------------------------------------- metadata
# compact index tables for the real hierarchy (only entries actually used)
c_idx, d_idx, k_idx, e_idx = {}, {}, {}, {}
counties, duchies, kingdoms, empires = [], [], [], []

def county_index(ck):
    if ck is None or ck not in county_meta:
        return -1
    if ck not in c_idx:
        dk = county_meta[ck].get("duchy")
        counties.append({"n": disp(ck), "d": duchy_index(dk)})
        c_idx[ck] = len(counties) - 1
    return c_idx[ck]

def duchy_index(dk):
    if dk is None or dk not in duchy_meta:
        return -1
    if dk not in d_idx:
        kk = duchy_meta[dk].get("king")
        duchies.append({"n": disp(dk), "k": king_index(kk)})
        d_idx[dk] = len(duchies) - 1
    return d_idx[dk]

def king_index(kk):
    if kk is None or kk not in king_meta:
        return -1
    if kk not in k_idx:
        ek = king_meta[kk].get("emp")
        kingdoms.append({"n": disp(kk), "c": king_meta[kk].get("color"), "e": emp_index(ek),
                         "t": kk})
        k_idx[kk] = len(kingdoms) - 1
    return k_idx[kk]

def emp_index(ek):
    if ek is None or ek not in emp_meta:
        return -1
    if ek not in e_idx:
        empires.append({"n": disp(ek), "c": emp_meta[ek].get("color"), "t": ek})
        e_idx[ek] = len(empires) - 1
    return e_idx[ek]

cu_idx, fa_idx = {}, {}
cultures, faiths = [], []
def culture_index(ck):
    if not ck:
        return -1
    if ck not in cu_idx:
        cm = culture_meta2.get(ck, {})
        def pillar(k):
            if not cm.get(k):
                return None
            v = LOC.get(cm[k] + "_name") or LOC.get(cm[k])
            return v if v else re.sub(r"^(ethos|heritage|language|martial_custom)_", "",
                                      cm[k]).replace("_", " ").title()
        cultures.append({
            "n": disp(ck), "c": culture_color.get(ck),
            "e": pillar("ethos"), "he": pillar("heritage"),
            "l": pillar("language"), "m": pillar("martial_custom"),
            "t": [LOC.get(t + "_name") or re.sub("^tradition_", "", t).replace("_", " ").title()
                  for t in cm.get("tr", [])],
        })
        cu_idx[ck] = len(cultures) - 1
    return cu_idx[ck]
def faith_index(fk):
    if not fk:
        return -1
    if fk not in fa_idx:
        desc = LOC.get(fk + "_desc")
        adh = LOC.get(fk + "_adherent")
        relig = faith_relig.get(fk)
        sites = []
        for sk in faith_sites.get(fk, []):
            ck = site_county.get(sk)
            ci = county_index(ck) if ck else -1
            nm = strip_game_syntax(LOC.get(f"holy_site_{sk}_name") or prettify("b_" + sk))
            if ci >= 0:
                sites.append({"n": nm, "c": ci})
        faiths.append({
            "n": disp(fk), "c": faith_color.get(fk),
            "r": disp(relig) if relig else None,
            "ad": adh if adh and "$" not in adh else None,
            "d": strip_game_syntax(desc) if desc else None,
            "t": [LOC.get(t + "_name") or re.sub("^tenet_", "", t).replace("_", " ").title()
                  for t in faith_tenets.get(fk, [])],
            "hs": sites,
        })
        fa_idx[fk] = len(faiths) - 1
    return fa_idx[fk]

provinces = {}
n_linked = 0
for pid in present:
    sea = pid in water
    terr = id_terr.get(pid, T["PLAINS"])
    if pid in mtn_impass:
        terr = T["MTN"]
    if sea:
        terr = T["SHALLOW"]
    ci = -1 if sea else county_index(county_of_prov.get(pid))
    if ci >= 0:
        n_linked += 1
    provinces[pid] = {
        "n": id_name.get(pid, "Province %d" % pid),
        "t": int(terr),
        "s": 1 if sea else 0,
        "c": ci,
        "cu": -1 if sea else culture_index(prov_culture.get(pid)),
        "f": -1 if sea else faith_index(prov_faith.get(pid)),
        "h": 0 if sea else prov_holding.get(pid, 0),
    }

# capital counties (as county-table indices) for kingdoms & empires
for _key, _i in k_idx.items():
    kingdoms[_i]["cap"] = c_idx.get(king_meta[_key].get("cap"), -1)
for _key, _i in e_idx.items():
    empires[_i]["cap"] = c_idx.get(emp_meta[_key].get("cap"), -1)

# strait / sea-crossing routes from adjacencies.csv (endpoints in grid px;
# -1 coords in the file mean "auto" -> use the province centroids)
print("parsing adjacencies ...")
_need = set()
_rows = []
with open(MD / "adjacencies.csv", encoding="utf-8-sig") as f:
    for line in f:
        p = line.strip().split(";")
        if len(p) < 8 or p[2].strip() != "sea":
            continue
        try:
            fr, to = int(p[0]), int(p[1])
            xs = [float(p[4]), float(p[5]), float(p[6]), float(p[7])]
        except ValueError:
            continue
        _rows.append((fr, to, xs))
        _need.add(fr); _need.add(to)
_cent = {}
if _rows:
    for rid in _need:
        ys_, xs_ = np.nonzero(id_grid == rid)
        if len(xs_):
            _cent[rid] = (float(xs_.mean()), float(ys_.mean()))
straits = []
for fr, to, (sx, sy, ex, ey) in _rows:
    if sx >= 0 and ex >= 0:
        a = (sx / 2.0, (H - 1) - sy / 2.0)
        b = (ex / 2.0, (H - 1) - ey / 2.0)
    else:
        if fr not in _cent or to not in _cent:
            continue
        a, b = _cent[fr], _cent[to]
    straits.append([round(a[0], 1), round(a[1], 1), round(b[0], 1), round(b[1], 1)])
print(f"  {len(straits)} sea crossings")

# real title holders at the bookmark date (may be None for vacant titles)
for _key, _i in c_idx.items():
    counties[_i]["h"], counties[_i]["hk"] = holder_of(_key)
for _key, _i in d_idx.items():
    duchies[_i]["h"], duchies[_i]["hk"] = holder_of(_key)
for _key, _i in k_idx.items():
    kingdoms[_i]["h"], kingdoms[_i]["hk"] = holder_of(_key)
for _key, _i in e_idx.items():
    empires[_i]["h"], empires[_i]["hk"] = holder_of(_key)
print(f"  county holders: {sum(1 for c in counties if c.get('h'))} of {len(counties)}")

# --------------------------------------------- UI art straight from the mod
UI = OUT / "ui"
UI.mkdir(parents=True, exist_ok=True)
for _f in UI.glob("*"):
    if _f.is_file():
        _f.unlink()

def export_dds(rel, dest, max_side):
    src = ROOT / rel
    if not src.exists() and rel.startswith("gfx/"):
        # the game asset folders (interface/, icons/, ...) now sit at the
        # repo root instead of under gfx/
        src = ROOT / rel[4:]
    if not src.exists():
        return False
    try:
        im = Image.open(src).convert("RGBA")
    except Exception:
        return False
    if max(im.size) > max_side:
        r = max_side / max(im.size)
        im = im.resize((max(1, int(im.width * r)), max(1, int(im.height * r))),
                       Image.LANCZOS)
    im.save(UI / dest, optimize=True)
    return True

# panel illustrations per holding type (0 empty, 1 castle, 2 city, 3 temple, 4 tribal)
HOLD_ART = {
    0: "gfx/interface/illustrations/holding_types/holding_empty.dds",
    1: "gfx/interface/illustrations/holding_types/castle_french.dds",
    2: "gfx/interface/illustrations/holding_types/city_ethiopian.dds",
    3: "gfx/interface/illustrations/holding_types/temple_islamic_ethiopian_mena.dds",
    4: "gfx/interface/illustrations/decisions/decision_ck2_tribal_lands_cm.dds",
}
for hi, rel in HOLD_ART.items():
    export_dds(rel, f"holding_{hi}.png", 720)

# the game's flat-map paper textures shipped at the repo root: tiled over
# land/sea by the terrain shader, plus the screen-edge fog vignette
PAPER_ART = {
    "paper_land.png": ("parchment_land.png", 512),
    "paper_sea.png":  ("muted_sea.png", 512),
    "vignette.png":   ("fog_vignette_overlay.png", 512),
}
for dest, (rel, side) in PAPER_ART.items():
    export_dds(rel, dest, side)

# CK3 window-skin textures for the web UI (panels, tooltip, buttons)
SKIN_ART = {
    "skin_win.png":    ("gfx/interface/component_tiles/tile_window_background.dds", 700),
    "skin_frame.png":  ("gfx/interface/tooltips/tooltip_frame.dds", 150),
    "skin_ttbg.png":   ("gfx/interface/tooltips/tooltip_bg.dds", 300),
    "skin_header.png": ("gfx/interface/component_tiles/tile_header_background_01.dds", 490),
    "skin_title.png":  ("gfx/interface/component_tiles/tile_title_big_top_01.dds", 900),
    "skin_dec.png":    ("gfx/interface/component_decoration/decoration_frame_top.dds", 1226),
    "skin_btn.png":    ("gfx/interface/buttons/button_fancy.dds", 300),
}
for dest, (rel, side) in SKIN_ART.items():
    export_dds(rel, dest, side)

# province panel artwork: the mod's terrain illustrations + the scenic
# paintings shipped loose in gfx/ (picked by terrain & holding in the app)
PROV_ART = {
    "terr_plains.png":  "gfx/interface/illustrations/terrain_types/marcher_plains.dds",
    "terr_farm.png":    "gfx/interface/illustrations/terrain_types/marcher_farmlands.dds",
    "terr_forest.png":  "gfx/interface/illustrations/terrain_types/marcher_forest.dds",
    "terr_hills.png":   "gfx/interface/illustrations/terrain_types/marcher_hills.dds",
    "terr_mtn.png":     "gfx/interface/illustrations/terrain_types/marcher_mountains.dds",
    "terr_wet.png":     "gfx/interface/illustrations/terrain_types/marcher_wetlands.dds",
    "terr_desert.png":  "gfx/interface/illustrations/terrain_types/redlands_desert.dds",
    "terr_beach.png":   "gfx/interface/illustrations/terrain_types/archipelagic.dds",
    "art_city1.png":    "gfx/alexey_balmora.png",
    "art_city2.png":    "gfx/alexey_dunmer_city.png",
    "art_port.png":     "gfx/alexey_dunmer_port.png",
    "art_tribal.png":   "gfx/roving_clans_step01_a_by_a_u_r_e_l-d8laijh.png",
    "art_desert.png":   "gfx/alikr_desert.png",
    "art_ruin.png":     "gfx/dwemer_ruin.png",
    "art_farm.png":     "gfx/zdenkovic_dren_plantation.png",
    "art_swamp.png":    "gfx/zdenkovic_bitter_coast_2.png",
    "art_lakes.png":    "gfx/zdenkovic_sulfur_lakes.png",
    "art_coast.png":    "gfx/zdenkovic_bitter_coast.png",
    "art_fortress.png": "gfx/HNG9u6sWIAALSmE.png",
    "art_river.png":    "gfx/Nangin.png",
}
for dest, rel in PROV_ART.items():
    export_dds(rel, dest, 720)

# the big scenic art collection dropped loose into gfx/: each image was
# classified by scenery (tools/province_art.json) and feeds the matching
# pool in the province panel; 'skip' marks portraits/interiors/battles
art_pools = {}
_used = {Path(rel).name for rel in PROV_ART.values()}
try:
    _cls = json.load(open(ROOT / "tools" / "province_art.json", encoding="utf-8"))
except OSError:
    _cls = {}
_pa = 0
for _name, _bucket in sorted(_cls.items()):
    if _bucket == "skip" or _name in _used:
        continue
    _src = ROOT / "gfx" / _name
    if not _src.exists():
        continue
    try:
        _im = Image.open(_src).convert("RGB")
    except Exception:
        continue
    if _im.width > 720:
        _im = _im.resize((720, max(1, int(_im.height * 720 / _im.width))), Image.LANCZOS)
    _out = f"pa_{_pa}.jpg"
    _im.save(UI / _out, quality=82, optimize=True)
    art_pools.setdefault(_bucket, []).append(_out)
    _pa += 1
print(f"  scenic art: {_pa} images in {len(art_pools)} pools")

# the game's illustration library: terrain paintings, holding exteriors and
# outdoor event scenes join the same pools (interiors/character scenes skipped)
ILLUST_TERRAIN = {  # illustrations/terrain_types/<name>.dds -> bucket
    "coastal_sea": "coast", "sea": "coast", "desert": "desert",
    "desert_mountains": "desert", "drylands": "desert", "oasis": "desert",
    "farmlands": "farm", "terraced_hills": "farm", "floodplains": "river",
    "forest": "forest", "taiga": "snow", "hills": "plains", "plains": "plains",
    "steppe": "plains", "impassable": "mountain", "mountains": "mountain",
    "jungle": "jungle", "wetlands": "swamp",
    "mpo_season_abudant_grazing": "plains", "mpo_season_blessing_blue_sky": "plains",
    "mpo_season_everlasting_summer": "plains", "mpo_season_severe_drought": "desert",
    "mpo_season_cold_zud": "snow", "mpo_season_white_zud": "snow",
    "mpo_season_havsarsan_zud": "snow",
}
ILLUST_SCENES = {  # illustrations/event_scenes/<name>.dds -> bucket
    "bp1_desert": "desert", "desert": "desert", "drylands": "desert",
    "desert_settlement": "desert", "ep2_travel_desert": "desert",
    "ep3_camp_arid_terrain": "desert", "fp4_legendary_oasis": "desert",
    "bp1_docks_tribal": "port", "docks": "port", "fp3_docks": "port",
    "tgp_docks_asia": "port", "tgp_village_sea": "port",
    "bp3_coast": "coast", "fp1_beached_longship": "coast",
    "fp1_ocean": "coast", "fp1_ocean_norse": "coast",
    "bp1_hills": "plains", "bp1_plains": "plains", "steppe": "plains",
    "ep2_travel_hills": "plains", "ep2_travel_steppe": "plains",
    "mpo_steppe_evening": "plains", "mpo_hunt_steppe": "plains",
    "fp1_runestone": "plains", "fp1_runestone_circle": "plains",
    "bp1_crossroads_inn": "plains", "tgp_crossroad_inn_asia": "plains",
    "bp1_jungle": "jungle", "bp1_wetlands": "swamp",
    "bp3_hills_winter": "snow", "bp3_mountain_winter": "snow",
    "bp3_plains_winter": "snow", "bp3_steppe_winter": "snow",
    "bp3_wetlands_winter": "snow", "ep2_hunt_snowy_forest": "snow",
    "bp3_riverside": "river", "ep2_travel_bridge": "river",
    "fp4_legendary_spring": "river", "tgp_overflowing_river": "river",
    "church": "temple", "mosque": "temple", "temple": "temple",
    "fp1_tribal_temple": "temple", "fp2_temple": "temple", "fp3_temple": "temple",
    "tgp_temple_asia": "temple", "mpo_temple_steppe": "temple",
    "ep2_holysite_indian": "temple", "ep2_holysite_jerusalem": "temple",
    "ep2_holysite_mecca": "temple", "ep2_holysite_mena": "temple",
    "ep2_holysite_tribal": "temple", "ep2_holysite_western": "temple",
    "ep3_holysite_orthodox": "temple", "ep3_hagia_sophia": "temple",
    "tgp_holysite_asia": "temple",
    "courtyard": "castle", "bp1_courtyard_indian": "castle",
    "bp1_courtyard_mena": "castle", "bp2_courtyard": "castle",
    "fp2_courtyard": "castle", "tgp_courtyard_asia": "castle",
    "ep2_hunt_foggy_forest": "forest", "ep2_hunt_forest_managed": "forest",
    "ep2_hunt_generic": "forest", "ep2_hunt_poachers_camp": "forest",
    "tgp_hunt_generic_asia": "forest", "forest": "forest", "forest_pine": "forest",
    "ep2_hunt_cave_entrance": "mountain", "mountains": "mountain",
    "ep2_travel_mountains": "mountain",
    "farms": "farm", "ep2_travel_farm": "farm", "tgp_farm_asia": "farm",
    "tgp_rice_fields": "farm", "mpo_rural_village_asian": "farm",
    "ep2_village_festival_western": "farm", "garden": "farm",
    "bp1_garden_mena_day": "farm", "bp2_indian_garden": "farm",
    "fp2_garden": "farm", "tgp_garden_asia": "farm",
    "ep3_city_gate": "city", "ep3_constantinople": "city",
    "ep3_medi_estate": "city", "ep3_medi_market": "city",
    "market_east": "city", "market_tribal": "city", "market_west": "city",
    "tgp_market_asia": "city", "mpo_city_steppe": "city",
    "tgp_chinese_city": "city", "tgp_japanese_city": "city",
    "desert_nomad": "tribal", "genericcamp": "tribal", "mpo_camp_steppe": "tribal",
    "mpo_campfire_steppe": "tribal", "ep3_campfire": "tribal",
    "fp4_condemned_village": "ruin", "fp4_legendary_battlefield": "ruin",
    "tgp_ruined_holding": "ruin", "raid_burning": "ruin",
    "mpo_raid_burning_asian": "ruin",
}
def _holding_bucket(name):
    n = name.lower()
    if "pagoda" in n or "temple" in n or "shinto" in n:
        return "temple"
    if "castle" in n:
        return "castle"
    if "city" in n:
        return "city"
    if "tribe" in n or "herder" in n or "nomad" in n:
        return "tribal"
    return None

_ill = 0
for _dir, _rule in (
    ("illustrations/terrain_types", ILLUST_TERRAIN.get),
    ("illustrations/event_scenes", ILLUST_SCENES.get),
    ("illustrations/holding_types", _holding_bucket),
):
    _d = ROOT / _dir
    if not _d.is_dir():
        continue
    for _f in sorted(_d.glob("*.dds")):
        _bucket = _rule(_f.stem)
        if not _bucket:
            continue
        try:
            _im = Image.open(_f).convert("RGB")
        except Exception:
            continue
        if _im.width > 720:
            _im = _im.resize((720, max(1, int(_im.height * 720 / _im.width))), Image.LANCZOS)
        _out = f"pa_{_pa}.jpg"
        _im.save(UI / _out, quality=82, optimize=True)
        art_pools.setdefault(_bucket, []).append(_out)
        _pa += 1
        _ill += 1
print(f"  illustration art: {_ill} images; pools now {sum(len(v) for v in art_pools.values())} in {len(art_pools)}")

# per-faith icons (index-named so the app can derive the path)
n_ficons = 0
for fk, fi in fa_idx.items():
    icon = faith_icon.get(fk, fk)
    for cand in (f"gfx/interface/icons/faith/{icon}.dds",
                 f"gfx/interface/icons/faith/{fk}_icon.dds"):
        if export_dds(cand, f"faith_{fi}.png", 64):
            faiths[fi]["i"] = 1
            n_ficons += 1
            break
print(f"  ui art: {n_ficons} faith icons of {len(faiths)}")

# trait icons referenced by the character cards (index-named)
n_ticons = 0
for rel, idx in _pending_trait_icons:
    if export_dds(rel, f"tr_{idx}.png", 44):
        n_ticons += 1
print(f"  ui art: {n_ticons} trait icons")

meta = {
    "W": W, "H": H,
    "date": START_LABEL,
    "art": art_pools,
    "provinces": provinces,
    "counties": counties, "duchies": duchies,
    "kingdoms": kingdoms, "empires": empires,
    "cultures": cultures, "faiths": faiths,
    "chars": chars_out,
    "straits": straits,
    "rivers": rivers_data_url,
}
with open(OUT / "meta.json", "w") as f:
    json.dump(meta, f, separators=(",", ":"))

for p in ["prov.png", "height.png", "meta.json"]:
    print(p, (OUT / p).stat().st_size, "bytes")
land = sum(1 for v in provinces.values() if not v["s"])
print(f"land provinces: {land} (in real hierarchy: {n_linked}), water: {len(provinces) - land}")
print(f"tables: {len(counties)} counties, {len(duchies)} duchies, "
      f"{len(kingdoms)} kingdoms, {len(empires)} empires, "
      f"{len(cultures)} cultures, {len(faiths)} faiths")
