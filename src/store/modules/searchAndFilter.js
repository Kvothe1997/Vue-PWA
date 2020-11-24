const state = () => {
  return {
    buscar: "",
    categoryName: "Todas las recetas",
    categoryId: ""
  };
};

const mutations = {
  actualizarBuscar(state, n) {
    state.buscar = n;
  },
  actualizarCategory(state, { name, id }) {
    state.categoryName = name;
    state.categoryId = id;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
