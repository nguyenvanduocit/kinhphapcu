export default {
  namespaced: true,
  state: {
    chapters: []
  },
  getters: {
    chapters: state => state.chapters
  },
  actions: {
    async fetch ({state, commit}) {
      let chapters = await import('@/data/chapters.json')
      commit('SET_CHAPTERS', chapters)
    }
  },
  mutations: {
    SET_CHAPTERS: (state, chapters) => {
      state.chapters = chapters
    }
  }
}
