import { createRouter, createWebHashHistory, RouteRecordRaw, createWebHistory } from 'vue-router'
import Login from '@/pages/Login.vue'
import Layout from '@/layout/index.vue'
import { featureRouters } from './featureRouters'
export const routers: Array<RouteRecordRaw> = featureRouters
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    // redirect: '/scaner',
    children: routers
  },
  {
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由白名单
const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  next()
})

export default router
