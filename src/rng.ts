/** Deterministic PRNG + hashed value noise + fantasy name generator. */

export type Rng = () => number;

export function mulberry32(a: number): Rng {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export interface Noise {
  vn(x: number, y: number): number;
  fbm(x: number, y: number, oct: number, gain?: number, lac?: number): number;
}

export function makeNoise(seed: number): Noise {
  const s = (seed * 2654435761) >>> 0;
  function h2(x: number, y: number): number {
    let n = (x * 374761393 + y * 668265263 + s * 1442695041) | 0;
    n = Math.imul(n ^ (n >>> 13), 1274126177);
    return ((n ^ (n >>> 16)) >>> 0) / 4294967295;
  }
  const sm = (t: number) => t * t * (3 - 2 * t);
  function vn(x: number, y: number): number {
    const xi = Math.floor(x), yi = Math.floor(y), fx = sm(x - xi), fy = sm(y - yi);
    const a = h2(xi, yi), b = h2(xi + 1, yi), c = h2(xi, yi + 1), d = h2(xi + 1, yi + 1);
    return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
  }
  function fbm(x: number, y: number, oct: number, gain = 0.5, lac = 2): number {
    let f = 1, amp = 1, sum = 0, norm = 0;
    for (let i = 0; i < oct; i++) { sum += amp * vn(x * f, y * f); norm += amp; amp *= gain; f *= lac; }
    return sum / norm;
  }
  return { vn, fbm };
}

export interface NameGen {
  prov(): string;
  duchy(): string;
  kingdom(): string;
  empire(): string;
}

export function nameGen(rng: Rng): NameGen {
  const on = ['b', 'br', 'd', 'dr', 'f', 'g', 'gr', 'h', 'k', 'kr', 'l', 'm', 'n', 'r', 's', 'sk', 'st', 't', 'th', 'v', 'vr', 'w', 'z', 'bh', 'kh', 'sh'];
  const vo = ['a', 'a', 'e', 'e', 'i', 'o', 'o', 'u', 'au', 'ae', 'ei', 'ou', 'y', 'ia', 'eo'];
  const co = ['n', 'r', 'l', 's', 'm', 'th', 'sk', 'rn', 'ld', 'st', 'k', 'd', 'g', 'ng', 'rk', 'ss', 'dt', 'vn'];
  const cap = (w: string) => w.charAt(0).toUpperCase() + w.slice(1);
  function word(minS: number, maxS: number): string {
    const n = minS + Math.floor(rng() * (maxS - minS + 1));
    let w = '';
    for (let i = 0; i < n; i++) {
      if (i > 0 || rng() < 0.75) w += on[Math.floor(rng() * on.length)];
      w += vo[Math.floor(rng() * vo.length)];
      if (i === n - 1 || rng() < 0.35) w += co[Math.floor(rng() * co.length)];
    }
    return cap(w);
  }
  const suf = ['reach', 'mark', 'land', 'gard', 'heim', 'fell', 'moor', 'vale', 'wold', 'holt', 'stead', 'watch', 'crown', 'host', 'rike'];
  return {
    prov: () => word(1, 2),
    duchy: () => word(2, 2),
    kingdom: () => (rng() < 0.4 ? word(2, 3) + ' ' + cap(suf[Math.floor(rng() * suf.length)]) : word(2, 3)),
    empire: () => word(2, 3) + (rng() < 0.5 ? ' ' + cap(suf[Math.floor(rng() * suf.length)]) : ''),
  };
}
