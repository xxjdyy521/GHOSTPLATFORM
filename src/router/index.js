import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/layouts/Home'
import HomePage from '@/views/home/HomePage'
import test1 from '@/views/test/test1'
import test2 from '@/views/test/test2'

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
        children:[]
      },{
        path:'/test1',
        name: 'test1',
        component: test1,
        children:[]
      },{
        path:'/test2',
        name: 'test2',
        component: test2,
        children:[]
      }]
    }
  ]
})
