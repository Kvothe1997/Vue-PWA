<template>
  <li class="searchLi">
    <input
      v-model="buscar"
      type="text"
      class="searchTerm"
      placeholder="Buscar receta..."
      aria-label="Buscar receta"
    />
    <div class="searchButton">
      <font-awesome-icon :icon="['fas', 'search']" />
    </div>
  </li>
</template>

<script>
export default {
  name: "NavigationBarSearchFilter",
  computed: {
    buscar: {
      get() {
        return this.$store.state.searchAndFilter.buscar;
      },
      set(value) {
        this.$store.commit("searchAndFilter/actualizarBuscar", value);
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
  background-color: #5688ba;
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
  color: var(--searchBox-color);
  font-size: 1.4rem;
  background-color: var(--searchBox-background);
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
