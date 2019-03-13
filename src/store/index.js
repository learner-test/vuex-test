import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  count: 0,
  showFooter: false
}
const getters = {
  isShow (state) { // 方法名随意,主要是来承载变化的showFooter的值
    return state.showFooter
  },
  getChangedNum () { // 方法名随意,主要是用来承载变化的changableNum的值
    return state.count
  }
}
const mutations = {
  show (state) {
    state.showFooter = true
  },
  hide (state) {
    state.showFooter = false
  },
  increment (state) {
    state.count++
  }
}
const store = new Vuex.Store({
  state,
  getters,
  mutations
})

export default store
