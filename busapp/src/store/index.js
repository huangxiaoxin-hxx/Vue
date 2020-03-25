import Vue from 'vue'
import Vuex from 'vuex'
import ticket from './modules/ticket'
import user from './modules/user'
import admin from './modules/admin'



Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ticket,
    user,
    admin
  }
})
