import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      buscar: "",
    };
  },
  mutations: {
    actualizarBuscar(state, n) {
      state.buscar = n;
    },
  },
});
