import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import federation from '@originjs/vite-plugin-federation'

const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}
export default defineConfig({
  resolve: {
    alias: {
      '@': pathResolve('src/')
    }
  },
  plugins: [
    vue(),
    federation({
      name: 'host-app', // 主应用名称
      filename: 'remote-app.js',
      remotes: {
        remote_app: {
          // **模块名称**
          // 请求远程组件主入口，这里使用了环境变量，主要是为了开发和生成模式的切换方便
          external: `Promise.resolve('http://127.0.0.1:5500/dist/assets/remote-app.js')`, // 打包地址
          // external: `Promise.resolve('http://localhost:5173/settings')`,
          // 使用异步加载方式，防止请求时间过长，这也是为什么远程引用需要用vite-plugin-top-level-await的原因
          externalType: 'promise'
        }
      },
      // 远程组件使用的第三方包，需要原原本本在这里再复制一份，不需要其他处理。这里只是简单配置，也可以查看官方文档进行深入优化。
      shared: []
    })
  ],
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