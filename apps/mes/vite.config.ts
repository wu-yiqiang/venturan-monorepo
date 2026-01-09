import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    hmr: true,
    port: 8981,
    headers: {
      'access-control-allow-methods': '*',
      'access-control-expose-headers': '*',
      'access-control-allow-origin': '*'
    },
    proxy: {
      '/prod-api': {
        target: `http://192.168.1.222:8001/`,
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/prod-api/, '')
      }
    }
  }
})