import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    text: 'Hello Vue!'
  },
  mutations: {
    setText: (state, payload) => {
      state.text = payload
    }
  },
  actions: {
    setText: (context, text) => {
      context.commit('setText', text)
    }
  }
})

export default store
