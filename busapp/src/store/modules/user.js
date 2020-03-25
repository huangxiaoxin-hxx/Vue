import * as types from '../types'

const state = {
  tickets: [],
  isShowBottomTabBar: true,
  fromPagePath: '',
  user: {}
}

const getters = {
  tickets: state => state.tickets,
  isShowBottomTabBar: state => state.isShowBottomTabBar,
  fromPagePath: state => state.fromPagePath,
  user: state => state.user
}

const mutations = {
  [types.ADD_TICKET](state, ticket) {
    state.tickets = [ticket, ...state.tickets]
  },
  [types.COM_SET_SHOWTABBAR_TRUE] (state) {
    state.isShowBottomTabBar = true
  },
  [types.COM_SET_SHOWTABBAR_FALSE] (state) {
    state.isShowBottomTabBar = false
  },
  [types.COM_SET_FROM_PAGE_PATH] (state, path) {
    state.fromPagePath = path
  },
  [types.SAVE_USER] (state, data) {
    state.user = data
  },
  [types.SUB_BALANCE] (state, price) {
    state.user.wallet = state.user.wallet - price
  },
  [types.TICKET_STATE] (state, map) {
    state.tickets.map(item => {
      if(item.date == map.date && item.id == map.id) {
        item.state = false
        console.log(item)
        return
      }
      console.log('没找到')
    })
    console.log(state.tickets)
  },
  [types.DEL_USER_TICKET] (state, map) {
    state.tickets.map((item, index) => {
      if(item.date == map.date && item.id == map.id && item.username == map.username) {
        state.tickets.splice(index, 1)
        state.user.wallet = state.user.wallet + map.price
        return
      }
    })
  }
}

const actions = {
  addTicket ({commit}, ticket) {
    commit(types.ADD_TICKET, ticket)
  },
  setShowTabBarTrue ({commit}) {
    commit(types.COM_SET_SHOWTABBAR_TRUE)
    console.log('true')
  },
  setShowTabBarFalse ({commit}) {
    commit(types.COM_SET_SHOWTABBAR_FALSE)
    console.log('false')
  },
  setFromPagePath ({commit}, path) {
    commit(types.COM_SET_FROM_PAGE_PATH, path)
  },
  saveuser ({commit}, data) {
    commit(types.SAVE_USER, data)
  },
  subBalance ({commit}, price) {
    commit(types.SUB_BALANCE, price)
  },
  ticketState ({commit}, map) {
    commit(types.TICKET_STATE, map)
  },
  delUserTicket ({commit}, map) {
    commit(types.DEL_USER_TICKET, map)
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}