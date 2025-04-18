import { defineConfig } from 'vite'
import path from 'path'
export default defineConfig({
  root: path.resolve(__dirname, 'client'), // set root to your client folder
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'), // so 'src/' points to 'client/'
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
})