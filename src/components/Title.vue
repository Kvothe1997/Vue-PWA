<template>
  <header ref="TitleBox">
    <h1 id="titulo-principal" class="tituloPrincipal">
      Las<wbr /> recetas de <wbr />Lita
    </h1>
  </header>
</template>

<script>
export default {
  name: "Title",
  data() {
    return {
      stopHeightWatcher: "",
      stopWidthWatcher: ""
    };
  },
  activated() {
    this.SetNavBarOffsetTop();
    //Se inician los watchers de scroll y resize para evitar el error al salir de Home. (En deactivated se elimina el watcher)
    this.stopHeightWatcher = this.$watch(
      () => this.$store.state.reactiveScrollAndResize.resizeHeight,
      () => {
        this.SetNavBarOffsetTop();
      }
    );
    this.stopWidthWatcher = this.$watch(
      () => this.$store.state.reactiveScrollAndResize.resizeWidth,
      () => {
        this.SetNavBarOffsetTop();
      }
    );
    // ---------------------------------------------
  },
  deactivated() {
    this.stopHeightWatcher();
    this.stopWidthWatcher();
  },
  methods: {
    SetNavBarOffsetTop() {
      let NavBarOffsetTop = this.$refs.TitleBox.offsetHeight;
      this.$store.commit(
        "stickyNavBar/actualizarNavBarOffSetTop",
        NavBarOffsetTop
      );
    }
  }
};
</script>

<style>
/* ---------Styles ---------- */
.tituloPrincipal {
  text-align: center;
  font-size: 4rem;
  font-weight: bolder;
  background-color: black;
  color: #5688ba;
  padding: 0.01rem 0.01rem;
}
</style>
