import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist', // Ensure the output directory is 'dist'
    emptyOutDir: true, // Ensures 'dist' folder is cleared before building
  },
  base: '/', // Change this if you're deploying to a subdirectory
});
