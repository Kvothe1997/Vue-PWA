<template>
  <div class="wrapperForTransition">
    <div id="content" class="content">
      <Title />
      <NavigationBar />
      <CardsMasonry />
      <DarkModeButton />
    </div>
    <Footer />
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import NavigationBar from "../components/NavigationBar.vue";
import CardsMasonry from "../components/CardsMasonry.vue";
import DarkModeButton from "../components/DarkModeButton.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Home",
  components: {
    CardsMasonry,
    DarkModeButton,
    Footer,
    NavigationBar,
    Title
  },
  beforeRouteLeave(to, from) {
    this.$store.commit(
      "homeRouteNavigation/actualizarHomeRoutePath",
      from.fullPath
    );
  }
};
</script>

<style>
/* ---------footer always on bottom---------- */
.wrapperForTransition {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  flex-grow: 1;
  position: relative;
}
/* ---------------------------------------- */
</style>
