import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'vant/lib/index.css';
import { Popup, Picker, Field, Form, Toast, Button, Tabbar, TabbarItem, Tab, Tabs, Calendar, Cell, Icon } from 'vant';

Vue.use(Toast);
Vue.use(Form);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Calendar);
Vue.use(Cell);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Field);
Vue.use(Picker);
Vue.use(Popup);

router.beforeEach((to, from, next) => {
  if(to.path === '/home'||to.path === '/admin'||to.path === '/me' || to.path === '/'){
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
  if (to.path === '/admin') {
    console.log(1)
    if (sessionStorage.getItem('adminInfo')) {
      next()
    } else {
      next({path:'/adminLogin'})
    }
  }
  // console.log(to)
  // console.log(from)
  store.dispatch('setFromPagePath',from.path)
  next()
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
