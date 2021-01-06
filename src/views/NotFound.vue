<template>
  <div class="mainBox">
    <h1 class="title">Las<wbr /> recetas de <wbr />Lita</h1>
    <div class="boxContent">
      <h2 class="error">ERROR 404</h2>
      <p class="punchLine">
        Al parecer, la página que estás buscando no se encuentra en el menú.
      </p>
      <router-link class="linkInicio" :to="{ name: 'Home' }"
        >Inicio</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  mounted() {
    this.$store.commit(
      "blurredBackground/actualizarShowBlurredBackground",
      true
    );
  },
  unmounted() {
    this.$store.commit(
      "blurredBackground/actualizarShowBlurredBackground",
      false
    );
  }
};
</script>

<style scoped>
.mainBox {
  background-color: #274b6e;
  outline: 0;
  position: fixed; /* Stay in place */
  z-index: 9999;
  left: 5%;
  top: 5%;
  width: 90%;
  height: 90%;
  margin: 0px auto;
  border-radius: 0.5%;
  font-family: Helvetica, Arial, sans-serif;
  overflow: auto; /*Enable scroll if needed*/
  box-shadow: 0px 0px 5px #5688ba;
  display: flex;
  flex-direction: column;
}
.title {
  text-align: center;
  color: #5688ba;
  font-size: 3rem;
  background-color: black;
}
.boxContent {
  flex-grow: 1;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.error {
  border: 2px solid black;
  background: #5688ba;
  color: rgba(255, 255, 255, 0.77);
  -webkit-text-stroke: black;
  -webkit-text-stroke-width: 0.075rem;
  border-radius: 0.2rem;
  width: fit-content;
  height: fit-content;
  font-size: 2.25rem;
  font-weight: 800;
  text-align: center;
  padding: 0 0.25rem;
}
.punchLine {
  margin: 0.5rem 0.4rem 0.4rem 0.4rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.77);
  font-size: 1.75rem;
  text-align: center;
}
.linkInicio {
  text-decoration: none;
  border: 0.15rem solid #8fc7ff;
  -webkit-text-stroke: black;
  -webkit-text-stroke-width: 0.05rem;
  font-size: 1.5rem;
  font-weight: bolder;
  color: #8fc7ff;
  padding: 0.1rem 1rem;
  border-radius: 500px;
}
</style>
