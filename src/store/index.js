import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import chapter from './chapter'
import verse from './verse'
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    chapter,
    verse
  },
  state: {},
  actions: {},
  mutations: {},
  getters: {}
})

export default store
