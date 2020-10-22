<template>
  <!-- Menú -->
  <nav>
    <ul class="NavBar">
      <MedidasEquivalencias v-if="stateMenuHamburguesa" />
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
  setup() {
    let stateMenuHamburguesa0 = "";
    let mostrar0 = "";
    if (window.innerWidth < 728) {
      stateMenuHamburguesa0 = false;
      mostrar0 = true;
    } else {
      stateMenuHamburguesa0 = true;
      mostrar0 = false;
    }
    return {
      stateMenuHamburguesa0,
      mostrar0
    };
  },
  data() {
    return {
      windowInnerWidth: window.innerWidth,
      stateMenuHamburguesa: this.stateMenuHamburguesa0,
      mostrar: this.mostrar0
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
  watch: {
    windowInnerWidth: function(newVal) {
      if (newVal < 728) {
        this.stateMenuHamburguesa = false;
        this.mostrar = true;
      } else {
        this.stateMenuHamburguesa = true;
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
@media (min-width: 728px) {
  .NavBar {
    justify-content: space-between;
  }
}
</style>
