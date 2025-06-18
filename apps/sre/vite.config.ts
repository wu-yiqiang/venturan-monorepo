import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
    host: '0.0.0.0',
    hmr: true,
    port: 8090,
    proxy: {
      '/prod-api': {
        target: `http://192.168.1.222:8000/`,
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/prod-api/, '')
      }
    },
  }
})