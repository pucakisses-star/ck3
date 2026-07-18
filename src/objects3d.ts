/** Instanced 3-D map objects: the mod's own tree/rock/settlement/landmark
 *  models (converted from Paradox .mesh by tools/build_map_objects.py),
 *  placed from the mod's density masks and building locators. */
import * as THREE from 'three';
import type { MapScene } from './scene3d';

interface Part {
  tex: string;
  lo: [number, number, number]; hi: [number, number, number];
  v: string; u: string; x: string; x32: boolean;
}
interface Model { parts: Part[]; scale: number; hgt: number }
interface ObjectsFile {
  models: Record<string, Model>;
  inst: Record<string, { n: number; d: string }>;
  spec: { k: string; x: number; y: number; r: number; s: number }[];
}

function b64bytes(s: string): Uint8Array {
  const bin = atob(s);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

/** Base scale for a model: hit a per-category height target, but never let
 *  wide, flat models (city tiles) sprawl past their footprint budget. */
function baseScaleFor(key: string, hgt: number, foot: number): number {
  let targetH = 2.6, maxFoot = 5; // trees
  if (key.startsWith('rock')) { targetH = 1.4; maxFoot = 3.8; }
  else if (/^b\d+_/.test(key)) {
    if (key.endsWith('castle')) { targetH = 4.4; maxFoot = 4; }
    else if (key.endsWith('temple')) { targetH = 3.9; maxFoot = 4.4; }
    else { targetH = 3.2; maxFoot = 5; } // city
  }
  return Math.min(targetH / Math.max(0.001, hgt), maxFoot / Math.max(0.001, foot));
}

function footprintOf(model: Model): number {
  let f = 0;
  for (const p of model.parts) {
    f = Math.max(f, p.hi[0] - p.lo[0], p.hi[2] - p.lo[2]);
  }
  return f;
}

export async function loadMapObjects(base: string, scene: MapScene): Promise<THREE.Group> {
  const res = await fetch(base + 'map/objects/models.json');
  if (!res.ok) throw new Error('models.json HTTP ' + res.status);
  const data = (await res.json()) as ObjectsFile;

  const group = new THREE.Group();
  const W = scene.W, H = scene.H;
  const texLoader = new THREE.TextureLoader();
  const texCache = new Map<string, THREE.Texture>();
  const loadTex = (name: string): THREE.Texture => {
    let t = texCache.get(name);
    if (!t) {
      t = texLoader.load(base + 'map/objects/' + name, () => scene.invalidate());
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = 4;
      texCache.set(name, t);
    }
    return t;
  };

  // models only receive light from these (terrain is unlit/baked)
  const hemi = new THREE.HemisphereLight(0xfff2dd, 0x8a8070, 1.9);
  const sun = new THREE.DirectionalLight(0xffeecc, 2.1);
  sun.position.set(-0.55, 1, -0.7); // matches the bake's NW relief light
  group.add(hemi, sun);

  const geoms = new Map<string, THREE.BufferGeometry[]>();
  const getGeoms = (key: string): THREE.BufferGeometry[] => {
    let gs = geoms.get(key);
    if (gs) return gs;
    gs = [];
    for (const p of data.models[key].parts) {
      const vq = new Uint16Array(b64bytes(p.v).buffer.slice(0));
      const uq = new Uint16Array(b64bytes(p.u).buffer.slice(0));
      const ib = b64bytes(p.x).buffer.slice(0);
      const nVerts = vq.length / 3;
      const pos = new Float32Array(vq.length);
      for (let a = 0; a < 3; a++) {
        const lo = p.lo[a], span = p.hi[a] - p.lo[a];
        for (let i = 0; i < nVerts; i++) pos[i * 3 + a] = lo + (vq[i * 3 + a] / 65535) * span;
      }
      const uv = new Float32Array(uq.length);
      for (let i = 0; i < uq.length; i++) uv[i] = uq[i] / 65535;
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
      g.setIndex(new THREE.BufferAttribute(
        p.x32 ? new Uint32Array(ib) : new Uint16Array(ib), 1));
      g.computeVertexNormals();
      gs.push(g);
    }
    geoms.set(key, gs);
    return gs;
  };
  const matCache = new Map<string, THREE.Material>();
  const getMat = (texName: string, foliage: boolean): THREE.Material => {
    const id = texName + (foliage ? '|f' : '');
    let m = matCache.get(id);
    if (!m) {
      m = new THREE.MeshLambertMaterial({
        map: loadTex(texName),
        alphaTest: foliage ? 0.45 : 0.6,
        side: foliage ? THREE.DoubleSide : THREE.FrontSide,
      });
      matCache.set(id, m);
    }
    return m;
  };

  const mtx = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const up = new THREE.Vector3(0, 1, 0);
  const v3 = new THREE.Vector3();
  const s3 = new THREE.Vector3();

  // ---- mass instances (trees, rocks, settlements) ----
  for (const [key, packed] of Object.entries(data.inst)) {
    const model = data.models[key];
    if (!model) continue;
    const bytes = b64bytes(packed.d);
    const n = packed.n;
    const foliage = !/^b\d+_/.test(key) && !key.startsWith('rock');
    const baseScale = baseScaleFor(key, model.hgt, footprintOf(model));
    const gs = getGeoms(key);
    const meshes = gs.map((g, gi) => {
      const im = new THREE.InstancedMesh(g, getMat(model.parts[gi].tex, foliage), n);
      im.frustumCulled = false;
      return im;
    });
    for (let i = 0; i < n; i++) {
      const o = i * 6;
      const gx = bytes[o] | (bytes[o + 1] << 8);
      const gy = bytes[o + 2] | (bytes[o + 3] << 8);
      const rot = (bytes[o + 4] / 255) * Math.PI * 2;
      const s = (0.25 + (bytes[o + 5] / 255) * 2.75) * baseScale;
      const elev = scene.elevAtGrid(gx, gy);
      q.setFromAxisAngle(up, rot);
      mtx.compose(v3.set(gx - W / 2, elev, gy - H / 2), q, s3.set(s, s, s));
      for (const im of meshes) im.setMatrixAt(i, mtx);
    }
    for (const im of meshes) {
      im.instanceMatrix.needsUpdate = true;
      group.add(im);
    }
  }

  // ---- unique landmarks ----
  const byKey = new Map<string, { x: number; y: number; r: number; s: number }[]>();
  for (const sp of data.spec) {
    if (!data.models[sp.k]) continue;
    (byKey.get(sp.k) ?? byKey.set(sp.k, []).get(sp.k)!).push(sp);
  }
  for (const [key, list] of byKey) {
    const model = data.models[key];
    const gs = getGeoms(key);
    const foot = footprintOf(model);
    // landmarks keep authored proportions within visibility floor/ceiling
    const sMin = 4 / Math.max(0.001, model.hgt);
    const sMax = Math.min(17 / Math.max(0.001, model.hgt), 22 / Math.max(0.001, foot));
    const meshes = gs.map((g, gi) => {
      const im = new THREE.InstancedMesh(g, getMat(model.parts[gi].tex, false), list.length);
      im.frustumCulled = false;
      return im;
    });
    list.forEach((sp, i) => {
      const elev = Math.max(scene.elevAtGrid(sp.x, sp.y), 0.15);
      const s = Math.min(Math.max(sp.s * 0.5 * 1.6, sMin), Math.max(sMin, sMax));
      q.setFromAxisAngle(up, sp.r);
      mtx.compose(v3.set(sp.x - W / 2, elev, sp.y - H / 2), q, s3.set(s, s, s));
      for (const im of meshes) im.setMatrixAt(i, mtx);
    });
    for (const im of meshes) {
      im.instanceMatrix.needsUpdate = true;
      group.add(im);
    }
  }

  scene.scene.add(group);
  scene.invalidate();
  return group;
}
