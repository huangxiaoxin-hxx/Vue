import * as types from '../types'

const state = {
  isShowBottomTabBar: true,
  homeSwiperIndex: 1
}
const getters = {
  isShowBottomTabBar: state => state.isShowBottomTabBar,
  homeSwiperIndex: state => state.homeSwiperIndex
}
const mutations = {
  [types.COM_SET_SHOWTABBAR_TRUE] (state) {
    state.isShowBottomTabBar = true
  },
  [types.COM_SET_SHOWTABBAR_FALSE] (state) {
    state.isShowBottomTabBar = false
  },
  [types.COM_SET_HOME_SWIPER_INDEX] (state, index) {
    state.homeSwiperIndex = index
  }
}
const actions = {
  setShowTabBarTrue ({commit}) {
    commit(types.COM_SET_SHOWTABBAR_TRUE)
    console.log('true')
  },
  setShowTabBarFalse ({commit}) {
    commit(types.COM_SET_SHOWTABBAR_FALSE)
    console.log('false')
  },
  setHomeSwiperIndex ({commit}, index) {
    commit(types.COM_SET_HOME_SWIPER_INDEX, index)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}