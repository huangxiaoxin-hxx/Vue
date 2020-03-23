import * as types from '../types'

const state = {
  tickets: [],
  wallet: 0
}

const getters = {
  tickets: state => state.tickets
}

const mutations = {
  [types.ADD_TICKET](state, ticket) {
    state.tickets = [ticket, ...state.tickets]
  }
}

const actions = {
  addTicket ({commit}, ticket) {
    commit(types.ADD_TICKET, ticket)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}