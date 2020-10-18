<template>
  <li class="searchLi">
    <input
      type="text"
      v-model="buscar"
      class="searchTerm"
      placeholder="Búsqueda..."
    />
    <button type="submit" class="searchButton">
      <font-awesome-icon :icon="['fas', 'search']" />
    </button>
  </li>
</template>

<script>
export default {
  name: "SearchFilter",

  computed: {
    buscar: {
      get() {
        return this.$store.state.buscar;
      },
      set(value) {
        this.$store.commit("actualizarBuscar", value);
      }
    }
  }
};
</script>

<style>
.searchLi {
  align-self: center;
  margin-left: auto;
  display: flex;
}
.searchTerm {
  width: 100%;
  border: 3px solid black;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #b7cbdf;
}
.searchTerm:focus {
  color: #5688ba;
}
.searchButton {
  width: 40px;
  height: 36px;
  border: 1px solid black;
  background: black;
  text-align: center;
  color: #5688ba;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}
</style>
