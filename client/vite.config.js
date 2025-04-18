export default defineConfig({
  build: {
    ssr: true, 
    outDir: 'dist/server',
    rollupOptions: {
      input: 'src/entry-server.js',
    },
  }
});