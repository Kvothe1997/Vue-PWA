const state = () => {
  return {
    scroll: "",
    resizeHeight: "",
    resizeWidth: ""
  };
};

const mutations = {
  actualizarScroll(state, n) {
    state.scroll = n;
  },
  actualizarResize(state, { height, width }) {
    state.resizeHeight = height;
    state.resizeWidth = width;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
