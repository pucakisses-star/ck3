#!/usr/bin/env python3
"""Generate original CK3-inspired procedural map texture PNGs.

The assets are intentionally original procedural textures inspired by medieval
political-map aesthetics. They do not use or reproduce Paradox/CK3 source assets.
"""
from __future__ import annotations

import math
import random
import struct
import zlib
from pathlib import Path

SIZE = 1024
OUT = Path(__file__).resolve().parents[1] / "assets" / "textures"
SEED = 8675309

def lerp(a, b, t): return a + (b - a) * t

def smooth(t): return t * t * (3 - 2 * t)

def value_noise(w, h, grid, rng):
    gw = w // grid + 3; gh = h // grid + 3
    pts = [[rng.random() for _ in range(gw)] for __ in range(gh)]
    data = [[0.0]*w for _ in range(h)]
    for y in range(h):
        gy = y / grid; y0 = int(gy); fy = smooth(gy - y0)
        for x in range(w):
            gx = x / grid; x0 = int(gx); fx = smooth(gx - x0)
            a = lerp(pts[y0][x0], pts[y0][x0+1], fx)
            b = lerp(pts[y0+1][x0], pts[y0+1][x0+1], fx)
            data[y][x] = lerp(a, b, fy)
    return data

def fbm(w, h, rng, grids=(256, 128, 64, 32, 16), weights=(0.35, .25, .18, .14, .08)):
    layers = [value_noise(w, h, g, rng) for g in grids]
    out = [[0.0]*w for _ in range(h)]
    for y in range(h):
        for x in range(w):
            out[y][x] = sum(layer[y][x]*wt for layer, wt in zip(layers, weights))
    mn = min(map(min, out)); mx = max(map(max, out))
    return [[(v-mn)/(mx-mn) for v in row] for row in out]

def write_png(path, pixels, rgba=True):
    color_type = 6 if rgba else 2
    raw = bytearray()
    for row in pixels:
        raw.append(0)
        for px in row:
            raw.extend(bytes(max(0, min(255, int(c))) for c in px))
    ihdr = struct.pack('!IIBBBBB', len(pixels[0]), len(pixels), 8, color_type, 0, 0, 0)
    def chunk(tag, data):
        return struct.pack('!I', len(data)) + tag + data + struct.pack('!I', zlib.crc32(tag+data) & 0xffffffff)
    path.write_bytes(b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', ihdr) + chunk(b'IDAT', zlib.compress(bytes(raw), 9)) + chunk(b'IEND', b''))

def colorize(noise, palette, alpha=255, vignette=0.0):
    h = len(noise); w = len(noise[0]); pixels=[]
    cx, cy = w/2, h/2; maxd = math.hypot(cx, cy)
    for y in range(h):
        row=[]
        for x in range(w):
            v = noise[y][x]
            p = min(len(palette)-2, int(v*(len(palette)-1)))
            t = v*(len(palette)-1)-p
            r,g,b = [lerp(palette[p][i], palette[p+1][i], t) for i in range(3)]
            if vignette:
                d = math.hypot(x-cx, y-cy)/maxd
                shade = 1 - vignette*smooth(max(0, (d-.35)/.65))
                r,g,b = r*shade, g*shade, b*shade
            row.append((r,g,b,alpha))
        pixels.append(row)
    return pixels

def main():
    OUT.mkdir(parents=True, exist_ok=True)
    rng = random.Random(SEED)
    base = fbm(SIZE, SIZE, rng)
    write_png(OUT/'parchment_land.png', colorize(base, [(126,119,91),(157,145,105),(184,166,123),(139,139,100),(104,113,90)], 255, .18))
    sea = fbm(SIZE, SIZE, rng)
    write_png(OUT/'muted_sea.png', colorize(sea, [(47,65,72),(67,88,94),(89,107,108),(58,82,91)], 255, .28))
    relief = fbm(SIZE, SIZE, rng, grids=(192,96,48,24,12), weights=(.2,.23,.23,.2,.14))
    relief_px=[]
    for y,row in enumerate(relief):
        out=[]
        for x,v in enumerate(row):
            ridge = max(0, abs(v-.52)*2-.28)*2.2
            a = min(150, int(ridge*180))
            out.append((62,45,31,a))
        relief_px.append(out)
    write_png(OUT/'mountain_relief_overlay.png', relief_px)
    fog = fbm(SIZE, SIZE, rng, grids=(384,192,96,48), weights=(.45,.28,.17,.1))
    fog_px=[]; c=SIZE/2; maxd=math.hypot(c,c)
    for y in range(SIZE):
        row=[]
        for x in range(SIZE):
            d=math.hypot(x-c,y-c)/maxd
            a=int(max(0, smooth((d-.45)/.55))*145 + fog[y][x]*45)
            row.append((47,50,48,min(190,a)))
        fog_px.append(row)
    write_png(OUT/'fog_vignette_overlay.png', fog_px)
    overlay = fbm(SIZE, SIZE, rng)
    write_png(OUT/'political_wash_overlay.png', colorize(overlay, [(132,76,68),(154,117,75),(83,112,93),(91,95,139),(128,86,126)], 115, 0))
    border = []
    n = fbm(SIZE, SIZE, rng, grids=(64,32,16,8), weights=(.3,.3,.25,.15))
    for y in range(SIZE):
        row=[]
        for x in range(SIZE):
            line = abs((x + 22*math.sin(y/43) + 9*(n[y][x]-.5)) % 170 - 85)
            a = 170 if line < 1.8 else (95 if line < 3.2 else 0)
            row.append((43,32,24,a))
        border.append(row)
    write_png(OUT/'irregular_border_strokes.png', border)

if __name__ == '__main__': main()
