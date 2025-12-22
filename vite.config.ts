import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-three': ['three', '@react-three/fiber'],
          'vendor-genai': ['@google/genai'],
          'vendor-ui': ['lucide-react', 'embla-carousel', 'embla-carousel-react', 'embla-carousel-autoplay'],
        },
      },
    },
    chunkSizeWarningLimit: 800,
    // sourcemap disabled for production builds
    // sourcemap: false,
  },
});