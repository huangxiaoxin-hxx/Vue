import * as types from '../types'

const state = {
  ticketData: []
}
const getters = {
  ticketData: state => state.ticketData
}
const mutations = {
  [types.TICKET_DEL_BYID] (state, id) {
    state.ticketData.forEach((val, index) => {
      if(val.id === id) {
        state.ticketData.splice(index,1)
      }
    });
  },
  [types.TICKET_SAVE_ALL] (state, data) {
    state.ticketData = data
  }
}
const actions = {
  deleteTicketById ({commit}, id) {
    commit(types.TICKET_DEL_BYID, id)
  },
  saveAllTicket ({commit}, data) {
    commit(types.TICKET_SAVE_ALL, data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}