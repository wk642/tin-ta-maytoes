import { defineConfig } from 'vite'
import path from 'path'

import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // root: path.resolve(__dirname, 'client'), // set root to your client folder
  resolve: {
    alias: {
      // src: path.resolve(__dirname, 'client'), // so 'src/' points to 'client/'
    },
  },
  build: {
    outDir: path.resolve(__dirname, '../dist'), // render will be putting docs into dist, set dist
    emptyOutDir: true,
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})