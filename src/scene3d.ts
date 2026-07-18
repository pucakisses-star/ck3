/** Three.js scene: WebGLRenderer + PerspectiveCamera over a displaced
 *  PlaneGeometry heightfield textured with the baked political map. */
import * as THREE from 'three';
import type { World } from './types';

const SEG_X = 1024, SEG_Y = 512;
/** vertical exaggeration: world units of elevation for height 1.0 above the waterline.
 *  Kept subtle — relief should read as gentle raised terrain, not alpine drama. */
const Z_SCALE = 90;

export interface CamState { tx: number; tz: number; dist: number; pitch: number; yaw: number }

export class MapScene {
  readonly renderer: THREE.WebGLRenderer;
  readonly camera: THREE.PerspectiveCamera;
  readonly scene: THREE.Scene;
  readonly terrain: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
  readonly texture: THREE.CanvasTexture;
  readonly W: number; readonly H: number;
  maxElev = 0;
  minElev = 0;
  cam: CamState;
  fitDist: number;
  needsRender = true;
  onCameraChange: (() => void) | null = null;

  private world: World;
  /** shader uniforms for GPU hover/selection province highlighting (raw ids) */
  private hlUniforms = {
    hoverId: { value: new THREE.Vector2(-10, -10) },
    selId: { value: new THREE.Vector2(-10, -10) },
  };
  /** map-mode uniforms: province border darkness + hierarchy borders on/off */
  private modeUniforms = {
    provDark: { value: 0.1 },
    hierK: { value: 1 },
  };
  /** the game's flat-map paper sheets (loaded lazily; K gates each blend) */
  private paperUniforms = {
    paperLand: { value: new THREE.Texture() as THREE.Texture },
    paperSea: { value: new THREE.Texture() as THREE.Texture },
    paperKL: { value: 0 },
    paperKS: { value: 0 },
  };
  private washData!: Uint8Array;
  private washTex!: THREE.DataTexture;
  private idW = 0; private idH = 0;
  /** heightfield prefiltered to vertex resolution — kills ridge aliasing and
   *  keeps mesh displacement, picking and label heights exactly consistent */
  private vertElev: Float32Array;

  constructor(world: World, textureCanvas: HTMLCanvasElement, container: HTMLElement,
    idImage?: HTMLImageElement | null, snow?: Uint8Array | null) {
    this.world = world;
    const { W, H } = world;
    this.W = W; this.H = H;

    const VX = SEG_X + 1, VY = SEG_Y + 1;
    this.vertElev = new Float32Array(VX * VY);
    {
      const { height, seaBase, land } = world;
      const rx = Math.max(1, Math.round(W / SEG_X / 2)), ry = Math.max(1, Math.round(H / SEG_Y / 2));
      for (let vy = 0; vy < VY; vy++) {
        const cy = Math.round((vy / SEG_Y) * (H - 1));
        for (let vx = 0; vx < VX; vx++) {
          const cx = Math.round((vx / SEG_X) * (W - 1));
          let sum = 0, n = 0, lsum = 0, ln = 0;
          for (let dy = -ry; dy <= ry; dy++) {
            const yy = Math.min(H - 1, Math.max(0, cy + dy));
            for (let dx = -rx; dx <= rx; dx++) {
              const xx = Math.min(W - 1, Math.max(0, cx + dx));
              const ii = yy * W + xx;
              sum += height[ii]; n++;
              if (land[ii]) { lsum += height[ii]; ln++; }
            }
          }
          let e = Math.max(0, sum / n - seaBase);
          if (ln > 0) {
            // don't let small islands average away into the surrounding sea
            const eLand = Math.max(0, lsum / ln - seaBase);
            e = Math.max(e, eLand * Math.min(1, (ln / n) * 2.4));
          }
          this.vertElev[vy * VX + vx] = Math.pow(e, 0.92) * Z_SCALE;
        }
      }
    }

    this.renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.domElement.id = 'gl';
    container.prepend(this.renderer.domElement);

    this.scene = new THREE.Scene();
    // pale haze horizon: distant terrain dissolves into cloud like the reference
    const haze = new THREE.Color('#878f83');
    this.scene.background = haze;

    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 2, 16000);

    this.texture = new THREE.CanvasTexture(textureCanvas);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.texture.anisotropy = Math.min(8, this.renderer.capabilities.getMaxAnisotropy());
    this.texture.generateMipmaps = true;
    this.texture.minFilter = THREE.LinearMipmapLinearFilter;
    this.texture.magFilter = THREE.LinearFilter;

    // displaced heightfield: mountains physically rise above the plains.
    // PlaneGeometry vertex order matches the prefiltered grid row-for-row.
    const geo = new THREE.PlaneGeometry(W, H, SEG_X, SEG_Y);
    const pos = geo.attributes.position as THREE.BufferAttribute;
    let maxE = 0;
    for (let i = 0; i < pos.count; i++) {
      const e = this.vertElev[i];
      if (e > maxE) maxE = e;
      pos.setZ(i, e);
    }
    this.maxElev = maxE;
    geo.rotateX(-Math.PI / 2); // lie flat in XZ, +Y up
    geo.computeVertexNormals();

    // seamless high-frequency detail grain: keeps close zoom looking like
    // textured parchment terrain instead of magnified flat texels
    const detail = (() => {
      const S = 256, P = 32; // lattice period P divides S -> tiles seamlessly
      const c = document.createElement('canvas'); c.width = S; c.height = S;
      const cx = c.getContext('2d')!;
      const img = cx.createImageData(S, S);
      const lat: number[] = [];
      for (let i = 0; i < P * P; i++) {
        let n = (i * 374761393 + 668265263) | 0;
        n = Math.imul(n ^ (n >>> 13), 1274126177);
        lat.push(((n ^ (n >>> 16)) >>> 0) / 4294967295);
      }
      const sm = (t: number) => t * t * (3 - 2 * t);
      for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
        const gx = (x / S) * P, gy = (y / S) * P;
        const x0 = gx | 0, y0 = gy | 0, fx = sm(gx - x0), fy = sm(gy - y0);
        const x1 = (x0 + 1) % P, y1 = (y0 + 1) % P;
        const a = lat[y0 * P + x0], b = lat[y0 * P + x1], d = lat[y1 * P + x0], e = lat[y1 * P + x1];
        let v = a + (b - a) * fx + (d - a) * fy + (a - b - d + e) * fx * fy;
        // add a finer octave, also periodic
        const gx2 = (x / S) * P * 4, gy2 = (y / S) * P * 4;
        const x2 = gx2 | 0, y2 = gy2 | 0, fx2 = sm(gx2 - x2), fy2 = sm(gy2 - y2);
        const x3 = (x2 + 1) % (P * 4), y3 = (y2 + 1) % (P * 4);
        const li = (yy: number, xx: number) => lat[((yy % P) * P + (xx % P))];
        const a2 = li(y2, x2), b2 = li(y2, x3), d2 = li(y3, x2), e2 = li(y3, x3);
        v = v * 0.65 + (a2 + (b2 - a2) * fx2 + (d2 - a2) * fy2 + (a2 - b2 - d2 + e2) * fx2 * fy2) * 0.35;
        const o = (y * S + x) * 4, g8 = (v * 255) | 0;
        img.data[o] = g8; img.data[o + 1] = g8; img.data[o + 2] = g8; img.data[o + 3] = 255;
      }
      cx.putImageData(img, 0, 0);
      const t = new THREE.CanvasTexture(c);
      t.wrapS = t.wrapT = THREE.RepeatWrapping;
      t.minFilter = THREE.LinearMipmapLinearFilter;
      t.anisotropy = Math.min(4, this.renderer.capabilities.getMaxAnisotropy());
      return t;
    })();

    // ---- province-id texture at the SOURCE resolution (8192x4096 when the
    // GPU allows) — the shader derives political wash, tiered borders and the
    // hover highlight from it, so province edges stay crisp at any zoom.
    let provTex: THREE.Texture;
    if (idImage && this.renderer.capabilities.maxTextureSize >= idImage.width) {
      provTex = new THREE.Texture(idImage);
      this.idW = idImage.width; this.idH = idImage.height;
    } else {
      // fallback: grid-resolution ids from the world model
      const idData = new Uint8Array(W * H * 4);
      for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
          const id = world.rawGrid[y * W + x];
          const o = ((H - 1 - y) * W + x) * 4; // flip rows to match UV space
          idData[o] = id & 255; idData[o + 1] = (id >> 8) & 255; idData[o + 3] = 255;
        }
      }
      provTex = new THREE.DataTexture(idData, W, H, THREE.RGBAFormat);
      this.idW = W; this.idH = H;
    }
    provTex.minFilter = THREE.NearestFilter;
    provTex.magFilter = THREE.NearestFilter;
    provTex.generateMipmaps = false;
    provTex.needsUpdate = true;

    // per-raw-id LUTs (256x256 = 65536 entries): wash colour+alpha per mode,
    // and the de jure chain for border-tier classification
    this.washData = new Uint8Array(256 * 256 * 4);
    this.washTex = new THREE.DataTexture(this.washData, 256, 256, THREE.RGBAFormat);
    this.washTex.minFilter = this.washTex.magFilter = THREE.NearestFilter;
    const tierA = new Uint8Array(256 * 256 * 4);
    const tierB = new Uint8Array(256 * 256 * 4);
    {
      const { rawCounty, rawLand, cDuchy, dKing, kEmp } = world;
      for (let rid = 0; rid < 65536; rid++) {
        const c = rawCounty[rid];
        const d = c >= 0 ? cDuchy[c] : -1;
        const k = d >= 0 ? dKing[d] : -1;
        const e = k >= 0 ? kEmp[k] : -1;
        const cc = c >= 0 ? c : 65535, dd = d >= 0 ? d : 65535;
        const o = rid * 4;
        tierA[o] = cc & 255; tierA[o + 1] = cc >> 8;
        tierA[o + 2] = dd & 255; tierA[o + 3] = dd >> 8;
        tierB[o] = k >= 0 ? k : 255; tierB[o + 1] = e >= 0 ? e : 255;
        tierB[o + 2] = rawLand[rid] ? 255 : 0; tierB[o + 3] = 255;
      }
    }
    const tierTexA = new THREE.DataTexture(tierA, 256, 256, THREE.RGBAFormat);
    const tierTexB = new THREE.DataTexture(tierB, 256, 256, THREE.RGBAFormat);
    for (const t of [tierTexA, tierTexB]) {
      t.minFilter = t.magFilter = THREE.NearestFilter;
      t.needsUpdate = true;
    }

    // per-cell relief shade + snow (baked by computeShade/buildBase) so the
    // GPU wash can follow the relief exactly like the CPU bake did
    const ssData = new Uint8Array(W * H * 4);
    {
      const { shade, land, coastD } = world;
      for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
          const i = y * W + x, o = ((H - 1 - y) * W + x) * 4;
          ssData[o] = Math.max(0, Math.min(255, ((shade[i] - 0.42) / 0.88) * 255)) | 0;
          ssData[o + 1] = snow ? snow[i] : 0;
          // blue channel: 0 = sea; land ramps with distance-to-coast so the
          // shader can gate the wash AND draw a beach band near the shore
          ssData[o + 2] = land[i] ? 24 + Math.min(12, coastD[i]) * 18 : 0;
          ssData[o + 3] = 255;
        }
      }
    }
    const shadeTex = new THREE.DataTexture(ssData, W, H, THREE.RGBAFormat);
    shadeTex.minFilter = shadeTex.magFilter = THREE.LinearFilter;
    shadeTex.generateMipmaps = false;
    shadeTex.needsUpdate = true;

    const mat = new THREE.MeshBasicMaterial({ map: this.texture });
    mat.onBeforeCompile = (shader) => {
      shader.uniforms.detailMap = { value: detail };
      shader.uniforms.provMap = { value: provTex };
      shader.uniforms.washMap = { value: this.washTex };
      shader.uniforms.tierMapA = { value: tierTexA };
      shader.uniforms.tierMapB = { value: tierTexB };
      shader.uniforms.shadeMap = { value: shadeTex };
      shader.uniforms.provTexel = { value: new THREE.Vector2(1 / this.idW, 1 / this.idH) };
      shader.uniforms.provDark = this.modeUniforms.provDark;
      shader.uniforms.hierK = this.modeUniforms.hierK;
      shader.uniforms.hoverId = this.hlUniforms.hoverId;
      shader.uniforms.selId = this.hlUniforms.selId;
      shader.uniforms.paperLand = this.paperUniforms.paperLand;
      shader.uniforms.paperSea = this.paperUniforms.paperSea;
      shader.uniforms.paperKL = this.paperUniforms.paperKL;
      shader.uniforms.paperKS = this.paperUniforms.paperKS;
      shader.fragmentShader = shader.fragmentShader
        .replace('void main() {', `
      uniform sampler2D detailMap;
      uniform sampler2D provMap;
      uniform sampler2D washMap;
      uniform sampler2D tierMapA;
      uniform sampler2D tierMapB;
      uniform sampler2D shadeMap;
      uniform vec2 provTexel;
      uniform float provDark;
      uniform float hierK;
      uniform vec2 hoverId;
      uniform vec2 selId;
      uniform sampler2D paperLand;
      uniform sampler2D paperSea;
      uniform float paperKL;
      uniform float paperKS;
      float idAt( vec2 uv ) {
        vec2 t = texture2D( provMap, uv ).rg;
        return floor( t.x * 255.0 + 0.5 ) + floor( t.y * 255.0 + 0.5 ) * 256.0;
      }
      vec2 lutUV( float id ) {
        return vec2( ( mod( id, 256.0 ) + 0.5 ) / 256.0, ( floor( id / 256.0 ) + 0.5 ) / 256.0 );
      }
      float u16( vec2 c ) { return floor( c.x * 255.0 + 0.5 ) + floor( c.y * 255.0 + 0.5 ) * 256.0; }
      vec4 landWashAt( vec2 uv ) {
        // wash colour of the province at uv, alpha 0 when it's water
        float nid = idAt( uv );
        vec2 nl = lutUV( nid );
        if ( texture2D( tierMapB, nl ).b < 0.5 ) return vec4( 0.0 );
        return texture2D( washMap, nl );
      }
      float borderTier( float pid, vec4 tA, vec4 tB, float nid, float pd, float hk ) {
        vec2 nluv = lutUV( nid );
        vec4 nA = texture2D( tierMapA, nluv );
        vec4 nB = texture2D( tierMapB, nluv );
        if ( tB.b != nB.b ) return 0.30;                         // coast ink line
        if ( tB.b < 0.5 ) return 0.0;                            // open water
        float c0 = u16( tA.rg ), c1 = u16( nA.rg );
        // no realm borders into or through the impassable wastelands — the
        // colour wash fading out already marks the realm edge there
        if ( c0 == 65535.0 || c1 == 65535.0 ) return pd;
        float d = pd;
        if ( hk > 0.5 ) {
          if ( c1 != c0 ) d = max( d, 0.20 );
          if ( u16( nA.ba ) != u16( tA.ba ) ) d = max( d, 0.30 );
          if ( nB.r != tB.r ) d = max( d, 0.46 );
          if ( nB.g != tB.g ) d = max( d, 0.66 );
        }
        return d;
      }
      void main() {`)
        .replace('#include <map_fragment>', `#include <map_fragment>
      float dtl = texture2D( detailMap, vMapUv * 96.0 ).r;
      float dtl2 = texture2D( detailMap, vMapUv * 340.0 ).r;
      diffuseColor.rgb *= ( 0.90 + dtl * 0.13 + dtl2 * 0.07 );

      float pid = idAt( vMapUv );
      vec2 luv = lutUV( pid );
      vec4 wash = texture2D( washMap, luv );
      vec3 ss = texture2D( shadeMap, vMapUv ).rgb;
      float shd = 0.42 + ss.r * 0.88;
      vec4 tA = texture2D( tierMapA, luv );
      vec4 tB = texture2D( tierMapB, luv );

      // resolve the coastline at id-map resolution: the base texture only
      // knows land/sea at grid res, the province map knows it exactly
      float landF = smoothstep( 0.030, 0.085, ss.b );
      float provLand = step( 0.5, tB.b );
      float fillF = provLand * ( 1.0 - landF );          // land px painted as sea
      vec3 pl = texture2D( paperLand, vMapUv * vec2( 12.0, 6.0 ) ).rgb;
      vec3 parch = mix( vec3( 0.655, 0.615, 0.485 ), pl * 1.06, paperKL );
      diffuseColor.rgb = mix( diffuseColor.rgb, parch * shd, fillF * 0.9 );
      float cutF = ( 1.0 - provLand ) * landF;           // sea px painted as land
      diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 0.322, 0.392, 0.392 ), cutF * 0.85 );

      // sandy beach band along the shore (fades with distance to coast)
      float beach = smoothstep( 0.035, 0.085, ss.b ) * ( 1.0 - smoothstep( 0.09, 0.52, ss.b ) );
      diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 0.76, 0.70, 0.53 ) * shd,
        beach * 0.42 * provLand * ( 1.0 - ss.g ) );

      float washA = wash.a * ( 1.0 - ss.g * 0.85 ) * provLand;
      diffuseColor.rgb = mix( diffuseColor.rgb, wash.rgb * shd, washA );
      vec2 off = max( provTexel, fwidth( vMapUv ) * 0.75 );
      float bd = 0.0;
      float nid;
      nid = idAt( vMapUv + vec2( off.x, 0.0 ) );
      if ( nid != pid ) bd = max( bd, borderTier( pid, tA, tB, nid, provDark, hierK ) );
      nid = idAt( vMapUv - vec2( off.x, 0.0 ) );
      if ( nid != pid ) bd = max( bd, borderTier( pid, tA, tB, nid, provDark, hierK ) );
      nid = idAt( vMapUv + vec2( 0.0, off.y ) );
      if ( nid != pid ) bd = max( bd, borderTier( pid, tA, tB, nid, provDark, hierK ) );
      nid = idAt( vMapUv - vec2( 0.0, off.y ) );
      if ( nid != pid ) bd = max( bd, borderTier( pid, tA, tB, nid, provDark, hierK ) );
      // second ring widens only the realm-level borders, like the CPU dilate did
      if ( hierK > 0.5 && bd < 0.46 ) {
        vec2 off2 = off * 2.2;
        float bd2 = 0.0;
        nid = idAt( vMapUv + vec2( off2.x, 0.0 ) );
        if ( nid != pid ) bd2 = max( bd2, borderTier( pid, tA, tB, nid, 0.0, 1.0 ) );
        nid = idAt( vMapUv - vec2( off2.x, 0.0 ) );
        if ( nid != pid ) bd2 = max( bd2, borderTier( pid, tA, tB, nid, 0.0, 1.0 ) );
        nid = idAt( vMapUv + vec2( 0.0, off2.y ) );
        if ( nid != pid ) bd2 = max( bd2, borderTier( pid, tA, tB, nid, 0.0, 1.0 ) );
        nid = idAt( vMapUv - vec2( 0.0, off2.y ) );
        if ( nid != pid ) bd2 = max( bd2, borderTier( pid, tA, tB, nid, 0.0, 1.0 ) );
        if ( bd2 >= 0.46 ) bd = max( bd, bd2 * 0.72 );
      }
      if ( bd > 0.0 )
        diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 0.125, 0.098, 0.070 ), bd );

      // realm-coloured glow in the water hugging owned coasts (CK3-style);
      // radius is capped in texels so it stays a coastal rim at any zoom
      if ( provLand < 0.5 ) {
        vec2 r1 = min( off * 2.2, provTexel * 7.0 );
        vec2 r2 = min( off * 5.0, provTexel * 16.0 );
        vec4 rim = landWashAt( vMapUv + vec2( r1.x, 0.0 ) );
        if ( rim.a == 0.0 ) rim = landWashAt( vMapUv - vec2( r1.x, 0.0 ) );
        if ( rim.a == 0.0 ) rim = landWashAt( vMapUv + vec2( 0.0, r1.y ) );
        if ( rim.a == 0.0 ) rim = landWashAt( vMapUv - vec2( 0.0, r1.y ) );
        if ( rim.a == 0.0 ) rim = landWashAt( vMapUv + r1 );
        if ( rim.a == 0.0 ) rim = landWashAt( vMapUv - r1 );
        float rimK = 0.55;
        if ( rim.a == 0.0 ) {
          rimK = 0.30;
          rim = landWashAt( vMapUv + vec2( r2.x, 0.0 ) );
          if ( rim.a == 0.0 ) rim = landWashAt( vMapUv - vec2( r2.x, 0.0 ) );
          if ( rim.a == 0.0 ) rim = landWashAt( vMapUv + vec2( 0.0, r2.y ) );
          if ( rim.a == 0.0 ) rim = landWashAt( vMapUv - vec2( 0.0, r2.y ) );
        }
        if ( rim.a > 0.0 )
          diffuseColor.rgb = mix( diffuseColor.rgb, rim.rgb, rim.a * rimK );
      }

      if ( max( abs( mod( pid, 256.0 ) - hoverId.x ), abs( floor( pid / 256.0 ) - hoverId.y ) ) < 0.5 )
        diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 1.0 ), 0.16 * provLand );
      if ( max( abs( mod( pid, 256.0 ) - selId.x ), abs( floor( pid / 256.0 ) - selId.y ) ) < 0.5 )
        diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 1.0, 0.9, 0.58 ), 0.30 * provLand );

      // the game's flat-map paper: parchment grain over land (mottles the
      // political wash) and the muted sea sheet over open water
      float pgl = dot( pl, vec3( 0.3333 ) ) * 1.88;
      diffuseColor.rgb *= mix( 1.0, pgl, 0.30 * provLand * paperKL );
      vec3 ps = texture2D( paperSea, vMapUv * vec2( 12.0, 6.0 ) ).rgb;
      float pgs = dot( ps, vec3( 0.3333 ) ) * 3.03;
      float seaF = ( 1.0 - provLand ) * paperKS;
      diffuseColor.rgb *= mix( 1.0, pgs, seaF * 0.42 );
      diffuseColor.rgb = mix( diffuseColor.rgb, ps * 1.10, seaF * 0.15 );`);
    };
    this.terrain = new THREE.Mesh(geo, mat);
    this.scene.add(this.terrain);

    // endless dim ocean under and around the map so panning past the edge
    // never exposes a void; it fades into the haze with distance
    const surround = new THREE.Mesh(
      new THREE.PlaneGeometry(W * 8, H * 8),
      new THREE.MeshBasicMaterial({ color: new THREE.Color('#42504f') }),
    );
    surround.geometry.rotateX(-Math.PI / 2);
    surround.position.y = -1.2;
    this.scene.add(surround);

    // default framing: regional view centred on the landmass, oblique pitch
    const fitH = (H * 1.15) / (2 * Math.tan((this.camera.fov * Math.PI / 180) / 2));
    this.fitDist = Math.max(fitH, W / (2 * Math.tan((this.camera.fov * Math.PI / 180) / 2) * this.camera.aspect) * 1.06);
    this.scene.fog = new THREE.Fog(haze, this.fitDist * 0.75, this.fitDist * 2.1);

    this.cam = {
      tx: world.landCX - W / 2,
      tz: world.landCY - H / 2,
      dist: this.fitDist * 0.72,
      pitch: THREE.MathUtils.degToRad(52),
      yaw: 0,
    };
    this.applyCamera();

    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.invalidate();
    });
  }

  /** Elevation (world units) at grid coords — bilinear over the prefiltered
   *  vertex heightfield, so it matches the rendered mesh exactly. */
  elevAtGrid(gx: number, gy: number): number {
    const { W, H } = this.world;
    const VX = SEG_X + 1;
    let fx = (gx / (W - 1)) * SEG_X, fy = (gy / (H - 1)) * SEG_Y;
    if (fx < 0) fx = 0; if (fy < 0) fy = 0;
    if (fx > SEG_X - 0.001) fx = SEG_X - 0.001;
    if (fy > SEG_Y - 0.001) fy = SEG_Y - 0.001;
    const x0 = fx | 0, y0 = fy | 0, ax = fx - x0, ay = fy - y0;
    const i = y0 * VX + x0;
    const h00 = this.vertElev[i], h10 = this.vertElev[i + 1];
    const h01 = this.vertElev[i + VX], h11 = this.vertElev[i + VX + 1];
    return h00 + (h10 - h00) * ax + (h01 - h00) * ay + (h00 - h10 - h01 + h11) * ax * ay;
  }

  elevAtWorld(wx: number, wz: number): number {
    return this.elevAtGrid(wx + this.W / 2, wz + this.H / 2);
  }

  applyCamera(): void {
    const c = this.cam;
    const groundY = this.elevAtWorld(c.tx, c.tz) * 0.5;
    const cp = Math.cos(c.pitch), sp = Math.sin(c.pitch);
    this.camera.position.set(
      c.tx + Math.sin(c.yaw) * cp * c.dist,
      groundY + sp * c.dist,
      c.tz + Math.cos(c.yaw) * cp * c.dist,
    );
    this.camera.lookAt(c.tx, groundY, c.tz);
    this.invalidate();
    if (this.onCameraChange) this.onCameraChange();
  }

  clampCamera(): void {
    const c = this.cam;
    c.dist = Math.max(70, Math.min(this.fitDist * 1.25, c.dist));
    c.pitch = Math.max(THREE.MathUtils.degToRad(28), Math.min(THREE.MathUtils.degToRad(80), c.pitch));
    c.yaw = Math.max(-1.0, Math.min(1.0, c.yaw));
    const mx = this.W * 0.62, mz = this.H * 0.72;
    c.tx = Math.max(-mx, Math.min(mx, c.tx));
    c.tz = Math.max(-mz, Math.min(mz, c.tz));
  }

  invalidate(): void { this.needsRender = true; }

  /** Load the game's flat-map paper sheets; each blend activates on load. */
  setPaperTextures(landUrl: string, seaUrl: string): void {
    const loader = new THREE.TextureLoader();
    const pairs: [string, { value: THREE.Texture }, { value: number }][] = [
      [landUrl, this.paperUniforms.paperLand, this.paperUniforms.paperKL],
      [seaUrl, this.paperUniforms.paperSea, this.paperUniforms.paperKS],
    ];
    for (const [url, tex, k] of pairs) {
      loader.load(url, (t) => {
        t.wrapS = t.wrapT = THREE.RepeatWrapping;
        t.minFilter = THREE.LinearMipmapLinearFilter;
        t.anisotropy = Math.min(4, this.renderer.capabilities.getMaxAnisotropy());
        tex.value = t;
        k.value = 1;
        this.invalidate();
      });
    }
  }

  /** GPU province highlight by RAW definition id: pass -1 to clear. */
  setHover(rid: number): void {
    const v = this.hlUniforms.hoverId.value;
    if (rid < 0) v.set(-10, -10); else v.set(rid & 255, (rid >> 8) & 255);
    this.invalidate();
  }
  setSelected(rid: number): void {
    const v = this.hlUniforms.selId.value;
    if (rid < 0) v.set(-10, -10); else v.set(rid & 255, (rid >> 8) & 255);
    this.invalidate();
  }

  /** Swap the per-province wash LUT (RGBA per raw id, 256x256) and the border
   *  style for a map mode — no texture rebake needed. */
  setWash(lut: Uint8Array, provDark: number, hierarchy: boolean): void {
    this.washData.set(lut);
    this.washTex.needsUpdate = true;
    this.modeUniforms.provDark.value = provDark;
    this.modeUniforms.hierK.value = hierarchy ? 1 : 0;
    this.invalidate();
  }

  render(): void {
    if (!this.needsRender) return;
    this.needsRender = false;
    this.renderer.render(this.scene, this.camera);
  }

  /** Ray → NDC from client coords. */
  private ndc(clientX: number, clientY: number): THREE.Vector2 {
    return new THREE.Vector2(
      (clientX / window.innerWidth) * 2 - 1,
      -(clientY / window.innerHeight) * 2 + 1,
    );
  }

  /** Intersect the pointer ray with the flat y=0 plane (used for drag panning). */
  pickPlane(clientX: number, clientY: number): THREE.Vector3 | null {
    const ray = new THREE.Raycaster();
    ray.setFromCamera(this.ndc(clientX, clientY), this.camera);
    const t = -ray.ray.origin.y / ray.ray.direction.y;
    if (!isFinite(t) || t <= 0) return null;
    return ray.ray.origin.clone().addScaledVector(ray.ray.direction, t);
  }

  /** Heightfield ray-march pick: returns grid coords of the terrain hit. */
  pickGround(clientX: number, clientY: number): { gx: number; gy: number } | null {
    const rc = new THREE.Raycaster();
    rc.setFromCamera(this.ndc(clientX, clientY), this.camera);
    const o = rc.ray.origin, d = rc.ray.direction;
    if (d.y >= -1e-5) return null;
    const tTop = Math.max(0, (o.y - (this.maxElev + 2)) / -d.y);
    const tZero = o.y / -d.y;
    const steps = 320;
    let tPrev = tTop, hit = -1;
    for (let k = 0; k <= steps; k++) {
      const t = tTop + ((tZero + 4 - tTop) * k) / steps;
      const px = o.x + d.x * t, py = o.y + d.y * t, pz = o.z + d.z * t;
      if (py <= this.elevAtWorld(px, pz)) { hit = t; break; }
      tPrev = t;
    }
    if (hit < 0) return null;
    // bisect for precision
    let lo = tPrev, hi = hit;
    for (let k = 0; k < 18; k++) {
      const mid = (lo + hi) / 2;
      const px = o.x + d.x * mid, py = o.y + d.y * mid, pz = o.z + d.z * mid;
      if (py <= this.elevAtWorld(px, pz)) hi = mid; else lo = mid;
    }
    const px = o.x + d.x * hi, pz = o.z + d.z * hi;
    const gx = px + this.W / 2, gy = pz + this.H / 2;
    if (gx < 0 || gy < 0 || gx >= this.W || gy >= this.H) return null;
    return { gx, gy };
  }

  /** Project a grid point to screen; null when behind the camera. */
  projectGrid(gx: number, gy: number, lift = 3): [number, number] | null {
    const v = new THREE.Vector3(gx - this.W / 2, this.elevAtGrid(gx, gy) + lift, gy - this.H / 2);
    const dir = v.clone().sub(this.camera.position);
    if (dir.dot(this.camera.getWorldDirection(new THREE.Vector3())) <= 0) return null;
    v.project(this.camera);
    return [(v.x * 0.5 + 0.5) * window.innerWidth, (1 - (v.y * 0.5 + 0.5)) * window.innerHeight];
  }
}
