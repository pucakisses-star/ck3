/** Loads the fixed Godherja assets (map/prov.png, map/height.png, map/rivers.png,
 *  map/meta.json) and builds the world model. The political hierarchy, cultures
 *  and faiths are the REAL mod data (landed_titles + province history), baked
 *  into meta.json by tools/build_fixed_map.py. */
import { T, REALM_COLORS, type World, type CharCard } from './types';
import { mulberry32, makeNoise, nameGen } from './rng';

interface MetaProvince { n: string; t: number; s: number; c: number; cu: number; f: number; h?: number }
interface Meta {
  W: number; H: number;
  /** the mod's default bookmark year the holders are evaluated at */
  date?: string;
  /** scenic art pools for the province panel (bucket -> ui file names) */
  art?: Record<string, string[]>;
  provinces: Record<string, MetaProvince>;
  /** river mask as a PNG data URL (embedded so all assets stay text) */
  rivers: string;
  counties: { n: string; d: number; h?: string | null; hk?: string | null }[];
  duchies: { n: string; k: number; h?: string | null; hk?: string | null }[];
  kingdoms: { n: string; c: [number, number, number] | null; e: number; h?: string | null; hk?: string | null; cap?: number }[];
  empires: { n: string; c: [number, number, number] | null; h?: string | null; hk?: string | null; cap?: number }[];
  /** character cards for every referenced title holder */
  chars?: Record<string, CharCard>;
  /** strait/sea-crossing segments in grid px: [x1,y1,x2,y2] */
  straits?: number[][];
  cultures: {
    n: string; c: [number, number, number] | null;
    e?: string | null; he?: string | null; l?: string | null; m?: string | null; t?: string[];
  }[];
  faiths: {
    n: string; c: [number, number, number] | null; i?: number;
    r?: string | null; ad?: string | null; d?: string | null;
    t?: string[]; hs?: { n: string; c: number }[];
  }[];
}

function loadImageData(url: string): Promise<ImageData> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const c = document.createElement('canvas');
      c.width = img.naturalWidth; c.height = img.naturalHeight;
      const cx = c.getContext('2d', { willReadFrequently: true })!;
      cx.imageSmoothingEnabled = false;
      cx.drawImage(img, 0, 0);
      resolve(cx.getImageData(0, 0, c.width, c.height));
    };
    img.onerror = () => reject(new Error('failed to load ' + url));
    img.src = url;
  });
}

function hsl(h: number, s: number, l: number): [number, number, number] {
  h /= 360;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h * 12) % 12;
    return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
  };
  return [f(0) * 255, f(8) * 255, f(4) * 255];
}

export async function loadFixedMap(seed: number, base: string): Promise<World> {
  const [meta, provID, heightID] = await Promise.all([
    fetch(base + 'map/meta.json').then((r) => {
      if (!r.ok) throw new Error('meta.json HTTP ' + r.status);
      return r.json() as Promise<Meta>;
    }),
    loadImageData(base + 'map/prov.png'),
    loadImageData(base + 'map/height.png'),
  ]);
  const riversID = await loadImageData(meta.rivers);
  const W = meta.W, H = meta.H, N = W * H;
  const pm = meta.provinces;
  const cloudNz = makeNoise((seed >>> 0) + 4523);
  // stable fantasy names for the source data's unnamed placeholder baronies
  const phName = nameGen(mulberry32(99991)).prov;
  const isPlaceholder = (s: string) => /^(province\s*)?\d+$/i.test(s);

  const pd = provID.data, hd = heightID.data, rd = riversID.data;
  const height = new Float32Array(N), cloud = new Float32Array(N);
  const land = new Uint8Array(N), prov = new Int32Array(N).fill(-1), terr = new Uint8Array(N);
  const river = new Uint8Array(N);
  const rawGrid = new Uint16Array(N); // raw definition.csv id per cell (GPU fallback)
  const seaAgg = new Map<number, { sx: number; sy: number; n: number }>();
  const compact = new Map<number, number>();
  const provName: string[] = [];
  const rawOfList: number[] = [];
  const pTerrList: number[] = [], pCountyList: number[] = [];
  const pCultList: number[] = [], pFaithList: number[] = [];
  const pHoldList: number[] = [];
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = y * W + x;
      height[i] = hd[i * 4] / 255;
      cloud[i] = cloudNz.fbm(x / W * 2.4 + 13, y / H * 2.4 + 21, 3);
      river[i] = rd[i * 4] > 128 ? 1 : 0;
      const rid = pd[i * 4] | (pd[i * 4 + 1] << 8);
      rawGrid[i] = rid;
      const m = rid ? pm[rid] : undefined;
      if (!m || m.s) {
        terr[i] = T.OCEAN;
        if (m) {
          let sa = seaAgg.get(rid);
          if (!sa) { sa = { sx: 0, sy: 0, n: 0 }; seaAgg.set(rid, sa); }
          sa.sx += x; sa.sy += y; sa.n++;
        }
        continue;
      }
      let ci = compact.get(rid);
      if (ci === undefined) {
        ci = provName.length; compact.set(rid, ci);
        provName.push(isPlaceholder(m.n) ? phName() : m.n);
        rawOfList.push(rid);
        pTerrList.push(m.t); pCountyList.push(m.c ?? -1);
        pCultList.push(m.cu ?? -1); pFaithList.push(m.f ?? -1);
        pHoldList.push(m.h ?? 0);
      }
      prov[i] = ci; land[i] = 1; terr[i] = m.t;
    }
  }
  const np = provName.length;

  // province stats + adjacency
  const pArea = new Int32Array(np);
  const pSX = new Float64Array(np), pSY = new Float64Array(np);
  const pMinX = new Int32Array(np).fill(1e9), pMinY = new Int32Array(np).fill(1e9);
  const pMaxX = new Int32Array(np).fill(-1), pMaxY = new Int32Array(np).fill(-1);
  const pTerr = new Uint8Array(np);
  for (let p = 0; p < np; p++) pTerr[p] = pTerrList[p];
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = y * W + x, p = prov[i];
      if (p < 0) continue;
      pArea[p]++; pSX[p] += x; pSY[p] += y;
      if (x < pMinX[p]) pMinX[p] = x; if (y < pMinY[p]) pMinY[p] = y;
      if (x > pMaxX[p]) pMaxX[p] = x; if (y > pMaxY[p]) pMaxY[p] = y;
    }
  }
  const padj: Set<number>[] = []; for (let p = 0; p < np; p++) padj.push(new Set());
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = y * W + x, p = prov[i];
      if (p < 0) continue;
      if (x + 1 < W) { const q = prov[i + 1]; if (q >= 0 && q !== p) { padj[p].add(q); padj[q].add(p); } }
      if (y + 1 < H) { const q = prov[i + W]; if (q >= 0 && q !== p) { padj[p].add(q); padj[q].add(p); } }
    }
  }
  const pCX = new Float64Array(np), pCY = new Float64Array(np);
  for (let p = 0; p < np; p++) {
    pCX[p] = pSX[p] / Math.max(1, pArea[p]);
    pCY[p] = pSY[p] / Math.max(1, pArea[p]);
  }

  // ---- REAL hierarchy lookups (indices into the meta tables; -1 = wasteland)
  const countyOf = new Int32Array(np), duchyOf = new Int32Array(np);
  const kingOf = new Int32Array(np), empOf = new Int32Array(np);
  const cultureOf = new Int32Array(np), faithOf = new Int32Array(np);
  for (let p = 0; p < np; p++) {
    const c = pCountyList[p];
    countyOf[p] = c;
    const d = c >= 0 ? meta.counties[c].d : -1;
    duchyOf[p] = d;
    const k = d >= 0 ? meta.duchies[d].k : -1;
    kingOf[p] = k;
    empOf[p] = k >= 0 ? meta.kingdoms[k].e : -1;
    cultureOf[p] = pCultList[p];
    faithOf[p] = pFaithList[p];
  }
  const countyName = meta.counties.map((c) => c.n);
  const duchyName = meta.duchies.map((d) => d.n);
  const kingName = meta.kingdoms.map((k) => k.n);
  const empName = meta.empires.map((e) => e.n);
  const kColor: [number, number, number][] = meta.kingdoms.map((k, i) =>
    k.c ?? REALM_COLORS[i % REALM_COLORS.length]);
  const countyHolder = meta.counties.map((c) => c.h ?? null);
  const duchyHolder = meta.duchies.map((d) => d.h ?? null);
  const kingHolder = meta.kingdoms.map((k) => k.h ?? null);
  const empHolder = meta.empires.map((e) => e.h ?? null);
  const countyHolderKey = meta.counties.map((c) => c.hk ?? null);
  const duchyHolderKey = meta.duchies.map((d) => d.hk ?? null);
  const kingHolderKey = meta.kingdoms.map((k) => k.hk ?? null);
  const empHolderKey = meta.empires.map((e) => e.hk ?? null);
  const cultEthos = meta.cultures.map((c) => c.e ?? null);
  const cultHeritage = meta.cultures.map((c) => c.he ?? null);
  const cultLang = meta.cultures.map((c) => c.l ?? null);
  const cultMartial = meta.cultures.map((c) => c.m ?? null);
  const cultTrad = meta.cultures.map((c) => c.t ?? []);
  const cultName = meta.cultures.map((c) => c.n);
  const faithName = meta.faiths.map((f) => f.n);
  const faithHasIcon = meta.faiths.map((f) => !!f.i);
  const faithRelig = meta.faiths.map((f) => f.r ?? null);
  const faithAdh = meta.faiths.map((f) => f.ad ?? null);
  const faithDesc = meta.faiths.map((f) => f.d ?? null);
  const faithTenets = meta.faiths.map((f) => f.t ?? []);
  const faithSites = meta.faiths.map((f) => f.hs ?? []);
  const cultCol: [number, number, number][] = meta.cultures.map((c, i) =>
    c.c ?? hsl((i * 97) % 360, 0.32, 0.5));
  const faithCol: [number, number, number][] = meta.faiths.map((f, i) =>
    f.c ?? hsl((i * 151 + 40) % 360, 0.30, 0.52));

  // development stays procedural flavour (deterministic from the fixed seed)
  const rng = mulberry32((seed >>> 0) || 1);
  const devBase: Record<number, number> = {
    [T.FARM]: 70, [T.PLAINS]: 55, [T.FOREST]: 42, [T.HILLS]: 35, [T.WET]: 30,
    [T.DRY]: 25, [T.MTN]: 14, [T.SNOW]: 8, [T.BEACH]: 48,
  };
  const devOf = new Uint8Array(np);
  for (let p = 0; p < np; p++) {
    let b = devBase[pTerr[p]] ?? 40; b += (rng() - 0.5) * 26;
    devOf[p] = Math.max(1, Math.min(100, Math.round(b)));
  }

  // waterline for displacement/ocean depth
  const landH: number[] = [];
  for (let i = 0; i < N; i += 7) if (land[i]) landH.push(height[i]);
  landH.sort((a, b) => a - b);
  const seaBase = landH.length ? landH[Math.floor(landH.length * 0.02)] : 0.3;

  // small islands sank below the waterline in the heightmap downsample —
  // give every land cell a footing above it so islands rise out of the sea
  for (let i = 0; i < N; i++) {
    if (land[i] && height[i] < seaBase + 0.014) height[i] = seaBase + 0.014;
  }

  // land-side distance to the sea (Chamfer), for beach bands in the shader
  const coastD = new Uint8Array(N);
  {
    const INF = 255;
    for (let i = 0; i < N; i++) coastD[i] = land[i] ? INF : 0;
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const i = y * W + x; if (!land[i]) continue;
      let d = coastD[i];
      if (x > 0) d = Math.min(d, coastD[i - 1] + 1);
      if (y > 0) d = Math.min(d, coastD[i - W] + 1);
      coastD[i] = d;
    }
    for (let y = H - 1; y >= 0; y--) for (let x = W - 1; x >= 0; x--) {
      const i = y * W + x; if (!land[i]) continue;
      let d = coastD[i];
      if (x < W - 1) d = Math.min(d, coastD[i + 1] + 1);
      if (y < H - 1) d = Math.min(d, coastD[i + W] + 1);
      coastD[i] = d;
    }
  }

  // ---- raw-id tables covering EVERY province in the meta (including the
  // tiny ones lost in the 4096 downsample) — consumed by the GPU wash LUTs
  const RAW = 65536;
  const rawCounty = new Int32Array(RAW).fill(-1);
  const rawCult = new Int32Array(RAW).fill(-1);
  const rawFaith = new Int32Array(RAW).fill(-1);
  const rawLand = new Uint8Array(RAW);
  for (const key of Object.keys(pm)) {
    const rid = +key, m = pm[key];
    if (!m || m.s) continue;
    rawLand[rid] = 1;
    rawCounty[rid] = m.c ?? -1;
    rawCult[rid] = m.cu ?? -1;
    rawFaith[rid] = m.f ?? -1;
  }
  const cDuchy = Int32Array.from(meta.counties.map((c) => c.d));
  const dKing = Int32Array.from(meta.duchies.map((d) => d.k));
  const kEmp = Int32Array.from(meta.kingdoms.map((k) => k.e));

  // named seas: one label per sea NAME (many provinces share their sea's
  // name), placed at the combined pixel centroid
  const seaByName = new Map<string, { sx: number; sy: number; n: number }>();
  for (const [rid, sa] of seaAgg) {
    const nm = pm[rid]?.n;
    if (!nm || isPlaceholder(nm) || sa.n < 300) continue;
    let e = seaByName.get(nm);
    if (!e) { e = { sx: 0, sy: 0, n: 0 }; seaByName.set(nm, e); }
    e.sx += sa.sx; e.sy += sa.sy; e.n += sa.n;
  }
  const seaLabels: { x: number; y: number; n: string; a: number }[] = [];
  for (const [nm, e] of seaByName) {
    if (e.n < 1200) continue;
    seaLabels.push({ x: e.sx / e.n, y: e.sy / e.n, n: nm, a: e.n });
  }
  seaLabels.sort((a, b) => b.a - a.a);

  // frame the settled realms, not the vast uncolonised wastelands
  let landCX = 0, landCY = 0, landN = 0;
  for (let p = 0; p < np; p++) {
    if (countyOf[p] < 0) continue;
    landCX += pCX[p] * pArea[p]; landCY += pCY[p] * pArea[p]; landN += pArea[p];
  }
  landCX /= Math.max(1, landN); landCY /= Math.max(1, landN);

  return {
    W, H, N, height, seaBase, terr, land, prov, cloud, river, coastD,
    shade: new Float32Array(0), // filled by computeShade
    np, provName, pTerr, pArea, pCX, pCY, pMinX, pMinY, pMaxX, pMaxY, padj,
    nCounty: meta.counties.length, nDuchy: meta.duchies.length,
    nKing: meta.kingdoms.length, nEmp: meta.empires.length,
    countyOf, duchyOf, kingOf, empOf,
    countyName, duchyName, kingName, empName, kColor,
    countyHolder, duchyHolder, kingHolder, empHolder,
    cultureOf, faithOf, nCult: meta.cultures.length, nFaith: meta.faiths.length,
    cultName, faithName, cultCol, faithCol, faithHasIcon,
    faithRelig, faithAdh, faithDesc, faithTenets, faithSites,
    countyHolderKey, duchyHolderKey, kingHolderKey, empHolderKey,
    chars: meta.chars ?? {},
    cultEthos, cultHeritage, cultLang, cultMartial, cultTrad,
    holdingOf: Uint8Array.from(pHoldList),
    date: meta.date ?? '1254',
    artPools: meta.art ?? {},
    kCapital: Int32Array.from(meta.kingdoms.map((k) => k.cap ?? -1)),
    eCapital: Int32Array.from(meta.empires.map((e) => e.cap ?? -1)),
    seaLabels, straits: meta.straits ?? [],
    rawOf: Int32Array.from(rawOfList), rawGrid,
    rawCounty, rawCult, rawFaith, rawLand, cDuchy, dKing, kEmp,
    devOf, landCX, landCY, seed,
  } as World;
}
