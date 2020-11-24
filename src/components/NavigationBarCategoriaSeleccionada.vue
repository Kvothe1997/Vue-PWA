<template>
  <li class="categoriaSeleccionada">{{ categoria }}</li>
</template>

<script>
export default {
  name: "NavigationBarCategoriaSeleccionada",
  computed: {
    categoria() {
      return this.$store.state.searchAndFilter.categoryName;
    }
  }
};
</script>

<style scoped>
.categoriaSeleccionada {
  text-align: center;
  padding: 0rem 1rem;
  background-color: #5688ba;
  font-weight: bolder;
  font-size: 1.7rem;
  color: black;
  order: 3;
  flex-basis: 100%;
}
@media (min-width: 713px) {
  .categoriaSeleccionada {
    font-size: 1.4rem;
    order: 1;
    flex-basis: auto;
  }
}
</style>
