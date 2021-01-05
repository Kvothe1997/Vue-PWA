const state = () => {
  return {
    homeRoutePath: ""
  };
};

const mutations = {
  actualizarHomeRoutePath(state, n) {
    state.homeRoutePath = n;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
