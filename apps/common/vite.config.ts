import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}
export default defineConfig({
  resolve: {
    alias: {
      '@': pathResolve('src/')
    }
  },
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    hmr: true,
    port: 8980,
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