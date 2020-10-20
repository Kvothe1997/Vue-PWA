<template>
  <!-- Menú -->
  <nav v-resize="onResize">
    <ul class="NavBar">
      <MedidasEquivalencias v-if="!mostrar" />
      <SearchFilter />
      <MenuHamburguesa v-if="mostrar" />
    </ul>
  </nav>
</template>

<script>
import MedidasEquivalencias from "./MedidasEquivalencias.vue";
import SearchFilter from "./SearchFilter.vue";
import MenuHamburguesa from "./MenuHamburguesa.vue";

export default {
  data() {
    return {
      mostrar: false
    };
  },
  name: "NavigationBar",
  components: {
    MedidasEquivalencias,
    SearchFilter,
    MenuHamburguesa
  },
  mounted() {
    this.onResize();
  },

  methods: {
    onResize() {
      if (window.innerWidth < 640) {
        this.mostrar = true;
      } else {
        this.mostrar = false;
      }
    }
  }
};
</script>

<style scoped>
/*---- ul of Nav style -----*/
.NavBar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 0.5rem;
  background-color: #5688ba;
  list-style-type: none;
  padding: 0.25rem;
}
@media (min-width: 640px) {
  .NavBar {
    justify-content: space-between;
  }
}
</style>
