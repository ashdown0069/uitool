// vite.config.js / vite.config.ts

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    ckeditor5({ theme: require.resolve('@ckeditor/ckeditor5-theme-lark') }),
  ],
  resolve: {
    alias: {
      '@hooks': '/src/hooks',
      '@assets': '/src/assets',
      '@store': '/src/store',
      '@atom': '/src/atom',
      '@molecule': '/src/molecule',
      '@organism': '/src/organism',
      '@template': '/src/template',
      '@pages': '/src/pages',
      '@constant': '/src/constant',
      '@types': '/src/types',
    },
  },
  optimizeDeps: {
    include: ['@ckeditor/ckeditor5-react', '@ckeditor/ckeditor5-build-balloon'],
  },
  build: {
    commonjsOptions: {
      exclude: ['ckeditor5-custom-build'],
      include: [],
    },
  },
});
