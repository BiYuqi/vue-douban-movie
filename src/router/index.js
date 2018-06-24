import Vue from 'vue'
import Router from 'vue-router'
import BaseTemp from '@/views/DashBoard/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard_index',
      component: BaseTemp,
      redirect: '/filming',
      children: [
        {
          path: '/filming',
          name: 'filming_index',
          component: () => import('@/views/HotFilming/index.vue')
        },
        {
          path: '/look',
          name: 'look_index',
          component: () => import('@/views/LookMovie/index.vue')
        },
        {
          path: '/myself',
          name: 'myself_index',
          component: () => import('@/views/MySelf/index.vue')
        }
      ]
    }
  ]
})
