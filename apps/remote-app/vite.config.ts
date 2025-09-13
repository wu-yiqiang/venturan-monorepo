import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, {resolve } from 'path'
import federation from "@originjs/vite-plugin-federation" // 模块联邦
import topLevelAwait from 'vite-plugin-top-level-await' // 顶层支持引入await

export default defineConfig({
  plugins: [
    vue(),
    // 模块联邦
    federation({
      name: 'remote_app', // 模块名称
      filename: 'remote-app.js', // 打包后主组件名
      exposes: {
        './settings': './src/components/settings.vue' // **导出包名**：导出包主入口
      },
      shared: [] // 共享第三方库
    }),
    topLevelAwait({
      promiseExportName: '__tla',
      promiseImportName: (i) => `__tla_${i}`
    })
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  // 为了提高远程请求组件请求速度，可以在打包配置里做一些处理
  build: {
    assetsInlineLimit: 40960, // 小于 40KB 的静态资源将被内联为 Base64,减少请求次数
    minify: true, // 开启 JS/CSS 压缩，减小体积
    cssCodeSplit: false, // 关闭 CSS 分割，CSS 内联到 HTML，减少请求次数
    sourcemap: false, // 不生成源码映射文件,减少包体积
    rollupOptions: {
      output: {
        minifyInternalExports: false // 保留内部模块导出变量名，便于调试（后期可关闭）
      }
    }
  }
})