const state = () => {
  return {
    buscar: "",
    Categories: [
      {
        indexNumber: 0,
        title: "Todas las recetas",
        id: ""
      },
      {
        indexNumber: 1,
        title: "Postres",
        id: "Postres"
      },
      {
        indexNumber: 2,
        title: "Pan",
        id: "Pan"
      },
      {
        indexNumber: 3,
        title: "Comida rápida",
        id: "Comida-rapida"
      }
    ],
    categoryName: "Todas las recetas",
    categoryId: "",
    categoryIndexNumber: 0
  };
};

const mutations = {
  actualizarBuscar(state, n) {
    state.buscar = n;
  },
  actualizarCategory(state, { name, id, indexNumber }) {
    state.categoryName = name;
    state.categoryId = id;
    state.categoryIndexNumber = indexNumber;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
