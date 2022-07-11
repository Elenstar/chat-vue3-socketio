import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null
  },
  getters: {
  },
  mutations: {
    LOGIN(state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
    }
  },
  actions: {
    login({ commit }, userData) {
      commit('LOGIN', userData)
    }
  },
  modules: {
  }
})
