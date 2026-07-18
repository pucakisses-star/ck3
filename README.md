# Map of Godherja — 3D Grand-Strategy Map (Three.js)

An interactive, CK3-style 3-D grand-strategy map that runs entirely in the
browser. A **Vite + TypeScript + Three.js** app renders the **fixed, real
province map** (the Godherja total-conversion map data in this repo) — the
actual province shapes, names, terrain and heightmap — as displaced 3-D terrain
under a muted political overlay, with a perspective grand-strategy camera.

**Live map:** https://pucakisses-star.github.io/ck3/

## How it renders

- `WebGLRenderer` + `PerspectiveCamera` (oblique pitch, drag-pan, wheel-zoom,
  right-drag rotate, WASD/arrow pan, tilt slider).
- The terrain is a **displaced `PlaneGeometry` heightfield** built from the real
  16-bit heightmap — mountains physically rise above the plains, and camera
  movement produces true parallax. The heightfield is prefiltered to vertex
  resolution to avoid ridge aliasing, and picking/labels sample the same field
  so everything stays aligned.
- The terrain base texture is baked at 4096×2048: relief-shaded terrain
  colours, parchment grain, gray-green ocean with shallows and cloud fog.
  The political wash, all border tiers (province / county / duchy / kingdom /
  empire), the coastline ink and the hover highlight are drawn **on the GPU**
  from the full-resolution 8192×4096 province-id map (`docs/map/prov8.png`),
  so province edges stay pixel-crisp at any zoom and map modes switch
  instantly via a per-province colour LUT. Distance fog dissolves the horizon
  into haze.
- Province picking ray-marches the heightfield; hover shows a tooltip, click
  opens the selection panel (county → duchy → kingdom → empire, development)
  and highlights the province in the texture.
- Realm labels are perspective-projected, PCA-aligned stretched serif names
  with collision culling and zoom tiers (empires → kingdoms → provinces).
- Map modes: political, provinces, terrain, elevation, culture, faith,
  development. Exports: current view PNG + province data JSON.

## The fixed map data

The app loads pre-processed assets from `docs/map/`, built from the source map
files (`provinces.png`, `heightmap.png`, `definition.csv`,
`00_province_terrain.txt`, `default.map`):

- `docs/map/prov.png` — province id per pixel (4096×2048, id encoded in R/G).
- `docs/map/height.png` — 8-bit downsampled heightmap.
- `docs/map/meta.json` — per-province name/terrain/sea plus the real hierarchy,
  culture and faith tables (names + colours), and the river mask embedded as a
  PNG data URL.

Regenerate them after changing the source map with:

```bash
python tools/build_fixed_map.py
```

Everything is now the real mod data: the county → duchy → kingdom → empire
de jure hierarchy (with official title colours and localized names) comes from
`common/landed_titles` + `localization`, cultures and faiths per province from
`history/provinces` + `common/culture`/`common/religion`, and rivers from
`map_data/rivers.png`. Provinces outside the hierarchy render as uncolonised
wasteland, as in the mod.

The map is also decorated with the mod's own 3-D models
(`tools/build_map_objects.py` → `docs/map/objects/`): trees, rocks,
settlements and unique landmarks. The Paradox `.mesh` binaries under
`gfx/models` are converted to compact web geometry with their DDS diffuse
textures; forests follow the authored density masks in
`content_source/map_objects/masks`, one settlement model (castle / city /
temple, styled by culture) stands at each barony from
`gfx/map/map_object_data/building_locators.txt`, and the hand-placed
landmarks (great wall, statues, shipwreck, the worldeater…) come from the
special-building locators. Everything renders as instanced meshes and can be
toggled with the **Models** button.

## Developing

```bash
npm install
npm run dev      # dev server
npm run build    # typecheck + build into docs/
```

## Deployment

GitHub Pages publishes the **`main` branch, `/docs` folder** (Settings → Pages →
Deploy from a branch → `main` / `/docs`). Vite is configured with
`base: "/ck3/"` and builds into `docs/` (`docs/map/` is preserved).

A GitHub Actions workflow (`.github/workflows/build-map.yml`) rebuilds the site
automatically: whenever the app sources or the mod's map data change on `main`,
it regenerates `docs/map/*` from the mod files, bundles the app, and commits the
result back to `main` — so pull requests only ever carry source files, never
build artifacts or binaries. It can also be run manually from the Actions tab
(workflow_dispatch).
