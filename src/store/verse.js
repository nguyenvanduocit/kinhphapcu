export default {
  namespaced: true,
  state: {
    verses: []
  },
  getters: {
    verses: state => state.verses
  },
  actions: {
    async fetch ({state, commit}) {
      let verses = await import('@/data/verses.json')
      commit('SET_VERSES', verses)
    }
  },
  mutations: {
    SET_VERSES: (state, verses) => {
      state.verses = verses
    }
  }
}
