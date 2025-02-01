import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@sortViz': path.resolve(__dirname, './src/apps/sorting-visualizer'),
      '@pathFinder': path.resolve(__dirname, './src/apps/path-finder'),
    },
  },
  base: '/algo-visualizers/',
  build: {
    outDir: 'dist',  // ✅ Change from 'docs' to 'dist'
  },
});
