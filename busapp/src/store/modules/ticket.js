import * as types from '../types'

const state = {
  usualTicketData: [],
  holidaysTicketData: []
}

const getters = {
  usualTicketData: state => state.usualTicketData,
  holidaysTicketData: state => state.holidaysTicketData
}

const mutations = {
  [types.USUAL_TICKET_SAVE_ALL] (state, data) {
    state.usualTicketData = data
  },
  [types.HOLIDAYS_TICKET_SAVE_ALL] (state, data) {
    state.holidaysTicketData = data
  }
}

const actions = {
  saveAllUsualTicket ({commit}, data) {
    commit(types.USUAL_TICKET_SAVE_ALL, data)
  },
  saveAllHolidaysTicket ({commit}, data) {
    commit(types.HOLIDAYS_TICKET_SAVE_ALL, data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}