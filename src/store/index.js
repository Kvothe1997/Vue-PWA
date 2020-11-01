import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      buscar: "",
      categoryName: "Todas las recetas",
      categoryId: "",
      scroll: "",
      NavBarOffSetTop: "",
      resizeHeight: "",
      resizeWidth: "",
      NavBarHeight: "",
    };
  },
  mutations: {
    actualizarBuscar(state, n) {
      state.buscar = n;
    },
    actualizarCategory(state, { name, id }) {
      state.categoryName = name;
      state.categoryId = id;
    },
    actualizarScroll(state, n) {
      state.scroll = n;
    },
    actualizarNavBarOffSetTop(state, n) {
      state.NavBarOffSetTop = n;
    },
    actualizarResize(state, { height, width }) {
      state.resizeHeight = height;
      state.resizeWidth = width;
    },
    actualizarNavBarHeight(state, n) {
      state.NavBarHeight = n;
    },
  },
});
