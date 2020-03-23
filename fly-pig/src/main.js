// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'
import store from './vuex/store'
import 'amfe-flexible'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import monent from 'moment'
import momentTZ from 'moment-timezone'

Vue.use(ElementUI);
Vue.use(Vant);
Vue.use(monent).use(momentTZ);
// Vue.use(ElementUI);
Vue.prototype.$http = axios

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if(to.path === '/home'||to.path === '/find'||to.path === '/strategy'||to.path === '/trip'||to.path === '/me' || to.path === '/'){
    store.dispatch('setShowTabBarTrue')
  } else {
    store.dispatch('setShowTabBarFalse')
  } 
  if (to.path === '/me') {
    console.log(1)
    if (sessionStorage.getItem('userInfo')) {
      next()
    } else {
      next({path:'/login'})
    }
  } 
  // console.log(to)
  console.log(from)
  store.dispatch('setFromPagePath',from.path)
  next()
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  store
})
