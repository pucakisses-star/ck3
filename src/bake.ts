/** Bakes the map texture: relief-shaded terrain base, coasts, shallows, fog,
 *  then a mode-specific political/terrain wash with hierarchy borders. */
import { T, TCOL, isSea, type MapMode, type World } from './types';

function clamp255(v: number): number { return v < 0 ? 0 : v > 255 ? 255 : v | 0; }
function packRGB(r: number, g: number, b: number): number {
  return ((255 << 24) | (clamp255(b) << 16) | (clamp255(g) << 8) | clamp255(r)) >>> 0;
}

/** Multi-scale hillshade + soft cast shadow + ambient occlusion, baked per cell. */
export function computeShade(w: World): void {
  const { W, H, height, land } = w;
  const shade = new Float32Array(W * H);
  let lxx = -0.66, lyy = -0.70;
  const lm = Math.hypot(lxx, lyy); lxx /= lm; lyy /= lm;
  const LZ = 0.92, ll = Math.hypot(lxx, lyy, LZ);
  const RELIEF = 4.6, HSCALE = 42, STEPS = 10;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = y * W + x;
      if (!land[i]) { shade[i] = 1; continue; }
      const xl = x > 0 ? i - 1 : i, xr = x < W - 1 ? i + 1 : i;
      const yu = y > 0 ? i - W : i, yd = y < H - 1 ? i + W : i;
      const gx = (height[xl] - height[xr]) * RELIEF, gy = (height[yu] - height[yd]) * RELIEF;
      const nl = Math.hypot(gx, gy, 1);
      const diff = Math.max(-0.45, (gx * lxx + gy * lyy + LZ) / (nl * ll));
      let maxRise = 0;
      for (let k = 1; k <= STEPS; k++) {
        const sxp = (x + lxx * k) | 0, syp = (y + lyy * k) | 0;
        if (sxp < 0 || syp < 0 || sxp >= W || syp >= H) break;
        const rise = (height[syp * W + sxp] - height[i]) * HSCALE / k;
        if (rise > maxRise) maxRise = rise;
      }
      const shadow = Math.min(1, Math.max(0, (maxRise - 2.0) / 3.0));
      const R = 4;
      const a1 = height[Math.max(0, y - R) * W + x], a2 = height[Math.min(H - 1, y + R) * W + x];
      const a3 = height[y * W + Math.max(0, x - R)], a4 = height[y * W + Math.min(W - 1, x + R)];
      const ao = Math.min(0.20, Math.max(0, ((a1 + a2 + a3 + a4) / 4 - height[i]) * HSCALE * 0.022));
      let s = 0.54 + 0.56 * (diff * 0.5 + 0.5);
      s *= (1 - shadow * 0.32) * (1 - ao);
      s = 0.54 + (s - 0.54) * 1.32;
      shade[i] = Math.max(0.42, Math.min(1.3, s));
    }
  }
  w.shade = shade;
}

export interface BaseResult { baseBuf: Uint32Array; snow: Uint8Array }

/** Terrain base: relief colours + parchment grain, snow-capped peaks,
 *  shallows, coast ink, cloud fog. */
export function buildBase(w: World): BaseResult {
  const { W, H, N, terr, shade, land, height, seaBase, river } = w;
  const cloud = w.cloud!;
  const baseBuf = new Uint32Array(N);
  const snow = new Uint8Array(N);

  // snowline: high terrain only, and weighted by LOCAL RIDGE PROMINENCE so the
  // white sits patchily on crests (dark rock in the flanks/valleys between)
  // instead of blanketing whole highland regions in a solid sheet
  const hs: number[] = [];
  for (let i = 0; i < N; i += 13) if (land[i]) hs.push(height[i]);
  hs.sort((a, b) => a - b);
  const q = (f: number) => (hs.length ? hs[Math.min(hs.length - 1, (f * hs.length) | 0)] : 1);
  const snowLo = q(0.90), snowMid = Math.max(q(0.975), snowLo + 0.01);
  const PR = 10; // prominence radius in texels
  const sm01 = (t: number) => { t = t < 0 ? 0 : t > 1 ? 1 : t; return t * t * (3 - 2 * t); };

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = y * W + x, t = terr[i], s = shade[i];
      let r: number, g: number, b: number;
      if (isSea(t)) {
        // deep ocean falls off dark and blue-green; shallows stay bright
        const depth = Math.max(0, (seaBase - height[i]) / Math.max(0.001, seaBase));
        const cl = (cloud[i] - 0.5) * 16;
        r = 86 - depth * 42 + cl * 0.6; g = 103 - depth * 44 + cl * 0.8; b = 102 - depth * 34 + cl * 0.7;
      } else {
        const c = TCOL[t];
        const grain = (cloud[i] - 0.5) * 9 + ((((x * 131 + y * 57) ^ (x * 13 + y * 151)) % 13) - 6) * 0.9;
        r = c[0] * s + grain; g = c[1] * s + grain; b = c[2] * s + grain;
        // snow caps: high ground AND locally prominent (ridge crests / peaks),
        // so white sits patchily along ranges with dark rock between
        const hj = height[i] + (cloud[i] - 0.5) * 0.02;
        if (hj > snowLo) {
          const xl = Math.max(0, x - PR), xr = Math.min(W - 1, x + PR);
          const yu = Math.max(0, y - PR), yd = Math.min(H - 1, y + PR);
          const avg = (height[y * W + xl] + height[y * W + xr] + height[yu * W + x] + height[yd * W + x]
            + height[yu * W + xl] + height[yu * W + xr] + height[yd * W + xl] + height[yd * W + xr]) / 8;
          const prom = height[i] - avg + (cloud[i] - 0.5) * 0.004;
          const st = sm01((hj - snowLo) / (snowMid - snowLo)) * sm01(prom / 0.012);
          if (st > 0.02) {
            const ss = Math.min(1.05, s);
            r = r * (1 - st) + 228 * ss * st;
            g = g * (1 - st) + 231 * ss * st;
            b = b * (1 - st) + 234 * ss * st;
            snow[i] = (st * 255) | 0;
          }
        }
      }
      if (river[i] && land[i]) { r = r * 0.42 + 66 * 0.58; g = g * 0.42 + 96 * 0.58; b = b * 0.42 + 112 * 0.58; }
      baseBuf[i] = packRGB(r, g, b);
    }
  }
  // distance-to-land (two-pass Chamfer) for shallows + open-sea fog
  const dist = new Float32Array(N);
  for (let i = 0; i < N; i++) dist[i] = land[i] ? 0 : 1e9;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const i = y * W + x; if (land[i]) continue; let d = dist[i];
    if (x > 0) d = Math.min(d, dist[i - 1] + 1);
    if (y > 0) d = Math.min(d, dist[i - W] + 1);
    if (x > 0 && y > 0) d = Math.min(d, dist[i - W - 1] + 1.414);
    if (x < W - 1 && y > 0) d = Math.min(d, dist[i - W + 1] + 1.414);
    dist[i] = d;
  }
  for (let y = H - 1; y >= 0; y--) for (let x = W - 1; x >= 0; x--) {
    const i = y * W + x; if (land[i]) continue; let d = dist[i];
    if (x < W - 1) d = Math.min(d, dist[i + 1] + 1);
    if (y < H - 1) d = Math.min(d, dist[i + W] + 1);
    if (x < W - 1 && y < H - 1) d = Math.min(d, dist[i + W + 1] + 1.414);
    if (x > 0 && y < H - 1) d = Math.min(d, dist[i + W - 1] + 1.414);
    dist[i] = d;
  }
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const i = y * W + x;
    if (land[i]) {
      const coast = (x > 0 && !land[i - 1]) || (x < W - 1 && !land[i + 1]) || (y > 0 && !land[i - W]) || (y < H - 1 && !land[i + W]);
      if (coast) { const p = baseBuf[i], f = 0.66; baseBuf[i] = packRGB((p & 255) * f, ((p >> 8) & 255) * f, ((p >> 16) & 255) * f); }
    } else {
      const dl = dist[i];
      if (dl < 11) {
        // bright turquoise ring hugging the coast, like the game's shallows
        const a = (1 - dl / 11) * 0.38; const p = baseBuf[i];
        baseBuf[i] = packRGB((p & 255) * (1 - a) + 122 * a, ((p >> 8) & 255) * (1 - a) + 162 * a, ((p >> 16) & 255) * (1 - a) + 152 * a);
      }
    }
  }
  // cloudy parchment fog over open ocean and toward the frame edges
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const i = y * W + x;
    const u = x / W - 0.5, v = y / H - 0.5, d = Math.sqrt(u * u * 1.02 + v * v * 1.12);
    let edgeF = Math.max(0, (d - 0.40) / 0.5); edgeF *= edgeF;
    let openF = 0;
    if (!land[i]) { const dl = dist[i]; openF = Math.max(0, Math.min(1, (dl - 36) / 110)); }
    const cl = 0.35 + cloud[i] * 1.1;
    const fog = Math.min(0.95, Math.max(edgeF * cl, openF * openF * cl * 0.5));
    if (fog > 0.02) {
      const p = baseBuf[i];
      const r = (p & 255) * (1 - fog) + 216 * fog;
      const g = ((p >> 8) & 255) * (1 - fog) + 216 * fog;
      const b = ((p >> 16) & 255) * (1 - fog) + 206 * fog;
      baseBuf[i] = packRGB(r, g, b);
    }
  }
  return { baseBuf, snow };
}

export function devColor(d: number): [number, number, number] {
  const t = d / 100;
  const a: [number, number, number] = [120, 120, 96];
  const b: [number, number, number] = [196, 168, 92];
  const c: [number, number, number] = [168, 84, 64];
  const mix = (p: number[], q: number[], f: number): [number, number, number] =>
    [p[0] + (q[0] - p[0]) * f, p[1] + (q[1] - p[1]) * f, p[2] + (q[2] - p[2]) * f];
  return t < 0.5 ? mix(a, b, t * 2) : mix(b, c, (t - 0.5) * 2);
}

/** Writes the CPU part of the mode texture into `out` (RGBA, W×H).
 *  Political/culture/faith/development washes and ALL borders are drawn by
 *  the GPU from the full-resolution id texture (see scene3d) — the CPU only
 *  bakes the terrain base, plus the per-pixel elevation tint. */
export function bakeMode(w: World, base: BaseResult, mode: MapMode, out: ImageData): void {
  const { N, prov, height, seaBase, shade } = w;
  const { baseBuf, snow } = base;
  const buf = new Uint32Array(out.data.buffer);
  buf.set(baseBuf);
  if (mode !== 'elevation') return;

  for (let i = 0; i < N; i++) {
    if (prov[i] < 0) continue;
    const e = (height[i] - seaBase) / (1 - seaBase); const g = 40 + e * 200;
    const ov: [number, number, number] = [g * 0.9 + 20, g, g * 0.7 + 20];
    const s = shade[i];
    const lum = ov[0] * 0.3 + ov[1] * 0.59 + ov[2] * 0.11, ds = 0.16;
    const rr = (ov[0] + (lum - ov[0]) * ds) * s;
    const gg = (ov[1] + (lum - ov[1]) * ds) * s;
    const bb2 = (ov[2] + (lum - ov[2]) * ds) * s;
    const q = baseBuf[i], br = q & 255, bg = (q >> 8) & 255, bb = (q >> 16) & 255;
    const A = 0.82 * (1 - (snow[i] / 255) * 0.85);
    buf[i] = packRGB(br * (1 - A) + rr * A, bg * (1 - A) + gg * A, bb * (1 - A) + bb2 * A);
  }
}
