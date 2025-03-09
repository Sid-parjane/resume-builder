import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/resume-builder/", // 👈 MUST MATCH YOUR REPO NAME
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: "dist", // Ensure build output goes to dist/
  }
});
