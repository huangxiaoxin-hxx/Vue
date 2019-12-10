import * as types from '../types'

const state = {
  searchHistory: []
}
const getters = {
  searchHistory: state => state.searchHistory
}
const mutations = {
  [types.SEARCH_SAVE_SEARCH_HISTORY] (state, status) {
    state.searchHistory = status
  },
  [types.SEARCH_DELETE_ALL_SEARCH_HISTORY] (state) {
    state.searchHistory = []
  }
}
const actions = {
  saveSearchHistory ({commit, state}, query) {
    let searchHistory = [query, ...state.searchHistory.slice()]
    // console.log(searchHistory)
    searchHistory = [...new Set(searchHistory)]
    commit(types.SEARCH_SAVE_SEARCH_HISTORY, searchHistory)
  },
  deleteAllSearchHistory ({commit}) {
    commit(types.SEARCH_DELETE_ALL_SEARCH_HISTORY)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}