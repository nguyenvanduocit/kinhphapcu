import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/about',
      name: 'About',
      component: () => import('@/components/pages/About')
    },
    {
      path: '/:chapter?/:verse?',
      name: 'Home',
      component: Home
    }
  ]
})
