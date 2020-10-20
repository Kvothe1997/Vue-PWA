<template>
  <li class="searchLi">
    <input
      type="text"
      v-model="buscar"
      class="searchTerm"
      placeholder="Búsqueda..."
    />
    <div class="searchButton">
      <font-awesome-icon :icon="['fas', 'search']" />
    </div>
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
  width: 15rem;
  margin: 0.25rem 1rem;
  align-self: center;
  display: flex;
  order: 1;
}
@media (min-width: 728px) {
  .searchLi {
    order: 2;
  }
}
.searchTerm {
  width: 100%;
  border: 3px solid black;
  border-right: none;
  padding: 0.05rem 0.25rem 0.05rem 0.25rem;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #5688ba;
  font-size: 1.4rem;
}
.searchTerm:focus {
  color: black;
}
.searchButton {
  width: 15%;
  border: 3px solid #000000;
  background: black;
  text-align: center;
  color: #5688ba;
  border-radius: 0 5px 5px 0;
  font-size: 1.4rem;
}
</style>
