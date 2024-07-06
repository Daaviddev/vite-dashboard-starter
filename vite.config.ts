import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
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
