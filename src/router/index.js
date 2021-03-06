import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: resolve => require(['@/components/index'], resolve),
    },
    {
      path: '/game',
      component: resolve => require(['@/components/page/game'], resolve),
    }
  ]
})
