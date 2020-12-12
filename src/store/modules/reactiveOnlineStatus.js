const state = () => {
  return {
    onlineStatus: ""
  };
};

const mutations = {
  actualizarOnlineStatus(state, n) {
    state.onlineStatus = n;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
