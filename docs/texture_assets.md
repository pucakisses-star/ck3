# CK3-Inspired Procedural Texture Set

This repository includes an original procedural texture generator for building medieval grand-strategy map visuals inspired by CK3's muted parchment-and-political-map mood. The textures are generated from deterministic noise and drawing routines; they do not contain extracted CK3 or Paradox assets.

Generated PNG files are intentionally not committed because the PR system does not support binary files. Regenerate them locally when needed.

## Generated outputs

Running the generator writes these files to `assets/textures/`:

- `parchment_land.png` — desaturated parchment terrain base with cloudy paper grain.
- `muted_sea.png` — blue-grey water texture with smoky variation and edge-friendly vignette.
- `mountain_relief_overlay.png` — transparent brown relief/ridge shading for multiply-style compositing.
- `fog_vignette_overlay.png` — transparent grey fog and darkened edge mask.
- `political_wash_overlay.png` — semi-transparent mottled political color wash.
- `irregular_border_strokes.png` — transparent hand-drawn vertical border-stroke sample.

## Browser preview and downloads

Open the GitHub Pages site at `https://pucakisses-star.github.io/ck3/` to explore a fixed, full-page CK3-inspired fantasy political map with pan/zoom, clickable regions/provinces, and finished PNG download without using a terminal. The page auto-loads and composites uploaded GitHub PNG layers such as `provinces.png`, `GH_map_lighting.png`, `heightmap.png`, and `rivers.png` when available, and also lets you load a local PNG manually to preserve a high-detail source map as the visual base.

## Regeneration

Run the generator from the repository root:

```bash
python tools/generate_ck3_inspired_textures.py
```

The script writes all PNGs into `assets/textures/` using a fixed seed for reproducible output. The generated PNGs are ignored by Git via `.gitignore`.

## Suggested layer order

1. `parchment_land.png`
2. `mountain_relief_overlay.png` using multiply or normal alpha blending
3. `political_wash_overlay.png` at low opacity or multiply/overlay blending
4. Province and realm borders, optionally using `irregular_border_strokes.png` as a brush/source texture
5. Labels and map icons
6. `fog_vignette_overlay.png`
7. `muted_sea.png` behind land masks or coastlines
