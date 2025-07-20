import Users from '@/pages/systems/users/index.vue'
import Roles from '@/pages/systems/roles/index.vue'

export const featureRouters = [
  {
    path: '/systems/roles',
    component: Roles,
    meta: {
      title: 'home.title',
      icon: 'home-o'
    }
  },
  {
    path: '/systems/users',
    component: Users,
    meta: {
      title: 'category.title',
      icon: 'qr'
    }
  }
]
