import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';
import { resolve } from 'path';
import { injectManifest } from 'workbox-build';

export default defineConfig({
  plugins: [
    // Image compression
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 70 },
      pngquant: { quality: [0.65, 0.9], speed: 4 },
      svgo: { plugins: [{ name: 'removeViewBox', active: true }] },
    }),
    // Bundle visualizer for analysis mode
    visualizer({
      filename: 'dist/bundle-visualizer.html',
      open: false,
      gzipSize: true,
    }),
    // Workbox injection after build
    {
      name: 'workbox-inject',
      apply: 'build',
      async closeBundle() {
        await injectManifest({
          swSrc: resolve(__dirname, 'src', 'sw.ts'),
          swDest: resolve(__dirname, 'dist', 'sw.js'),
          globDirectory: resolve(__dirname, 'dist'),
          globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,svg,webp,mp3,ogg}'],
        });
      },
    },
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
    },
  },
});
