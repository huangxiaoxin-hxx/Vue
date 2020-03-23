import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'vant/lib/index.css';
import { Toast, Button, Tabbar, TabbarItem, Tab, Tabs, Calendar, Cell, Icon } from 'vant';

Vue.use(Toast);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Calendar);
Vue.use(Cell);
Vue.use(Icon);
Vue.use(Button);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
