import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  base: '/kaspTest/',
  plugins: [react()],
  build: {
    assetsDir: 'assets',
    manifest: true, // Добавьте это
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
      },
    },
  },
});
