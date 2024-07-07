import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: '/vite-dashboard-starter/',
  build: {
    outDir: 'dist', // This will output build files to a 'docs' folder
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@shad': path.resolve(__dirname, './src/components/ui'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@layout': path.resolve(__dirname, './src/components/layout'),
      '@common': path.resolve(__dirname, './src/common'),
    },
  },
});
