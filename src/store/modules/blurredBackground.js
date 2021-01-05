const state = () => {
  return {
    showBlurredBackground: false
  };
};

const mutations = {
  actualizarShowBlurredBackground(state, n) {
    state.showBlurredBackground = n;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
