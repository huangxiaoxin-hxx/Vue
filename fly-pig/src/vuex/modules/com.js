import * as types from '../types'

const state = {
  isShowBottomTabBar: true,
  homeSwiperIndex: 0,
  fromPagePath: '',
  isLogin: false,
  isScroll: true,
  isScroll2: false
}
const getters = {
  isShowBottomTabBar: state => state.isShowBottomTabBar,
  homeSwiperIndex: state => state.homeSwiperIndex,
  fromPagePath: state => state.fromPagePath,
  isLogin: state => state.isLogin,
  isScroll: state => state.isScroll,
  isScroll2: state => state.isScroll2,
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
  },
  [types.COM_SET_FROM_PAGE_PATH] (state, path) {
    state.fromPagePath = path
  },
  [types.COM_SET_LOGIN] (state, bl) {
    state.isLogin = bl
  },
  [types.COM_SET_SCROLL] (state, bl) {
    state.isScroll = bl
  },
  [types.COM_SET_SCROLL2] (state, bl) {
    state.isScroll2 = bl
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
  },
  setFromPagePath ({commit}, path) {
    commit(types.COM_SET_FROM_PAGE_PATH, path)
  },
  setLogin ({commit}, bl) {
    commit(types.COM_SET_LOGIN, bl)
  },
  setScroll ({commit}, bl) {
    commit(types.COM_SET_SCROLL, bl)
  },
  setScroll2 ({commit}, bl) {
    commit(types.COM_SET_SCROLL2, bl)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}