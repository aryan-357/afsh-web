import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      // Prevent Vite from bundling these dependencies so they are loaded 
      // via the index.html importmap (CDN). This fixes the "Two Reacts" issue.
      external: [
        'react',
        'react/jsx-runtime',
        'react-dom',
        'react-dom/client',
        'react-router-dom',
        '@google/genai',
        'lucide-react'
      ]
    }
  },
});