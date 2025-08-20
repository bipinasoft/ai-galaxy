import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ai-galaxy/',
  // Note: do not override esbuild loader here; prefer .jsx files for JSX sources
  build: {
    outDir: 'dist',
  },
  esbuild: {
    loader: "jsx",   // must be a string, e.g. "tsx", "jsx", "json"
  },
  server: {
    port: 3000,
    open: true
  }
})