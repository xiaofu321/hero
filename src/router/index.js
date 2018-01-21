import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/tab/home'
import add from '@/components/tab/add'
import hero from '@/components/tab/hero'
import foo from '@/components/tab/foo'
import bar from '@/components/tab/bar'

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path:"/",
      redirect:'/tab/home'
    },
    {
      path:'/tab/home',
      component:home
    },
    {
      path: '/tab/add',
      component:add 
    },
    {
      path: '/tab/hero',
      name:"hero",
      component:hero 
    },
    {
      path: '/tab/foo',
      component:foo 
    },
    {
      path: '/tab/bar',
      component:bar 
    }
  ]
})
