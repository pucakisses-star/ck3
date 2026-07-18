import { defineConfig } from 'vite';

// GitHub Pages serves this repo at https://<user>.github.io/ck3/ from the
// /docs folder on main, so the app is built with that base straight into docs/.
// docs/map/ holds the preprocessed fixed-map assets and must survive builds,
// hence emptyOutDir: false (clean docs/assets/ manually before rebuilding).
export default defineConfig({
  base: '/ck3/',
  server: { host: '0.0.0.0' },
  build: {
    outDir: 'docs',
    emptyOutDir: false,
  },
});
