import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import App from './App.vue'
import '@arco-design/web-vue/dist/arco.css'
import router from '@/router/index'
import microApp from '@micro-zoe/micro-app'

const app = createApp(App)
microApp.start()
app.use(router).use(ArcoVue)
app.mount('#app')