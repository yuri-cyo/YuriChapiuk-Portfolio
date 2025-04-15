import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  server: {
    host: '0.0.0.0', // Дозволити підключення з інших пристроїв
    port: 8080,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname), // аліас для кореневої папки src
      // додайте інші аліаси, які вам потрібні тут
    },
  },
  // css: {
  //   devSourcemap: true,
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import '@/style.scss';`, // Додайте шлях до вашого основного файлу SCSS зі змінними
  //     },
  //   },
  // },
  "strictMode": true
});