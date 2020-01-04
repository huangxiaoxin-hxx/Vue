import Vue from 'vue'
import Vuex from 'vuex'
import search from './modules/search'
import com from './modules/com'
import ticket from './modules/ticket'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    search,
    com,
    ticket
  }
})