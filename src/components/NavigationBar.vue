<template>
  <!-- Menú -->
  <nav>
    <ul class="NavBar" :class="{ sticky: active }" ref="NavBar">
      <NavigationBarCategoriaSeleccionada />
      <NavigationBarSearchFilter />
      <NavigationBarMenuHamburguesa />
    </ul>
  </nav>
</template>

<script>
import NavigationBarCategoriaSeleccionada from "./NavigationBarCategoriaSeleccionada.vue";
import NavigationBarSearchFilter from "./NavigationBarSearchFilter.vue";
import NavigationBarMenuHamburguesa from "./NavigationBarMenuHamburguesa.vue";

export default {
  name: "NavigationBar",
  components: {
    NavigationBarCategoriaSeleccionada,
    NavigationBarSearchFilter,
    NavigationBarMenuHamburguesa
  },
  data() {
    return {
      active: false,
      stopScrollWatcher: "",
      stopHeightWatcher: "",
      stopWidthWatcher: ""
    };
  },
  activated() {
    this.SetNavBarHeight();
    this.CheckScrollPosition();
    //Se inician los watchers de scroll y resize para evitar el error al salir de Home. (En deactivated se elimina el watcher)
    this.stopScrollWatcher = this.$watch(
      () => this.$store.state.reactiveScrollAndResize.scroll,
      () => {
        this.CheckScrollPosition();
      }
    );
    this.stopHeightWatcher = this.$watch(
      () => this.$store.state.reactiveScrollAndResize.resizeHeight,
      () => {
        this.SetNavBarHeight();
        this.CheckScrollPosition();
      }
    );
    this.stopWidthWatcher = this.$watch(
      () => this.$store.state.reactiveScrollAndResize.resizeWidth,
      () => {
        this.SetNavBarHeight();
        this.CheckScrollPosition();
      }
    );
    // ---------------------------------------------
  },
  deactivated() {
    this.stopScrollWatcher();
    this.stopHeightWatcher();
    this.stopWidthWatcher();
  },
  methods: {
    SetNavBarHeight() {
      let NavBarHeight = this.$refs.NavBar.offsetHeight;
      this.$store.commit("stickyNavBar/actualizarNavBarHeight", NavBarHeight);
    },
    CheckScrollPosition() {
      if (
        window.pageYOffset >
        1 + this.$store.state.stickyNavBar.NavBarOffSetTop
      ) {
        this.active = true;
      } else {
        this.active = false;
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
  align-items: center;
  background-color: #5688ba;
  list-style-type: none;
  padding: 0.25rem;
}
@media (min-width: 713px) {
  .NavBar {
    justify-content: space-between;
  }
}
/* ----sticky NavBar ----*/
.sticky {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 800;
}
</style>
