const state = () => {
  return {
    NavBarOffSetTop: "",
    NavBarHeight: "",
  };
};

const mutations = {
  actualizarNavBarOffSetTop(state, n) {
    state.NavBarOffSetTop = n;
  },
  actualizarNavBarHeight(state, n) {
    state.NavBarHeight = n;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
