#!/usr/bin/env python3
"""Render realm coat-of-arms flags from the mod's heraldry data.

Reads common/coat_of_arms/coat_of_arms/*.txt (pattern + colored_emblem
layers, CK3 semantics: emblem textures encode colour slots as red->color1,
yellow->color2, white->color3), common/named_colors, and the emblem art in
gfx/coat_of_arms. Writes one flag PNG per de jure kingdom and empire
(indices match meta.json) into docs/map/ui/coa/.

Run AFTER build_fixed_map.py (needs the title keys in docs/map/meta.json).
Vanilla textures the mod doesn't ship are approximated (common split/checker
patterns procedurally; missing emblems are skipped).
"""
import colorsys
import json
import re
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
PAT = ROOT / "gfx" / "coat_of_arms" / "patterns"
EMB = ROOT / "gfx" / "coat_of_arms" / "colored_emblems"
TEX = ROOT / "gfx" / "coat_of_arms" / "textured_emblems"
OUT = ROOT / "docs" / "map" / "ui" / "coa"
OUT.mkdir(parents=True, exist_ok=True)
for f in OUT.glob("*"):
    f.unlink()

S = 128          # render size (downscaled to 64 on save for AA)
FINAL = 64

# ------------------------------------------------------------------ parsing
TOKEN_RE = re.compile(r'"(?:[^"\\]|\\.)*"|[{}=]|[^\s{}=]+')

def tokenize(text):
    return TOKEN_RE.findall(re.sub(r"#[^\n]*", "", text))

def parse_blocks(tokens, i=0):
    out = []
    n = len(tokens)
    while i < n:
        t = tokens[i]
        if t == "}":
            return out, i + 1
        if i + 1 < n and tokens[i + 1] == "=":
            v = tokens[i + 2] if i + 2 < n else ""
            if v == "{":
                sub, i = parse_blocks(tokens, i + 3)
                out.append((t, sub))
            else:
                out.append((t, v))
                i += 3
        elif t == "{":
            sub, i = parse_blocks(tokens, i + 1)
            out.append(("", sub))
        else:
            out.append(("", t))
            i += 1
    return out, i

# ------------------------------------------------------------------- colours
# vanilla base colours the mod's named_colors files assume (values match the
# hints commented in default_colors.txt / CK3's jomini defaults)
NAMED = {
    "red": (140, 36, 26), "yellow": (191, 143, 48), "white": (220, 216, 200),
    "black": (36, 32, 30), "blue": (44, 77, 128), "green": (66, 110, 62),
    "grey": (128, 128, 128), "gray": (128, 128, 128),
    "purple": (92, 42, 87), "orange": (153, 76, 20), "brown": (117, 72, 30),
    "blue_light": (66, 116, 141), "green_light": (92, 122, 78),
    "yellow_light": (204, 164, 76), "red_light": (168, 63, 44),
    "pink": (176, 108, 130), "beige": (186, 168, 130),
}

def cl(c):
    return tuple(max(0, min(255, int(x))) for x in c)

def hsv_rgb(h, s, v):
    r, g, b = colorsys.hsv_to_rgb(h % 1.0, min(1, s), min(1, v))
    return cl((r * 255, g * 255, b * 255))

def parse_color_val(v):
    """v is a token string (name) or a parsed block list."""
    if isinstance(v, str):
        return NAMED.get(v.strip('"'))
    mode, vals = "rgb", []
    for k2, x in v:
        if isinstance(x, list):
            continue
        if x in ("hsv", "hsv360", "rgb"):
            mode = x
            continue
        try:
            vals.append(float(x))
        except ValueError:
            pass
    if len(vals) < 3:
        return None
    if mode == "hsv":
        return hsv_rgb(vals[0], vals[1], vals[2])
    if mode == "hsv360":
        return hsv_rgb(vals[0] / 360, vals[1] / 100, vals[2] / 100)
    if all(x <= 1.001 for x in vals):
        return cl(tuple(x * 255 for x in vals[:3]))
    return cl(tuple(vals[:3]))

for f in (ROOT / "common" / "named_colors").glob("*.txt"):
    blocks, _ = parse_blocks(tokenize(f.read_text(encoding="utf-8-sig", errors="replace")))
    for key, val in blocks:
        if key == "colors" and isinstance(val, list):
            for name, cv in val:
                if not name:
                    continue
                c = parse_color_val(cv) if isinstance(cv, list) else NAMED.get(str(cv).strip('"'))
                if c:
                    NAMED.setdefault(name, c)
print(f"{len(NAMED)} named colours")

# --------------------------------------------------------------- definitions
coa_defs = {}
for f in sorted((ROOT / "common" / "coat_of_arms" / "coat_of_arms").glob("*.txt")):
    blocks, _ = parse_blocks(tokenize(f.read_text(encoding="utf-8-sig", errors="replace")))
    for key, val in blocks:
        if isinstance(val, list) and re.match(r"^[ekd]_", key):
            coa_defs[key] = val
print(f"{len(coa_defs)} authored title coats of arms")

# --------------------------------------------------------------- compositing
def slot_colors(block, fallback):
    cols = list(fallback)
    for k2, v2 in block:
        m = re.match(r"^color(\d)$", k2)
        if m:
            i = int(m.group(1)) - 1
            c = parse_color_val(v2)
            if c and i < 3:
                cols[i] = c
    return cols

def decompose(img, c1, c2, c3):
    """CK3 slot encoding: red->c1, yellow->c2, white->c3."""
    a = np.asarray(img.convert("RGBA")).astype(np.float32) / 255.0
    r, g, b, al = a[..., 0], a[..., 1], a[..., 2], a[..., 3]
    w = b
    ye = np.clip(g - b, 0, 1)
    rd = np.clip(r - g, 0, 1)
    out = np.zeros_like(a)
    for i in range(3):
        out[..., i] = (rd * c1[i] + ye * c2[i] + w * c3[i]) / 255.0
    out[..., 3] = al
    return np.clip(out * 255, 0, 255).astype(np.uint8)

def procedural_pattern(name, c1, c2):
    im = np.zeros((S, S, 3), np.uint8)
    im[:, :] = c1
    n = name.lower()
    xx, yy = np.meshgrid(np.arange(S), np.arange(S))
    if "vertical_split" in n:
        im[:, S // 2:] = c2
    elif "horizontal_split" in n:
        im[S // 2:, :] = c2
    elif "diagonal_split_01" in n:
        im[yy > xx] = c2
    elif "diagonal_split_02" in n:
        im[yy > (S - 1 - xx)] = c2
    elif "checkers" in n:
        k = 2 if "02" in n else 4
        im[((xx * k // S) + (yy * k // S)) % 2 == 1] = c2
    elif "chief" in n:
        im[: S // 3, :] = c2
    elif "base" in n or "champagne" in n:
        im[2 * S // 3:, :] = c2
    elif "pale" in n:
        im[:, S // 3: 2 * S // 3] = c2
    elif "fess" in n or "stripe" in n:
        im[S // 3: 2 * S // 3, :] = c2
    elif "bend" in n:
        im[np.abs(yy - xx) < S // 6] = c2
    elif "cross" in n or "plus" in n:
        band = np.abs(xx - S // 2) < S // 8
        im[band] = c2
        im[np.abs(yy - S // 2) < S // 8] = c2
    elif "saltire" in n:
        im[np.abs(yy - xx) < S // 7] = c2
        im[np.abs(yy - (S - 1 - xx)) < S // 7] = c2
    elif "quarterly" in n or "quadrants" in n:
        im[(xx < S // 2) ^ (yy >= S // 2)] = c2
    return im

def render_coa(block, title_color):
    fallback = [NAMED["red"], NAMED["yellow"], NAMED["white"]]
    base_cols = slot_colors(block, fallback)
    pattern = None
    for k2, v2 in block:
        if k2 == "pattern" and not isinstance(v2, list):
            pattern = v2.strip('"')
    canvas = None
    if pattern:
        pf = PAT / pattern
        if pf.exists():
            img = Image.open(pf).resize((S, S), Image.LANCZOS)
            canvas = decompose(img, *base_cols)[..., :3]
        else:
            canvas = procedural_pattern(pattern, base_cols[0], base_cols[1])
    if canvas is None:
        canvas = np.zeros((S, S, 3), np.uint8)
        canvas[:, :] = base_cols[0] if block else (title_color or (110, 110, 110))
    out = Image.fromarray(canvas, "RGB").convert("RGBA")

    for k2, v2 in block:
        if k2 not in ("colored_emblem", "textured_emblem") or not isinstance(v2, list):
            continue
        tex = None
        for k3, v3 in v2:
            if k3 == "texture" and not isinstance(v3, list):
                tex = v3.strip('"')
        if not tex:
            continue
        src = (EMB if k2 == "colored_emblem" else TEX) / tex
        if not src.exists():
            continue
        try:
            raw = Image.open(src)
        except Exception:
            continue
        ecols = slot_colors(v2, fallback)
        sprite = Image.fromarray(
            decompose(raw, *ecols) if k2 == "colored_emblem"
            else np.asarray(raw.convert("RGBA")), "RGBA")
        insts = [b for k3, b in v2 if k3 == "instance" and isinstance(b, list)] or [[]]
        for inst in insts:
            px, py, sx, sy, rot = 0.5, 0.5, 1.0, 1.0, 0.0
            for k3, v3 in inst:
                if not isinstance(v3, list):
                    continue
                vals = []
                for _, x in v3:
                    try:
                        vals.append(float(x))
                    except (ValueError, TypeError):
                        pass
                if k3 == "position" and len(vals) >= 2:
                    px, py = vals[0], vals[1]
                elif k3 == "scale" and len(vals) >= 1:
                    sx = vals[0]; sy = vals[1] if len(vals) > 1 else vals[0]
                elif k3 == "rotation" and len(vals) >= 1:
                    rot = vals[0]
            for k3, v3 in inst:
                if k3 == "rotation" and not isinstance(v3, list):
                    try:
                        rot = float(v3)
                    except ValueError:
                        pass
            w = max(2, int(abs(sx) * S)); h = max(2, int(abs(sy) * S))
            sp = sprite.resize((w, h), Image.LANCZOS)
            if sx < 0:
                sp = sp.transpose(Image.FLIP_LEFT_RIGHT)
            if sy < 0:
                sp = sp.transpose(Image.FLIP_TOP_BOTTOM)
            if rot:
                sp = sp.rotate(-rot, expand=True, resample=Image.BICUBIC)
            out.alpha_composite(sp, (int(px * S - sp.width / 2), int(py * S - sp.height / 2)))
    return out

def frame(img):
    a = np.asarray(img.convert("RGB")).copy()
    a[:2, :] = a[-2:, :] = a[:, :2] = a[:, -2:] = (46, 38, 28)
    a[2:4, 2:-2] = a[-4:-2, 2:-2] = a[2:-2, 2:4] = a[2:-2, -4:-2] = (166, 138, 82)
    return Image.fromarray(a).resize((FINAL, FINAL), Image.LANCZOS)

meta = json.load(open(ROOT / "docs/map/meta.json"))
made = authored = 0
for kind, table in (("k", meta["kingdoms"]), ("e", meta["empires"])):
    for i, ent in enumerate(table):
        key = ent.get("t")
        block = coa_defs.get(key, [])
        if block:
            authored += 1
        col = cl(ent["c"]) if ent.get("c") else None
        img = render_coa(block, col)
        frame(img).save(OUT / f"{kind}_{i}.png", optimize=True)
        made += 1
print(f"{made} flags rendered ({authored} from authored heraldry)")
