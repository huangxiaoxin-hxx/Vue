import * as types from '../types'

const state = {
  usualTicketData: [],
  holidaysTicketData: [],
  ticketStart: "",
  ticketEnd: "",
  ticketId: 0
}

const getters = {
  usualTicketData: state => state.usualTicketData,
  holidaysTicketData: state => state.holidaysTicketData,
  ticketStart: state => state.ticketStart,
  ticketEnd: state => state.ticketEnd,
  ticketId: state => state.ticketId
}

const mutations = {
  [types.USUAL_TICKET_SAVE_ALL] (state, data) {
    state.usualTicketData = data
  },
  [types.HOLIDAYS_TICKET_SAVE_ALL] (state, data) {
    state.holidaysTicketData = data
  },
  [types.DEL_TICKET] (state, id) {
    state.usualTicketData.map((item, index) => {
      if(item.id == id) {
        state.usualTicketData.splice(index, 1)
        return
      }
    })
    state.usualTicketData.map((item, index) => {
      if(item.id == id) {
        state.holidaysTicketData.splice(index, 1)
        return
      }
    })
  },
  [types.SET_TICKET_START] (state, value) {
    state.ticketStart = value
  },
  [types.SET_TICKET_END] (state, value) {
    state.ticketEnd = value
  },
  [types.SAVE_TICKET_ID] (state, id) {
    state.ticketId = id
  },
  [types.UPDATE_TICKET] () {
    state.usualTicketData.forEach(element => {
      if(element.id == state.ticketId) {
        element.start = state.ticketStart
        element.end = state.ticketEnd
        return
      }
    });
    state.holidaysTicketData.forEach(element => {
      if(element.id == state.ticketId) {
        element.start = state.ticketStart
        element.end = state.ticketEnd
        return
      }
    });
  }
}

const actions = {
  saveAllUsualTicket ({commit}, data) {
    commit(types.USUAL_TICKET_SAVE_ALL, data)
  },
  saveAllHolidaysTicket ({commit}, data) {
    commit(types.HOLIDAYS_TICKET_SAVE_ALL, data)
  },
  deleteTicket ({commit}, data) {
    commit(types.DEL_TICKET, data)
  },
  setTicketStart ({commit}, value) {
    commit(types.SET_TICKET_START, value)
  },
  setTicketEnd ({commit}, value) {
    commit(types.SET_TICKET_END, value)
  },
  saveTicketId ({commit}, id) {
    commit(types.SAVE_TICKET_ID, id)
  },
  updateTicketById ({commit}) {
    commit(types.UPDATE_TICKET)
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}