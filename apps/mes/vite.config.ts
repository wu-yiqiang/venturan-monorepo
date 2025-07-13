import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [React()],
  server: {
    host: '0.0.0.0',
    hmr: true,
    port: 8981,
    proxy: {
      '/prod-api': {
        target: `http://192.168.1.222:8000/`,
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/prod-api/, '')
      }
    }
  }
})