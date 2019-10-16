const state = {
  height: 0
}
const mutations = {
  SetHeight(height) {
    state.height = height
  }
}

const actions = {
  getHeight({ commit }, data) {
    commit('SetHeight', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
