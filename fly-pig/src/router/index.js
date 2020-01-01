import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Me from '@/pages/Me'
import Login from '@/pages/Login'
import MeOrder from '@/pages/MeOrder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Me',
      name: 'Me',
      component: Me
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/MeOrder',
      name: 'MeOrder',
      component: MeOrder
    }
  ]
})
