import {createLogger, createStore} from 'vuex'
import socket from '@/store/modules/socket'

const debug = process.env.NODE_ENV !== 'production'

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
    },
    LOGOUT() {
      localStorage.removeItem('user')
      location.reload()
    },
  },
  actions: {
    login({ commit }, userData) {
      commit('LOGIN', userData)
    },
    logout({ commit }) {
      commit("LOGOUT")
    },
  },
  modules: {
    socket,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
