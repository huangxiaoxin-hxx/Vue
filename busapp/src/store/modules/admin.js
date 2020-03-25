import * as types from '../types'

const state = {
  admin: {},
  returnTicket: [],
  
}

const getters = {
  admin: state => state.admin,
  returnTicket: state => state.returnTicket,
}

const mutations = {

  [types.SAVE_ADMIN] (state, data) {
    state.admin = data
  },
  [types.ADD_RETURN_TICKET] (state, data) {
    state.returnTicket = [data, ...state.returnTicket]
  },
  [types.DEL_ADMIN_TICKET] (state, map) {
    state.returnTicket.map((item, index) => {
      if(item.date == map.date && item.id == map.id && item.username == map.username) {
        state.returnTicket.splice(index, 1)
        return
      }
    })
  },
  
}

const actions = {
  saveadmin ({commit}, data) {
    commit(types.SAVE_ADMIN, data)
  },
  addReturnTicket ({commit}, data) {
    commit(types.ADD_RETURN_TICKET, data)
  },
  delAdminTicket ({commit}, map) {
    commit(types.DEL_ADMIN_TICKET, map)
  },
  
}

export default {
  state,
  getters,
  mutations,
  actions
}