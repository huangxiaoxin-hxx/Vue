// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'
import store from './vuex/store'
// import com from './vuex/modules/com'
Vue.use(Vant);
// Vue.use(ElementUI);
Vue.prototype.$http = axios

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if(to.name === 'Home'||to.name === 'Find'||to.name === 'Strategy'||to.name === 'Trip'||to.name === 'Me'){
    // com.commit('setShowTabBarTrue')
  } else {
    // com.commit('setShowTabBarFalse')
  }
  console.log(to)
  next()
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
