<template>
  <!-- Menú -->
  <nav>
    <ul class="NavBar">
      <MedidasEquivalencias v-if="!mostrar || stateMenuHamburguesa" />
      <SearchFilter />
      <MenuHamburguesa
        v-if="mostrar"
        @emite="stateMenuHamburguesa = !stateMenuHamburguesa"
      />
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
      windowInnerWidth: window.innerWidth,
      stateMenuHamburguesa: false
    };
  },
  name: "NavigationBar",
  components: {
    MedidasEquivalencias,
    SearchFilter,
    MenuHamburguesa
  },
  created() {
    window.addEventListener("resize", () => {
      this.windowInnerWidth = window.innerWidth;
    });
  },
  computed: {
    mostrar() {
      return this.windowInnerWidth < 728 ? true : false;
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
@media (min-width: 728px) {
  .NavBar {
    justify-content: space-between;
  }
}
</style>
