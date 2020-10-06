<template>
  <!-- Card -->
  <article @click="openModal">
    <h1>{{ title }}</h1>
    <img :src="require(`../assets/Images/${imageUrl}`)" :alt="imageAlt" />
  </article>

  <!-- Modal ... -->
  <div v-if="showModal" class="modal">
    <span @click="showModal = false" class="cerrar" ontouchstart=""
      >&times;</span
    >
    <h2>{{ title }}</h2>
    <div class="modalGrid">
      <img :src="require(`../assets/Images/${imageUrl}`)" :alt="imageAlt" />
      <div id="ingredientes" v-html="recetaIngredientes"></div>
      <div class="modalContent" v-html="recetaContenido"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      recetaIngredientes: "",
      recetaContenido: "",
    };
  },
  name: "CardWithModal",
  props: {
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
    recetaUrl: {
      type: String,
      required: true,
    },
  },
  methods: {
    async openModal() {
      //Hacemos fetch en la receta para pintar el html del modal y luego abrimos el modal
      try {
        let response = await fetch(this.recetaUrl);
        let parser = new DOMParser();
        if (!response.ok)
          throw { status: response.status, statusText: response.statusText };
        //Convierto respuesta a HTMLDocument y luego guardo strings con los pedazos de HTML que necesito:recetaIngredientes y recetaContenido
        [
          this.recetaIngredientes,
          this.recetaContenido,
        ] = await response.text().then(async function(text) {
          let recetaHtml = await parser.parseFromString(text, "text/html");
          return [
            await recetaHtml.getElementById("ingredientes").innerHTML,
            await recetaHtml.querySelector(".modalContent").innerHTML,
          ];
        });
      } catch (error) {
        let message = error.statusText || "Ha ocurrido un error";
        this.recetaHtml = `Error ${error.status} : ${message}`;
      } finally {
        this.showModal = true;
      }
    },
  },
};
</script>

<style scoped></style>
