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
  },
  activated() {
    if (this.$router.currentRoute._rawValue.name == "HomeWithCategory") {
      let indexNumber = this.$router.currentRoute._rawValue.params.indexNumber,
        name = this.$store.state.searchAndFilter.Categories[indexNumber].title,
        id = this.$store.state.searchAndFilter.Categories[indexNumber].id;
      this.$store.commit("searchAndFilter/actualizarCategory", {
        name,
        id,
        indexNumber
      });
    } else {
      let indexNumber = 0,
        name = this.$store.state.searchAndFilter.Categories[indexNumber].title,
        id = this.$store.state.searchAndFilter.Categories[indexNumber].id;
      this.$store.commit("searchAndFilter/actualizarCategory", {
        name,
        id,
        indexNumber
      });
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
