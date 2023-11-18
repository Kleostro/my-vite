// eslint-disable-next-line import/no-extraneous-dependencies
import Inspect from 'vite-plugin-inspect';
import { resolve } from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default {
  publicDir: 'build',
  plugins: [
    Inspect(),
    ViteImageOptimizer({
      png: {
        quality: 85,
      },
      jpg: {
        quality: 85,
      },
    }),
  ],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // login: resolve(__dirname, 'login/index.html'),
      },
    },
  },
};
