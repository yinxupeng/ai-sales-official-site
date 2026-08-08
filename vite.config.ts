import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: new URL('./index.html', import.meta.url).pathname,
        about: new URL('./about.html', import.meta.url).pathname,
      },
    },
  },
  plugins: [react()],
});
