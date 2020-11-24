<template>
  <!-- Menú -->
  <nav>
    <ul class="NavBar" :class="{ sticky: active }" ref="NavBar">
      <NavigationBarCategoriaSeleccionada />
      <NavigationBarSearchFilter />
      <NavigationBarMenuHamburguesa @emite="openModalNav" />
    </ul>
    <NavigationBarModal
      @emitecerrar="closeModalNav"
      :show-modal="showModalNav"
    />
  </nav>
</template>

<script>
import NavigationBarModal from "./NavigationBarModal.vue";
import NavigationBarCategoriaSeleccionada from "./NavigationBarCategoriaSeleccionada.vue";
import NavigationBarSearchFilter from "./NavigationBarSearchFilter.vue";
import NavigationBarMenuHamburguesa from "./NavigationBarMenuHamburguesa.vue";

export default {
  name: "NavigationBar",
  components: {
    NavigationBarCategoriaSeleccionada,
    NavigationBarSearchFilter,
    NavigationBarMenuHamburguesa,
    NavigationBarModal
  },
  data() {
    return {
      showModalNav: false,
      active: false
    };
  },
  watch: {
    "$store.state.reactiveScrollAndResize.scroll": {
      handler() {
        if (
          window.pageYOffset >
          1 + this.$store.state.stickyNavBar.NavBarOffSetTop
        ) {
          this.active = true;
        } else {
          this.active = false;
        }
      }
    },
    "$store.state.reactiveScrollAndResize.resizeHeight": {
      handler() {
        let value = document.getElementById("titulo-principal").offsetHeight;
        this.$store.commit("stickyNavBar/actualizarNavBarOffSetTop", value);
        let NavBarHeight = this.$refs.NavBar.offsetHeight;
        this.$store.commit("stickyNavBar/actualizarNavBarHeight", NavBarHeight);
      }
    },
    "$store.state.reactiveScrollAndResize.resizeWidth": {
      handler() {
        let value = document.getElementById("titulo-principal").offsetHeight;
        this.$store.commit("stickyNavBar/actualizarNavBarOffSetTop", value);
        let NavBarHeight = this.$refs.NavBar.offsetHeight;
        this.$store.commit("stickyNavBar/actualizarNavBarHeight", NavBarHeight);
      }
    }
  },
  mounted() {
    let NavBarOffsetTop = this.$refs.NavBar.offsetTop;
    this.$store.commit(
      "stickyNavBar/actualizarNavBarOffSetTop",
      NavBarOffsetTop
    );
    let NavBarHeight = this.$refs.NavBar.offsetHeight;
    this.$store.commit("stickyNavBar/actualizarNavBarHeight", NavBarHeight);
  },
  methods: {
    openModalNav() {
      (this.showModalNav = true), (document.body.style.overflow = "hidden");
    },
    closeModalNav() {
      (this.showModalNav = false), (document.body.style.overflow = "auto");
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
