<template>
  <!-- Menú -->
  <nav>
    <ul class="NavBar" :class="{ sticky: active }" ref="NavBar">
      <CategoriaSeleccionada
        :categoria="this.$store.state.searchAndFilter.categoryName"
      />
      <SearchFilter />
      <MenuHamburguesa @emite="openModalNav" />
    </ul>
    <ModalNavegacion :showModal="showModalNav" @emitecerrar="closeModalNav" />
  </nav>
</template>

<script>
import ModalNavegacion from "./ModalNavegacion.vue";
import CategoriaSeleccionada from "./CategoriaSeleccionada.vue";
import SearchFilter from "./SearchFilter.vue";
import MenuHamburguesa from "./MenuHamburguesa.vue";

export default {
  data() {
    return {
      showModalNav: false,
      active: false,
    };
  },
  name: "NavigationBar",
  components: {
    CategoriaSeleccionada,
    SearchFilter,
    MenuHamburguesa,
    ModalNavegacion,
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
    },
  },
  watch: {
    "$store.state.reactiveScrollAndResize.scroll": {
      handler() {
        if (
          window.pageYOffset >= this.$store.state.stickyNavBar.NavBarOffSetTop
        ) {
          this.active = true;
        } else {
          this.active = false;
        }
      },
    },
    "$store.state.reactiveScrollAndResize.resizeHeight": {
      handler() {
        let value = document.getElementById("titulo-principal").offsetHeight;
        this.$store.commit("stickyNavBar/actualizarNavBarOffSetTop", value);
        let NavBarHeight = this.$refs.NavBar.offsetHeight;
        this.$store.commit("stickyNavBar/actualizarNavBarHeight", NavBarHeight);
      },
    },
    "$store.state.reactiveScrollAndResize.resizeWidth": {
      handler() {
        let value = document.getElementById("titulo-principal").offsetHeight;
        this.$store.commit("stickyNavBar/actualizarNavBarOffSetTop", value);
        let NavBarHeight = this.$refs.NavBar.offsetHeight;
        this.$store.commit("stickyNavBar/actualizarNavBarHeight", NavBarHeight);
      },
    },
  },
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
