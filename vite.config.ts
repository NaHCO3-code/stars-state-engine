import { resolve } from 'path'; 
import { defineConfig } from 'vite'

export default defineConfig({
  base: "/muti-body",
  build:{
    outDir: "docs",
  },
  resolve:{
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  }
})
