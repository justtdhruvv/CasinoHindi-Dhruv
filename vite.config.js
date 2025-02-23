import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  publicDir: 'public', // Ensure this is set
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
        }
      }
    },
    // Add proper asset handling
    assetsDir: 'assets',
  },
  server: {
    port: 5174,
    host: true,
    strictPort: true
  }
});
