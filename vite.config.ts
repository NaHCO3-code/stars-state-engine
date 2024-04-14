import { resolve } from 'path'; 
import { defineConfig } from 'vite'

export default defineConfig({
  base: "/stars-state-engine",
  build:{
    outDir: "docs",
  },
  resolve:{
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  }
})
