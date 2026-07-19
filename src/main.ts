/** Boot: load fixed Godherja assets → bake texture → Three.js scene → UI. */
import { T, TNAME, type MapMode, type World } from './types';
import { loadFixedMap } from './world';
import { computeShade, buildBase, bakeMode, devColor } from './bake';
import { MapScene } from './scene3d';
import { loadMapObjects } from './objects3d';
import { buildLabels, drawLabels, type Labels } from './labels';

const BASE = import.meta.env.BASE_URL;
const $ = <T extends HTMLElement = HTMLElement>(id: string): T => document.getElementById(id) as T;
const frame = () => new Promise<void>((r) => requestAnimationFrame(() => r()));

const MODES: [MapMode, string][] = [
  ['political', 'Political'], ['province', 'Provinces'], ['terrain', 'Terrain'],
  ['elevation', 'Elevation'], ['culture', 'Culture'], ['faith', 'Faith'],
  ['development', 'Development'],
];

async function boot(): Promise<void> {
  const loading = $('loading');
  const setLoading = async (msg: string) => { loading.style.display = 'flex'; loading.textContent = msg; await frame(); await frame(); };

  // full-resolution province ids (8192x4096) for GPU-crisp borders; starts
  // downloading immediately and falls back to grid resolution if missing
  const idImagePromise = new Promise<HTMLImageElement | null>((res) => {
    const img = new Image();
    img.onload = () => res(img);
    img.onerror = () => res(null);
    img.src = BASE + 'map/prov8.png';
  });

  await setLoading('Loading the map…');
  const world: World = await loadFixedMap(1420, BASE);

  $('date').textContent = `${world.date} · Anno Aldermarki`;

  await setLoading('Shading the relief…');
  computeShade(world);

  await setLoading('Baking the map…');
  const base = buildBase(world);
  world.cloud = null; // large scratch field no longer needed

  const texCanvas = document.createElement('canvas');
  texCanvas.width = world.W; texCanvas.height = world.H;
  const texCtx = texCanvas.getContext('2d', { willReadFrequently: true })!;
  const texImage = texCtx.createImageData(world.W, world.H);
  let currentMode: MapMode = 'political';
  let cpuElevation = false;
  bakeMode(world, base, currentMode, texImage);
  texCtx.putImageData(texImage, 0, 0);

  await setLoading('Raising the terrain…');
  const idImage = await idImagePromise;
  const scene = new MapScene(world, texCanvas, document.body, idImage, base.snow);
  const gl = scene.renderer.domElement;
  scene.setPaperTextures(BASE + 'map/ui/paper_land.png', BASE + 'map/ui/paper_sea.png');

  // the game's screen-edge fog vignette, blended over the map but under the UI
  {
    const vig = document.createElement('img');
    vig.src = BASE + 'map/ui/vignette.png';
    vig.id = 'vig';
    vig.alt = '';
    document.body.appendChild(vig);
  }

  // ---- map modes: the political/culture/faith/development washes live in a
  // per-province GPU LUT; only elevation needs a CPU rebake of the texture
  const rawDev = new Uint8Array(65536).fill(40);
  for (let p = 0; p < world.np; p++) rawDev[world.rawOf[p]] = world.devOf[p];
  const washLut = new Uint8Array(256 * 256 * 4);
  function applyMode(mode: MapMode): void {
    washLut.fill(0);
    const { rawCounty, rawCult, rawFaith, rawLand, cDuchy, dKing, kEmp, kColor, cultCol, faithCol } = world;
    void kEmp;
    const ds = 0.16;
    const put = (rid: number, col: [number, number, number] | number[], a: number) => {
      const lum = col[0] * 0.3 + col[1] * 0.59 + col[2] * 0.11;
      const o = rid * 4;
      washLut[o] = col[0] + (lum - col[0]) * ds;
      washLut[o + 1] = col[1] + (lum - col[1]) * ds;
      washLut[o + 2] = col[2] + (lum - col[2]) * ds;
      washLut[o + 3] = (a * 255) | 0;
    };
    if (mode !== 'terrain' && mode !== 'elevation') {
      for (let rid = 0; rid < 65536; rid++) {
        if (!rawLand[rid]) continue;
        if (mode === 'political') {
          const c = rawCounty[rid], d = c >= 0 ? cDuchy[c] : -1, k = d >= 0 ? dKing[d] : -1;
          if (k >= 0) put(rid, kColor[k], 0.52);
        } else if (mode === 'province') {
          const cc = (rid * 2654435761) >>> 0;
          put(rid, [70 + (cc & 159), 70 + ((cc >> 8) & 159), 70 + ((cc >> 16) & 159)], 0.7);
        } else if (mode === 'culture') {
          const c = rawCult[rid]; if (c >= 0) put(rid, cultCol[c], 0.5);
        } else if (mode === 'faith') {
          const f = rawFaith[rid]; if (f >= 0) put(rid, faithCol[f], 0.5);
        } else if (mode === 'development') {
          put(rid, devColor(rawDev[rid]), 0.56);
        }
      }
    }
    const noBorders = mode === 'terrain' || mode === 'elevation';
    scene.setWash(washLut, noBorders ? 0 : mode === 'province' ? 0.42 : 0.1,
      mode === 'political' || mode === 'culture' || mode === 'faith' || mode === 'development');
    const wantElev = mode === 'elevation';
    if (wantElev !== cpuElevation) {
      cpuElevation = wantElev;
      bakeMode(world, base, mode, texImage);
      texCtx.putImageData(texImage, 0, 0);
      scene.texture.needsUpdate = true;
    }
    scene.invalidate();
  }
  applyMode(currentMode);

  // the mod's own tree/settlement/landmark models (non-fatal if absent)
  let objects: import('three').Group | null = null;
  loadMapObjects(BASE, scene)
    .then((g) => { objects = g; const b = $('objs'); if (b) b.className = 'on'; })
    .catch((err) => console.warn('map objects unavailable:', err));

  // ---- labels overlay ----
  const labelCanvas = $('labels') as unknown as HTMLCanvasElement;
  const lctx = labelCanvas.getContext('2d')!;
  const labels: Labels = buildLabels(world);
  let labelsDirty = true;
  const DPR = Math.min(2, window.devicePixelRatio || 1);
  const sizeLabelCanvas = () => {
    labelCanvas.width = window.innerWidth * DPR;
    labelCanvas.height = window.innerHeight * DPR;
    labelCanvas.style.width = window.innerWidth + 'px';
    labelCanvas.style.height = window.innerHeight + 'px';
    lctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    labelsDirty = true;
  };
  sizeLabelCanvas();
  window.addEventListener('resize', sizeLabelCanvas);
  scene.onCameraChange = () => { labelsDirty = true; };

  // ---- selection: CK3-style province viewer ----
  const HOLDING_NAME = ['No Holding', 'Castle', 'City', 'Temple', 'Tribe'];
  /** Panel artwork per province: holding art when settled, otherwise terrain
   *  paintings — each pool extended by the classified scenic art collection
   *  in gfx/, varied deterministically by province id. */
  const pool = (base: string[], ...buckets: string[]): string[] => {
    const out = base.map((n) => n + '.png');
    for (const b of buckets) {
      const files = world.artPools[b];
      if (files) out.push(...files);
    }
    return out;
  };
  const ART = {
    castle: pool(['holding_1', 'art_fortress'], 'castle'),
    city: pool(['art_city1', 'art_city2'], 'city'),
    port: pool(['art_port'], 'port'),
    temple: pool(['holding_3'], 'temple'),
    tribal: pool(['art_tribal'], 'tribal'),
    terr: {
      [T.BEACH]: pool(['terr_beach', 'art_coast'], 'coast', 'port'),
      [T.PLAINS]: pool(['terr_plains'], 'plains'),
      [T.FARM]: pool(['terr_farm', 'art_farm'], 'farm'),
      [T.FOREST]: pool(['terr_forest'], 'forest', 'jungle'),
      [T.HILLS]: pool(['terr_hills'], 'mountain'),
      [T.DRY]: pool(['terr_desert', 'art_desert', 'art_ruin', 'art_river'], 'desert', 'ruin', 'river'),
      [T.WET]: pool(['terr_wet', 'art_swamp', 'art_lakes'], 'swamp'),
      [T.MTN]: pool(['terr_mtn'], 'mountain'),
      [T.SNOW]: pool(['terr_mtn'], 'snow', 'mountain'),
    } as Record<number, string[]>,
  };
  function artFor(p: number): string {
    const h = world.holdingOf[p], t = world.pTerr[p], c = world.countyOf[p];
    const pick = (arr: string[]) => arr[p % arr.length];
    if (c >= 0) {
      if (h === 1) return pick(ART.castle);
      if (h === 2) return t === T.BEACH ? pick(ART.port) : pick(ART.city);
      if (h === 3) return pick(ART.temple);
      if (h === 4) return pick(ART.tribal);
    }
    const arr = ART.terr[t];
    return arr ? pick(arr) : 'holding_0.png';
  }
  const swatch = (col: [number, number, number] | number[]) =>
    `<span class="swatch" style="background:rgb(${col[0]},${col[1]},${col[2]})"></span>`;
  let selProv = -1;
  function selectProvince(p: number): void {
    selProv = p;
    scene.setSelected(p < 0 ? -1 : world.rawOf[p]);
    const sel = $('sel');
    if (p < 0) { sel.style.display = 'none'; return; }
    $('faith').classList.remove('open'); // the faith viewer yields to a new pick
    const c = world.countyOf[p], d = world.duchyOf[p], k = world.kingOf[p], e = world.empOf[p];
    const cu = world.cultureOf[p], f = world.faithOf[p], h = world.holdingOf[p];

    $('selName').textContent = world.provName[p];
    let subt = c >= 0
      ? `${HOLDING_NAME[h]} in the County of ${world.countyName[c]}`
      : 'Uncolonised wasteland';
    if (c >= 0 && e >= 0 && world.eCapital[e] === c) subt += ' · Imperial Capital';
    else if (c >= 0 && k >= 0 && world.kCapital[k] === c) subt += ' · Royal Capital';
    $('selSub').textContent = subt;

    // de jure chips: duchy / kingdom / empire, shield in the realm colour
    const chips: string[] = [];
    const coa = (kind: string, i: number) =>
      `<img class="coa" src="${BASE}map/ui/coa/${kind}_${i}.png" alt="" onerror="this.remove()">`;
    if (d >= 0) chips.push(`<span class="chip" style="--cc:#8a7f66">${world.duchyName[d]}</span>`);
    if (k >= 0) chips.push(`<span class="chip flagged rlink" data-realm="k:${k}" title="About this realm">${coa('k', k)}${world.kingName[k]}</span>`);
    if (e >= 0) chips.push(`<span class="chip flagged rlink" data-realm="e:${e}" title="About this realm">${coa('e', e)}${world.empName[e]}</span>`);
    $('selChips').innerHTML = chips.join('');
    $('selChips').querySelectorAll<HTMLElement>('.rlink').forEach((a) => {
      a.onclick = () => {
        const [kind, i] = a.dataset.realm!.split(':');
        showRealm(kind as 'k' | 'e', +i);
      };
    });

    // the mod marks uncolonised land with literal "Wasteland" placeholders
    const isWl = (s: string | null | undefined) => !s || /^wasteland/i.test(s);
    const fIcon = f >= 0 && world.faithHasIcon[f]
      ? `<img class="fic" src="${BASE}map/ui/faith_${f}.png" alt="">`
      : (f >= 0 ? swatch(world.faithCol[f]) : '');
    $('selBody').innerHTML =
      `<div class="k">Terrain</div><div>${TNAME[world.pTerr[p]]}</div>` +
      (cu >= 0 && !isWl(world.cultName[cu])
        ? `<div class="k">Culture</div><div>${swatch(world.cultCol[cu])}<a class="flink" data-culture="${cu}" title="About this culture">${world.cultName[cu]}</a></div>` : '') +
      (f >= 0 && !isWl(world.faithName[f])
        ? `<div class="k">Faith</div><div>${fIcon}<a class="flink" data-faith="${f}" title="About this faith">${world.faithName[f]}</a></div>` : '') +
      `<div class="k">Development</div><div>${world.devOf[p]}</div>`;
    $('selBody').querySelectorAll<HTMLElement>('a.flink').forEach((fl) => {
      fl.onclick = (ev) => {
        ev.preventDefault();
        if (fl.dataset.faith) showFaith(+fl.dataset.faith);
        else if (fl.dataset.culture) showCulture(+fl.dataset.culture);
      };
    });

    // real title holders at the bookmark date (names open a character card)
    const hlink = (key: string | null, label: string | null): string =>
      key && label ? `<a class="flink" data-char="${key}" title="About this ruler">${label}</a>` : (label ?? '');
    const rows: string[] = [];
    if (c >= 0) {
      const ch = world.countyHolder[c];
      rows.push(`<div><span class="k">County Holder:</span> <b>${isWl(ch) ? 'uncolonised' : hlink(world.countyHolderKey[c], ch)}</b></div>`);
    }
    if (k >= 0 && world.kingHolder[k]) {
      rows.push(`<div><span class="k">${world.kingName[k]}:</span> <b>${hlink(world.kingHolderKey[k], world.kingHolder[k])}</b></div>`);
    }
    if (e >= 0 && world.empHolder[e]) {
      rows.push(`<div><span class="k">${world.empName[e]}:</span> <b>${hlink(world.empHolderKey[e], world.empHolder[e])}</b></div>`);
    }
    $('selHolders').innerHTML = rows.join('');
    $('selHolders').style.display = rows.length ? 'block' : 'none';
    $('selHolders').querySelectorAll<HTMLElement>('a[data-char]').forEach((a) => {
      a.onclick = (ev) => { ev.preventDefault(); showChar(a.dataset.char!); };
    });

    // sibling baronies of the same county
    if (c >= 0) {
      const sib: string[] = [];
      for (let q = 0; q < world.np && sib.length < 40; q++) {
        if (world.countyOf[q] === c) {
          sib.push(q === p
            ? `<b>${world.provName[q]}</b>`
            : `${world.provName[q]}${world.holdingOf[q] ? ` (${HOLDING_NAME[world.holdingOf[q]].toLowerCase()})` : ''}`);
        }
      }
      $('selBars').innerHTML = `<span class="k">Baronies:</span> ` + sib.join(' · ');
      $('selBars').style.display = 'block';
    } else $('selBars').style.display = 'none';

    // province artwork: scenic paintings & terrain illustrations from gfx/
    const illu = $('selIllu') as HTMLImageElement;
    illu.src = `${BASE}map/ui/${artFor(p)}`;
    illu.style.display = 'block';
    illu.onerror = () => { illu.style.display = 'none'; };

    sel.style.display = 'block';
  }

  // ---- detail viewer: faiths, cultures, rulers & realms from the mod ----
  let detailMode: MapMode | null = null;
  function jumpToCounty(c: number): void {
    let best = -1, ba = 0;
    for (let q = 0; q < world.np; q++) {
      if (world.countyOf[q] === c && world.pArea[q] > ba) { ba = world.pArea[q]; best = q; }
    }
    if (best < 0) return;
    scene.cam.tx = world.pCX[best] - world.W / 2;
    scene.cam.tz = world.pCY[best] - world.H / 2;
    scene.cam.dist = Math.min(scene.cam.dist, 320);
    scene.clampCamera(); scene.applyCamera();
    selectProvince(best);
  }
  /** Fill and open the shared detail panel; wires body links afterwards. */
  function openDetail(titleHtml: string, sub: string, bodyHtml: string, mode: MapMode | null): void {
    $('sel').style.display = 'none';
    detailMode = mode;
    $('faithName').innerHTML = titleHtml;
    $('faithSub').textContent = sub;
    $('faithBody').innerHTML = bodyHtml;
    $('faithMode').style.display = mode ? '' : 'none';
    $('faith').classList.add('open');
    $('faithBody').querySelectorAll<HTMLElement>('a[data-county]').forEach((a) => {
      a.onclick = (ev) => { ev.preventDefault(); jumpToCounty(+a.dataset.county!); };
    });
    $('faithBody').querySelectorAll<HTMLElement>('a[data-char]').forEach((a) => {
      a.onclick = (ev) => { ev.preventDefault(); showChar(a.dataset.char!); };
    });
    $('faithBody').querySelectorAll<HTMLElement>('a[data-culture]').forEach((a) => {
      a.onclick = (ev) => { ev.preventDefault(); showCulture(+a.dataset.culture!); };
    });
    $('faithBody').querySelectorAll<HTMLElement>('a[data-realm]').forEach((a) => {
      a.onclick = (ev) => {
        ev.preventDefault();
        const [kind, i] = a.dataset.realm!.split(':');
        showRealm(kind as 'k' | 'e', +i);
      };
    });
  }
  const charLink = (key: string | null, label: string | null): string =>
    key && label ? `<a class="hsite" data-char="${key}">${label}</a>` : (label ?? 'vacant');

  function showFaith(f: number): void {
    const icon = world.faithHasIcon[f]
      ? `<img class="fic" src="${BASE}map/ui/faith_${f}.png" alt="">` : swatch(world.faithCol[f]);
    let provs = 0;
    for (let q = 0; q < world.np; q++) if (world.faithOf[q] === f) provs++;
    const bits = [world.faithRelig[f], world.faithAdh[f] ? `followers: ${world.faithAdh[f]}s` : null,
      `${provs} provinces`].filter(Boolean);
    let html = '';
    if (world.faithDesc[f]) html += `<div class="desc">${world.faithDesc[f]}</div>`;
    if (world.faithTenets[f].length) {
      html += `<div class="sect"><span class="k">Tenets:</span> <b>${world.faithTenets[f].join('</b> · <b>')}</b></div>`;
    }
    if (world.faithSites[f].length) {
      html += `<div class="sect"><span class="k">Holy sites:</span> ` +
        world.faithSites[f].map((s) => `<a class="hsite" data-county="${s.c}">${s.n}</a>`).join(' · ') + `</div>`;
    }
    openDetail(`${icon}${world.faithName[f]}`, bits.join(' · '), html, 'faith');
  }

  function showCulture(cu: number): void {
    let provs = 0;
    for (let q = 0; q < world.np; q++) if (world.cultureOf[q] === cu) provs++;
    const bits = [world.cultHeritage[cu] ? `${world.cultHeritage[cu]} heritage` : null,
      world.cultLang[cu] ? `speaks ${world.cultLang[cu]}` : null, `${provs} provinces`].filter(Boolean);
    let html = '<div class="grid" style="display:grid;grid-template-columns:auto 1fr;gap:4px 12px;font-size:13px">';
    if (world.cultEthos[cu]) html += `<div class="k">Ethos</div><div><b>${world.cultEthos[cu]}</b></div>`;
    if (world.cultMartial[cu]) html += `<div class="k">Warriors</div><div>${world.cultMartial[cu]}</div>`;
    html += '</div>';
    if (world.cultTrad[cu].length) {
      html += `<div class="sect"><span class="k">Traditions:</span> <b>${world.cultTrad[cu].join('</b> · <b>')}</b></div>`;
    }
    openDetail(`${swatch(world.cultCol[cu])}${world.cultName[cu]}`, bits.join(' · '), html, 'culture');
  }

  function showChar(key: string): void {
    const ch = world.chars[key];
    if (!ch) return;
    const SKILLS = ['Diplomacy', 'Martial', 'Stewardship', 'Intrigue', 'Learning'];
    const life = ch.b ? `born ${ch.b}${ch.dd ? `, died ${ch.dd}` : ''} · year is ${world.date}` : '';
    let html = '';
    if (ch.mo) html += `<div class="desc" style="font-style:italic">“${ch.mo}”</div>`;
    const sk = ch.sk.map((v, i) => (v == null ? null : `<div class="k">${SKILLS[i]}</div><div><b>${v}</b></div>`))
      .filter(Boolean).join('');
    if (sk) html += `<div class="grid" style="display:grid;grid-template-columns:auto 1fr;gap:3px 12px;font-size:13px;margin-top:6px">${sk}</div>`;
    if (ch.tr.length) {
      const chips = ch.tr.map((t, i) => {
        const ic = ch.ti?.[i] ?? -1;
        const img = ic >= 0 ? `<img class="tric" src="map/ui/tr_${ic}.png" alt="">` : '';
        return `<span class="trchip">${img}<b>${t}</b></span>`;
      }).join(' ');
      html += `<div class="sect"><span class="k">Traits:</span> ${chips}</div>`;
    }
    const title = ch.dy ? `${ch.n} of House ${ch.dy}` : ch.n;
    openDetail(title, life, html, null);
  }

  function showRealm(kind: 'k' | 'e', i: number): void {
    const coa = `<img class="fic" src="${BASE}map/ui/coa/${kind}_${i}.png" alt="" onerror="this.remove()">`;
    let provs = 0;
    const of = kind === 'k' ? world.kingOf : world.empOf;
    for (let q = 0; q < world.np; q++) if (of[q] === i) provs++;
    let html = '';
    if (kind === 'k') {
      const e = world.kEmp[i];
      const bits = [e >= 0 ? `part of ${world.empName[e]}` : 'independent', `${provs} provinces`];
      html += `<div class="sect" style="padding-top:0"><span class="k">Ruler:</span> <b>${charLink(world.kingHolderKey[i], world.kingHolder[i])}</b></div>`;
      if (world.kCapital[i] >= 0) {
        html += `<div class="sect"><span class="k">Capital:</span> <a class="hsite" data-county="${world.kCapital[i]}">${world.countyName[world.kCapital[i]]}</a></div>`;
      }
      const duchies: number[] = [];
      for (let d = 0; d < world.nDuchy; d++) if (world.dKing[d] === i) duchies.push(d);
      if (duchies.length) {
        html += `<div class="sect"><span class="k">De jure duchies:</span> ` +
          duchies.map((d) => `<b>${world.duchyName[d]}</b>`).join(' · ') + `</div>`;
      }
      openDetail(`${coa}${world.kingName[i]}`, bits.join(' · '), html, 'political');
    } else {
      const bits = [`${provs} provinces`];
      html += `<div class="sect" style="padding-top:0"><span class="k">Ruler:</span> <b>${charLink(world.empHolderKey[i], world.empHolder[i])}</b></div>`;
      if (world.eCapital[i] >= 0) {
        html += `<div class="sect"><span class="k">Capital:</span> <a class="hsite" data-county="${world.eCapital[i]}">${world.countyName[world.eCapital[i]]}</a></div>`;
      }
      const kings: number[] = [];
      for (let k = 0; k < world.nKing; k++) if (world.kEmp[k] === i) kings.push(k);
      if (kings.length) {
        html += `<div class="sect"><span class="k">De jure kingdoms:</span> ` +
          kings.map((k) => `<a class="hsite" data-realm="k:${k}">${world.kingName[k]}</a>`).join(' · ') + `</div>`;
      }
      openDetail(`${coa}${world.empName[i]}`, bits.join(' · '), html, 'political');
    }
  }

  $('faithClose').onclick = () => {
    $('faith').classList.remove('open');
    if (selProv >= 0) $('sel').style.display = 'block';
  };
  $('faithMode').onclick = () => {
    if (!detailMode) return;
    currentMode = detailMode;
    [...$('modes').children].forEach((x) => {
      (x as HTMLElement).className = (x as HTMLElement).dataset.mode === detailMode ? 'on' : '';
    });
    applyMode(detailMode);
  };

  const provAt = (clientX: number, clientY: number): number => {
    const g = scene.pickGround(clientX, clientY);
    if (!g) return -1;
    return world.prov[(g.gy | 0) * world.W + (g.gx | 0)];
  };

  // ---- pointer controls ----
  let dragging = false, rotating = false, dragMoved = false;
  let hoverProv = -1;
  let grab: { x: number; z: number } | null = null;
  let last: [number, number] = [0, 0], downAt: [number, number] = [0, 0];
  const tip = $('tip');
  const setHover = (p: number) => {
    if (p === hoverProv) return;
    hoverProv = p;
    scene.setHover(p < 0 ? -1 : world.rawOf[p]);
  };
  gl.addEventListener('contextmenu', (e) => e.preventDefault());
  gl.addEventListener('pointerdown', (e) => {
    dragMoved = false; downAt = [e.clientX, e.clientY]; last = [e.clientX, e.clientY];
    if (e.button === 2 || e.button === 1) { rotating = true; }
    else {
      dragging = true;
      const hit = scene.pickPlane(e.clientX, e.clientY);
      grab = hit ? { x: hit.x, z: hit.z } : null;
    }
    gl.classList.add('drag');
    gl.setPointerCapture(e.pointerId);
  });
  gl.addEventListener('pointermove', (e) => {
    if (Math.abs(e.clientX - downAt[0]) + Math.abs(e.clientY - downAt[1]) > 4) dragMoved = true;
    if (dragging && grab) {
      const hit = scene.pickPlane(e.clientX, e.clientY);
      if (hit) {
        scene.cam.tx += grab.x - hit.x;
        scene.cam.tz += grab.z - hit.z;
        scene.clampCamera(); scene.applyCamera();
      }
    } else if (rotating) {
      scene.cam.yaw -= (e.clientX - last[0]) * 0.004;
      scene.cam.pitch += (e.clientY - last[1]) * 0.003;
      scene.clampCamera(); scene.applyCamera();
    } else {
      const p = provAt(e.clientX, e.clientY);
      setHover(p); // province lights up under the cursor
      if (p >= 0) {
        const c = world.countyOf[p], k = world.kingOf[p], emp = world.empOf[p];
        const h = world.holdingOf[p];
        const head = h ? `<b>${world.provName[p]}</b> · ${HOLDING_NAME[h]}` : `<b>${world.provName[p]}</b>`;
        const line2 = c >= 0 ? `${TNAME[world.pTerr[p]]} · County of ${world.countyName[c]}` : TNAME[world.pTerr[p]];
        const holder = c >= 0 && world.countyHolder[c]
          ? `<br><span style="color:#b6a988">Holder:</span> ${world.countyHolder[c]}` : '';
        const line3 = k >= 0
          ? `${world.kingName[k]} · <span style="color:#b6a988">${emp >= 0 ? world.empName[emp] : ''}</span>`
          : '<span style="color:#b6a988">Wasteland</span>';
        tip.innerHTML = `${head}<br>${line2}${holder}<br>${line3}`;
        tip.style.display = 'block';
        let tx = e.clientX + 16, ty = e.clientY + 16;
        const r = tip.getBoundingClientRect();
        if (tx + r.width > window.innerWidth - 8) tx = e.clientX - r.width - 16;
        if (ty + r.height > window.innerHeight - 8) ty = e.clientY - r.height - 16;
        tip.style.left = tx + 'px'; tip.style.top = ty + 'px';
      } else tip.style.display = 'none';
    }
    last = [e.clientX, e.clientY];
  });
  const endDrag = (e: PointerEvent) => {
    const wasClick = (dragging || rotating) && !dragMoved && e.button !== 2 && e.button !== 1;
    dragging = false; rotating = false; grab = null;
    gl.classList.remove('drag');
    if (wasClick) selectProvince(provAt(e.clientX, e.clientY));
  };
  gl.addEventListener('pointerup', endDrag);
  gl.addEventListener('pointerleave', () => { tip.style.display = 'none'; setHover(-1); });
  gl.addEventListener('wheel', (e) => {
    e.preventDefault();
    // dolly toward the cursor's point on the map (like the 2D version / CK3)
    const anchor = scene.pickPlane(e.clientX, e.clientY);
    const oldDist = scene.cam.dist;
    scene.cam.dist *= Math.exp(e.deltaY * 0.0011);
    scene.clampCamera();
    if (anchor) {
      const k = 1 - scene.cam.dist / oldDist;
      scene.cam.tx += (anchor.x - scene.cam.tx) * k;
      scene.cam.tz += (anchor.z - scene.cam.tz) * k;
      scene.clampCamera();
    }
    scene.applyCamera();
  }, { passive: false });

  // ---- search: every named thing in the world, one box ----
  {
    const input = $('search') as HTMLInputElement;
    const results = $('results');
    const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
    interface Hit { name: string; type: string; go: () => void }
    const index: { key: string; name: string; type: string; go: () => void }[] = [];
    const jumpTo = (gx: number, gy: number, dist = 320) => {
      scene.cam.tx = gx - world.W / 2; scene.cam.tz = gy - world.H / 2;
      scene.cam.dist = Math.min(scene.cam.dist, dist);
      scene.clampCamera(); scene.applyCamera();
    };
    const biggestOf = (arr: Int32Array, i: number): number => {
      let best = -1, ba = 0;
      for (let q = 0; q < world.np; q++) {
        if (arr[q] === i && world.pArea[q] > ba) { ba = world.pArea[q]; best = q; }
      }
      return best;
    };
    const centroidJump = (arr: Int32Array, i: number, dist: number) => {
      let sx = 0, sy = 0, n = 0;
      for (let q = 0; q < world.np; q++) {
        if (arr[q] === i) { sx += world.pCX[q] * world.pArea[q]; sy += world.pCY[q] * world.pArea[q]; n += world.pArea[q]; }
      }
      if (n) jumpTo(sx / n, sy / n, dist);
    };
    for (let p = 0; p < world.np; p++) {
      index.push({ key: norm(world.provName[p]), name: world.provName[p], type: 'Province',
        go: () => { jumpTo(world.pCX[p], world.pCY[p], 260); selectProvince(p); } });
    }
    world.countyName.forEach((n, c) => index.push({ key: norm(n), name: n, type: 'County',
      go: () => { const b = biggestOf(world.countyOf, c); if (b >= 0) { jumpTo(world.pCX[b], world.pCY[b], 300); selectProvince(b); } } }));
    world.duchyName.forEach((n, d) => index.push({ key: norm(n), name: n, type: 'Duchy',
      go: () => centroidJump(world.duchyOf, d, 420) }));
    world.kingName.forEach((n, k) => index.push({ key: norm(n), name: n, type: 'Kingdom',
      go: () => { centroidJump(world.kingOf, k, 700); showRealm('k', k); } }));
    world.empName.forEach((n, e) => index.push({ key: norm(n), name: n, type: 'Empire',
      go: () => { centroidJump(world.empOf, e, 1100); showRealm('e', e); } }));
    world.cultName.forEach((n, cu) => { if (!/^wasteland/i.test(n)) index.push({ key: norm(n), name: n, type: 'Culture', go: () => showCulture(cu) }); });
    world.faithName.forEach((n, f) => { if (!/^wasteland/i.test(n)) index.push({ key: norm(n), name: n, type: 'Faith', go: () => showFaith(f) }); });
    world.seaLabels.forEach((s) => index.push({ key: norm(s.n), name: s.n, type: 'Sea',
      go: () => jumpTo(s.x, s.y, 900) }));

    let hits: Hit[] = [], hot = -1;
    const render = () => {
      results.innerHTML = hits.map((h, i) =>
        `<div class="res${i === hot ? ' hot' : ''}" data-i="${i}"><span>${h.name}</span><span class="t">${h.type}</span></div>`).join('');
      results.style.display = hits.length ? 'block' : 'none';
      results.querySelectorAll<HTMLElement>('.res').forEach((el) => {
        el.onmousedown = (ev) => { ev.preventDefault(); pick(+el.dataset.i!); };
      });
    };
    const pick = (i: number) => {
      const h = hits[i];
      if (!h) return;
      input.value = h.name; hits = []; hot = -1; render(); input.blur();
      h.go();
    };
    input.oninput = () => {
      const q = norm(input.value.trim());
      hot = -1;
      if (q.length < 2) { hits = []; render(); return; }
      const starts: Hit[] = [], within: Hit[] = [];
      for (const e of index) {
        if (e.key.startsWith(q)) starts.push(e);
        else if (e.key.includes(q)) within.push(e);
        if (starts.length >= 12) break;
      }
      hits = [...starts, ...within].slice(0, 12);
      render();
    };
    input.onkeydown = (e) => {
      if (e.key === 'ArrowDown') { hot = Math.min(hits.length - 1, hot + 1); render(); e.preventDefault(); }
      else if (e.key === 'ArrowUp') { hot = Math.max(0, hot - 1); render(); e.preventDefault(); }
      else if (e.key === 'Enter') { pick(hot >= 0 ? hot : 0); e.preventDefault(); }
      else if (e.key === 'Escape') { hits = []; render(); input.blur(); }
      e.stopPropagation();
    };
    input.onblur = () => setTimeout(() => { hits = []; render(); }, 150);
  }

  // keyboard pan (disabled while typing in the search box)
  const typing = () => document.activeElement instanceof HTMLInputElement
    && document.activeElement.type === 'text';
  const keys: Record<string, boolean> = {};
  window.addEventListener('keydown', (e) => { if (!typing()) keys[e.key.toLowerCase()] = true; });
  window.addEventListener('keyup', (e) => { keys[e.key.toLowerCase()] = false; });
  setInterval(() => {
    const m = scene.cam.dist * 0.02;
    let moved = false;
    if (keys['w'] || keys['arrowup']) { scene.cam.tz -= m; moved = true; }
    if (keys['s'] || keys['arrowdown']) { scene.cam.tz += m; moved = true; }
    if (keys['a'] || keys['arrowleft']) { scene.cam.tx -= m; moved = true; }
    if (keys['d'] || keys['arrowright']) { scene.cam.tx += m; moved = true; }
    if (moved) { scene.clampCamera(); scene.applyCamera(); }
  }, 16);

  // ---- HUD ----
  const modesEl = $('modes');
  for (const [id, lbl] of MODES) {
    const b = document.createElement('button');
    b.textContent = lbl; b.dataset.mode = id;
    if (id === currentMode) b.className = 'on';
    b.onclick = () => {
      currentMode = id;
      [...modesEl.children].forEach((x) => { (x as HTMLElement).className = (x as HTMLElement).dataset.mode === id ? 'on' : ''; });
      applyMode(id);
    };
    modesEl.appendChild(b);
  }
  const tilt = $('tilt') as HTMLInputElement;
  tilt.oninput = () => {
    $('tiltv').textContent = tilt.value;
    scene.cam.pitch = (24 + (+tilt.value / 100) * 56) * Math.PI / 180;
    scene.clampCamera(); scene.applyCamera();
  };
  $('reset').onclick = () => {
    scene.cam.tx = world.landCX - world.W / 2;
    scene.cam.tz = world.landCY - world.H / 2;
    scene.cam.dist = scene.fitDist * 0.72;
    scene.cam.yaw = 0;
    scene.clampCamera(); scene.applyCamera();
  };
  $('zin').onclick = () => { scene.cam.dist /= 1.3; scene.clampCamera(); scene.applyCamera(); };
  $('zout').onclick = () => { scene.cam.dist *= 1.3; scene.clampCamera(); scene.applyCamera(); };
  $('clearSel').onclick = () => selectProvince(-1);
  $('center').onclick = () => {
    if (selProv < 0) return;
    scene.cam.tx = world.pCX[selProv] - world.W / 2;
    scene.cam.tz = world.pCY[selProv] - world.H / 2;
    scene.cam.dist = Math.min(scene.cam.dist, 420);
    scene.clampCamera(); scene.applyCamera();
  };
  let objectsOn = true;
  $('objs').onclick = () => {
    if (!objects) return;
    objectsOn = !objectsOn;
    $('objs').className = objectsOn ? 'on' : '';
    scene.invalidate();
  };
  $('hideui').onclick = () => {
    document.querySelectorAll<HTMLElement>('.panel').forEach((p) => { if (p.id !== 'hideui') p.classList.toggle('hidden'); });
    const h = $('hideui');
    h.textContent = h.textContent === 'Hide UI' ? 'Show UI' : 'Hide UI';
    labelsDirty = true;
  };
  ($('dl') as HTMLAnchorElement).onclick = () => {
    scene.render();
    const out = document.createElement('canvas');
    out.width = gl.width; out.height = gl.height;
    const octx = out.getContext('2d')!;
    octx.drawImage(gl, 0, 0);
    octx.drawImage(labelCanvas, 0, 0, out.width, out.height);
    ($('dl') as HTMLAnchorElement).href = out.toDataURL('image/png');
  };
  ($('dljson') as HTMLAnchorElement).onclick = () => {
    const provs = [];
    for (let p = 0; p < world.np; p++) {
      const c = world.countyOf[p], d = world.duchyOf[p], k = world.kingOf[p], e = world.empOf[p];
      const cu = world.cultureOf[p], f = world.faithOf[p];
      provs.push({
        id: p, name: world.provName[p], terrain: TNAME[world.pTerr[p]],
        county: c >= 0 ? world.countyName[c] : null,
        duchy: d >= 0 ? world.duchyName[d] : null,
        kingdom: k >= 0 ? world.kingName[k] : null,
        empire: e >= 0 ? world.empName[e] : null,
        culture: cu >= 0 ? world.cultName[cu] : null,
        faith: f >= 0 ? world.faithName[f] : null,
        holding: HOLDING_NAME[world.holdingOf[p]],
        holder: c >= 0 ? world.countyHolder[c] : null,
        development: world.devOf[p],
        neighbours: [...world.padj[p]],
      });
    }
    const data = {
      provinces: world.np, counties: world.nCounty, duchies: world.nDuchy,
      kingdoms: world.nKing, empires: world.nEmp, realms: provs,
    };
    ($('dljson') as HTMLAnchorElement).href =
      URL.createObjectURL(new Blob([JSON.stringify(data)], { type: 'application/json' }));
  };

  // ---- render loop ----
  const loop = () => {
    // like the game's flat map: at empire zoom the 3-D objects are sub-pixel,
    // so skip drawing all ~80k of them and let the paper map carry the view
    if (objects) {
      const show = objectsOn && scene.cam.dist < scene.fitDist * 0.55;
      if (objects.visible !== show) { objects.visible = show; scene.invalidate(); }
    }
    scene.render();
    if (labelsDirty) { labelsDirty = false; drawLabels(lctx, labels, scene, BASE + 'map/ui/coa/', () => { labelsDirty = true; }); }
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
  loading.style.display = 'none';

  // debug/verification hook
  const pos = scene.terrain.geometry.attributes.position;
  let zMin = 1e9, zMax = -1e9;
  for (let i = 0; i < pos.count; i++) { const y = pos.getY(i); if (y < zMin) zMin = y; if (y > zMax) zMax = y; }
  (window as unknown as Record<string, unknown>).__APP = {
    scene, world, selectProvince, showFaith, showCulture, showChar, showRealm,
    info: {
      webgl2: scene.renderer.getContext() instanceof WebGL2RenderingContext,
      rendererType: 'WebGLRenderer',
      isPerspectiveCamera: scene.camera.isPerspectiveCamera === true,
      geometryType: scene.terrain.geometry.type,
      terrainMinY: zMin, terrainMaxY: zMax,
      provinces: world.np, kingdoms: world.nKing, empires: world.nEmp,
    },
  };
  console.log('3D map ready:', JSON.stringify((window as unknown as { __APP: { info: unknown } }).__APP.info));
}

boot().catch((err) => {
  console.error('boot failed', err);
  const loading = document.getElementById('loading');
  if (loading) loading.textContent = 'Load error — see console';
});
