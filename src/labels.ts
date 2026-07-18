/** Screen-space label overlay: PCA-placed, perspective-projected, stretched
 *  serif realm names with collision culling and zoom tiers. */
import type { World } from './types';
import type { MapScene } from './scene3d';

export interface RealmLabel {
  x: number; y: number; angle: number; ext: number; name: string; area: number; idx: number;
  capX?: number; capY?: number;
}
export interface ProvLabel { x: number; y: number; ext: number; name: string; area: number }
export interface SeaLabel { x: number; y: number; ext: number; name: string; area: number }
export interface Labels {
  king: RealmLabel[]; emp: RealmLabel[]; prov: ProvLabel[];
  sea: SeaLabel[]; straits: number[][];
}

export function buildLabels(w: World): Labels {
  const { np, pArea, pCX, pCY, W, H } = w;
  function pca(count: number, ofArr: Int32Array, names: string[]): RealmLabel[] {
    const sx = new Float64Array(count), sy = new Float64Array(count), ww = new Float64Array(count);
    const sxx = new Float64Array(count), syy = new Float64Array(count), sxy = new Float64Array(count);
    for (let p = 0; p < np; p++) {
      const g = ofArr[p];
      if (g < 0) continue; // wasteland provinces belong to no realm
      const a = pArea[p], x = pCX[p], y = pCY[p];
      sx[g] += x * a; sy[g] += y * a; ww[g] += a;
      sxx[g] += x * x * a; syy[g] += y * y * a; sxy[g] += x * y * a;
    }
    const out: RealmLabel[] = [];
    for (let g = 0; g < count; g++) {
      if (ww[g] < 1) continue;
      const mx = sx[g] / ww[g], my = sy[g] / ww[g];
      const cxx = sxx[g] / ww[g] - mx * mx, cyy = syy[g] / ww[g] - my * my, cxy = sxy[g] / ww[g] - mx * my;
      const ang = 0.5 * Math.atan2(2 * cxy, cxx - cyy);
      const tr = cxx + cyy, det = cxx * cyy - cxy * cxy;
      const disc = Math.sqrt(Math.max(0, (tr * tr) / 4 - det));
      out.push({ x: mx, y: my, angle: ang, ext: Math.sqrt(Math.max(1, tr / 2 + disc)), name: names[g], area: ww[g], idx: g });
    }
    return out;
  }
  const king = pca(w.nKing, w.kingOf, w.kingName);
  const emp = pca(w.nEmp, w.empOf, w.empName);

  // anchor realm flags at the actual capital county (falls back to the label)
  const cSX = new Float64Array(w.nCounty), cSY = new Float64Array(w.nCounty), cN = new Float64Array(w.nCounty);
  for (let p = 0; p < np; p++) {
    const c = w.countyOf[p];
    if (c < 0) continue;
    cSX[c] += pCX[p] * pArea[p]; cSY[c] += pCY[p] * pArea[p]; cN[c] += pArea[p];
  }
  const anchor = (labelsArr: RealmLabel[], capOf: Int32Array) => {
    for (const l of labelsArr) {
      const c = capOf[l.idx];
      if (c >= 0 && cN[c] > 0) { l.capX = cSX[c] / cN[c]; l.capY = cSY[c] / cN[c]; }
    }
  };
  anchor(king, w.kCapital);
  anchor(emp, w.eCapital);

  const sea: SeaLabel[] = w.seaLabels.map((s) => ({
    x: s.x, y: s.y, name: s.n, area: s.a, ext: Math.sqrt(s.a) * 0.9,
  }));
  const prov: ProvLabel[] = [];
  const provMin = Math.max(40, ((W * H) / np) * 0.25);
  for (let p = 0; p < np; p++) {
    if (pArea[p] < provMin) continue;
    prov.push({
      x: pCX[p], y: pCY[p], name: w.provName[p],
      ext: Math.hypot(w.pMaxX[p] - w.pMinX[p], w.pMaxY[p] - w.pMinY[p]) / 2,
      area: pArea[p],
    });
  }
  return { king, emp, prov, sea, straits: w.straits };
}

const SERIF = '"Iowan Old Style",Palatino,Georgia,serif';

/** realm flag images (rendered by tools/build_coa.py), loaded lazily */
const flagCache = new Map<string, HTMLImageElement | null>();
function getFlag(url: string, onAsset: (() => void) | null): HTMLImageElement | null {
  let img = flagCache.get(url);
  if (img !== undefined) return img && img.complete && img.naturalWidth ? img : null;
  const el = new Image();
  el.onload = () => { if (onAsset) onAsset(); };
  el.onerror = () => flagCache.set(url, null);
  el.src = url;
  flagCache.set(url, el);
  return null;
}

export function drawLabels(ctx: CanvasRenderingContext2D, labels: Labels, scene: MapScene,
  coaBase?: string, onAsset?: (() => void) | null): void {
  const CW = window.innerWidth, CH = window.innerHeight;
  ctx.clearRect(0, 0, CW, CH);
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';

  const dist = scene.cam.dist;
  const empPhase = dist > scene.fitDist * 0.55;
  const showProv = dist < 680;

  const placed: { x: number; y: number; hw: number; hh: number }[] = [];
  const excl: DOMRect[] = [];
  document.querySelectorAll<HTMLElement>('.panel').forEach((el) => {
    if (el.classList.contains('hidden')) return;
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden') return;
    const r = el.getBoundingClientRect();
    if (r.width && r.height) excl.push(r);
  });
  const MARGIN = 44;
  function blocked(cx: number, cy: number, hw: number, hh: number): boolean {
    if (cx - hw < MARGIN || cx + hw > CW - MARGIN || cy - hh < MARGIN || cy + hh > CH - MARGIN) return true;
    for (const r of excl) {
      if (cx + hw > r.left - 6 && cx - hw < r.right + 6 && cy + hh > r.top - 6 && cy - hh < r.bottom + 6) return true;
    }
    return false;
  }
  function fits(cx: number, cy: number, hw: number, hh: number): boolean {
    if (blocked(cx, cy, hw, hh)) return false;
    for (const b of placed) {
      if (Math.abs(cx - b.x) < hw + b.hw && Math.abs(cy - b.y) < hh + b.hh) return false;
    }
    return true;
  }

  /** Perspective-project the label's centre and axis endpoints. */
  function measure(l: RealmLabel): { sx: number; sy: number; screenExt: number; rot: number } | null {
    const c = scene.projectGrid(l.x, l.y);
    if (!c) return null;
    const dx = Math.cos(l.angle) * l.ext, dy = Math.sin(l.angle) * l.ext;
    const a = scene.projectGrid(l.x - dx, l.y - dy);
    const b = scene.projectGrid(l.x + dx, l.y + dy);
    if (!a || !b) return null;
    let rot = Math.atan2(b[1] - a[1], b[0] - a[0]);
    if (rot > Math.PI / 2) rot -= Math.PI;
    if (rot < -Math.PI / 2) rot += Math.PI;
    return { sx: c[0], sy: c[1], screenExt: Math.hypot(b[0] - a[0], b[1] - a[1]), rot };
  }

  function drawStretched(l: RealmLabel, fontPx: number, color: string, shadow: string, targetW: number, alpha: number,
    flagKind?: string): void {
    const m = measure(l);
    if (!m) return;
    if (m.sx < -320 || m.sx > CW + 320 || m.sy < -200 || m.sy > CH + 200) return;
    ctx.font = `600 ${fontPx}px ${SERIF}`;
    const txt = l.name.toUpperCase();
    let glyphs = 0; const wid: number[] = [];
    for (const ch of txt) { const cw = ctx.measureText(ch).width; wid.push(cw); glyphs += cw; }
    let sp = txt.length > 1 ? (targetW - glyphs) / (txt.length - 1) : 0;
    sp = Math.max(fontPx * 0.08, Math.min(sp, fontPx * 0.9));
    const total = glyphs + sp * (txt.length - 1);
    const hw = total * 0.5 * 0.8 + 8, hh = fontPx * 0.62 + 5;
    if (!fits(m.sx, m.sy, hw, hh)) return;
    placed.push({ x: m.sx, y: m.sy, hw, hh });
    ctx.save();
    ctx.translate(m.sx, m.sy);
    ctx.rotate(m.rot);
    ctx.globalAlpha = alpha; ctx.lineJoin = 'round';
    let cx = -total / 2;
    for (let k = 0; k < txt.length; k++) {
      const ch = txt[k], cw = wid[k], px = cx + cw / 2;
      ctx.lineWidth = fontPx * 0.2; ctx.strokeStyle = shadow; ctx.strokeText(ch, px, 0);
      ctx.fillStyle = color; ctx.fillText(ch, px, 0);
      cx += cw + sp;
    }
    ctx.restore();
    // the realm's coat of arms, pinned at its capital when one is declared
    if (flagKind && coaBase) {
      const img = getFlag(`${coaBase}${flagKind}_${l.idx}.png`, onAsset ?? null);
      if (img) {
        const fs = Math.max(20, Math.min(fontPx * 1.25, 46));
        let fx = m.sx, fy = m.sy - hh - fs - 4;
        if (l.capX !== undefined && l.capY !== undefined) {
          const cp = scene.projectGrid(l.capX, l.capY, 4);
          if (cp) { fx = cp[0]; fy = cp[1] - fs; }
        }
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.shadowColor = 'rgba(0,0,0,0.55)'; ctx.shadowBlur = 6; ctx.shadowOffsetY = 2;
        ctx.drawImage(img, fx - fs / 2, fy, fs, fs);
        ctx.restore();
      }
    }
  }

  // ---- strait / sea-route crossings (dashed, like the game) ----
  {
    ctx.save();
    ctx.setLineDash([7, 5]);
    ctx.lineWidth = 1.6;
    ctx.strokeStyle = 'rgba(146, 44, 30, 0.75)';
    for (const s of labels.straits) {
      const a = scene.projectGrid(s[0], s[1], 1.5);
      const b = scene.projectGrid(s[2], s[3], 1.5);
      if (!a || !b) continue;
      const d = Math.hypot(b[0] - a[0], b[1] - a[1]);
      if (d < 7 || d > 620) continue;
      if (Math.max(a[0], b[0]) < 0 || Math.min(a[0], b[0]) > CW) continue;
      if (Math.max(a[1], b[1]) < 0 || Math.min(a[1], b[1]) > CH) continue;
      ctx.beginPath();
      ctx.moveTo(a[0], a[1]);
      ctx.lineTo(b[0], b[1]);
      ctx.stroke();
    }
    ctx.restore();
  }


  if (empPhase) {
    for (const l of [...labels.emp].sort((a, b) => b.area - a.area)) {
      const m = measure(l); if (!m) continue;
      const fs = Math.max(22, Math.min(m.screenExt * 2 * 0.15, 56));
      drawStretched(l, fs, 'rgba(26,20,12,0.86)', 'rgba(238,228,198,0.4)', Math.min(m.screenExt * 2 * 0.9, CW * 0.62), 0.9, 'e');
    }
  }
  {
    const alpha = empPhase ? 0.85 : 1;
    for (const l of [...labels.king].sort((a, b) => b.area - a.area)) {
      const m = measure(l); if (!m) continue;
      const screenExt = m.screenExt * 2;
      if (screenExt < 62) continue;
      let fs = Math.max(13, Math.min(screenExt * 0.18, 40));
      if (fs * 0.62 > (screenExt * 0.95) / Math.max(3, l.name.length)) {
        fs = Math.max(12, (screenExt * 0.95) / (l.name.length * 0.62));
      }
      drawStretched(l, fs, 'rgba(26,20,12,0.94)', 'rgba(238,226,192,0.5)', Math.min(screenExt * 0.86, CW * 0.5), alpha,
        empPhase ? undefined : 'k');
    }
  }
  // ---- named seas: quiet italic labels over open water ----
  {
    ctx.save();
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    for (const l of labels.sea) {
      const pr = scene.projectGrid(l.x, l.y, 1);
      if (!pr) continue;
      const [sx, sy] = pr;
      if (sx < -60 || sx > CW + 60 || sy < -40 || sy > CH + 40) continue;
      const tip = scene.projectGrid(l.x + l.ext, l.y, 1);
      const screenExt = tip ? Math.abs(tip[0] - sx) : 0;
      const fs = Math.max(10, Math.min(screenExt * 0.30, 26));
      if (fs < 10) continue;
      ctx.font = `italic 600 ${fs}px ${SERIF}`;
      const hw = ctx.measureText(l.name).width * 0.5 + 6, hh2 = fs * 0.6 + 3;
      if (!fits(sx, sy, hw, hh2)) continue;
      placed.push({ x: sx, y: sy, hw, hh: hh2 });
      ctx.globalAlpha = 0.78;
      ctx.lineWidth = fs * 0.18; ctx.strokeStyle = 'rgba(26,34,34,0.5)';
      ctx.strokeText(l.name, sx, sy);
      ctx.fillStyle = 'rgba(205,221,218,0.92)';
      ctx.fillText(l.name, sx, sy);
    }
    ctx.globalAlpha = 1;
    ctx.restore();
  }
  if (showProv) {
    const pa = Math.min(1, (680 - dist) / 220);
    for (const l of [...labels.prov].sort((a, b) => b.area - a.area)) {
      const pr = scene.projectGrid(l.x, l.y);
      if (!pr) continue;
      const [sx, sy] = pr;
      if (sx < 0 || sx > CW || sy < 0 || sy > CH) continue;
      const tip = scene.projectGrid(l.x + l.ext, l.y);
      const screenExt = tip ? Math.abs(tip[0] - sx) : 0;
      const fs = Math.max(9, Math.min(screenExt * 0.32, 16));
      if (fs < 9) continue;
      ctx.font = `600 ${fs}px ${SERIF}`;
      const hw = ctx.measureText(l.name).width * 0.5 + 4, hh = fs * 0.6 + 3;
      if (!fits(sx, sy, hw, hh)) continue;
      placed.push({ x: sx, y: sy, hw, hh });
      ctx.globalAlpha = pa;
      ctx.lineWidth = fs * 0.28; ctx.strokeStyle = 'rgba(242,232,202,0.78)'; ctx.strokeText(l.name, sx, sy);
      ctx.fillStyle = 'rgba(26,20,10,0.96)'; ctx.fillText(l.name, sx, sy);
    }
  }
  ctx.globalAlpha = 1;
}
