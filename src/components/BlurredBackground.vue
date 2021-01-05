<template>
  <div
    v-if="$store.state.blurredBackground.showBlurredBackground"
    @click.self="closeBlurredBackground"
    class="modal-mask"
  ></div>
</template>

<script>
export default {
  name: "BlurredBackground",
  methods: {
    closeBlurredBackground() {
      if (this.$store.state.homeRouteNavigation.homeRoutePath === "") {
        this.$router.push({ name: "Home" });
      } else if (
        this.$router.currentRoute._rawValue.fullPath ==
        "/menu/medidas_y_equivalencias"
      ) {
        this.$router.go(-2);
      } else {
        this.$router.go(-1);
      }
    }
  }
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4) !important; /* ; Black w/ opacity */
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
}
</style>
