import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Layout,
      redirect: '/index',
      children: [
        {
          path: 'index',
          name: 'Driver-index',
          component: () => import('@/components/HelloWorld'),
          meta: { title: '引导指南', icon: 'el-icon-s-flag' }
        }
      ]
    }
  ]
})
