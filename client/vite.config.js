import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, '../dist'), // render will be putting docs into dist, set dist
    emptyOutDir: true,
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})