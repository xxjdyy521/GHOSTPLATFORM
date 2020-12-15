import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HomePage from '@/views/home/HomePage'
import test2 from '@/views/home/test2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[{
        path:'/homepage',
        name: 'HomePage',
        component: HomePage,
        children:[{
          path:'/test2',
          name:'test2',
          component:test2
        }]
      }]
    }
  ]
})
