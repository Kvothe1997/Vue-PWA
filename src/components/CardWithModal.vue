<template>
  <!-- Card -->
  <div class="protection">
    <article
      @click="openModal"
      @keyup.enter="openModal"
      tabindex="0"
      ontouchstart=""
    >
      <h1>{{ title }}</h1>
      <img :src="require(`../assets/Images/${imageUrl}`)" :alt="imageAlt" />
    </article>
  </div>

  <!-- Modal ... -->
  <div v-if="showModal" @click="closeModal" class="modal-mask"></div>
  <focus-trap :active="showModal" :escape-deactivates="false">
    <transition
      name="modal"
      @enter="setCerrarRightPosition"
      @after-enter="removeCerrarRightPosition"
    >
      <div
        v-if="showModal"
        @keyup.esc="closeModal"
        class="modal-container"
        tabindex="-1"
      >
        <span
          @click="closeModal"
          @keyup.enter="closeModal"
          ref="cerrar"
          class="cerrar"
          ontouchstart=""
          tabindex="0"
          >&times;</span
        >
        <h2>{{ title }}</h2>
        <div class="modalGrid">
          <img :src="require(`../assets/Images/${imageUrl}`)" :alt="imageAlt" />
          <div class="ingredientes" v-html="recetaIngredientes"></div>
          <div class="modalContent" v-html="recetaContenido"></div>
        </div>
      </div>
    </transition>
  </focus-trap>
</template>

<script>
export default {
  name: "CardWithModal",
  props: {
    title: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    },
    recetaUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showModal: false,
      recetaIngredientes: "",
      recetaContenido: ""
    };
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
          this.recetaContenido
        ] = await response.text().then(async function(text) {
          let recetaHtml = await parser.parseFromString(text, "text/html");
          return [
            await recetaHtml.getElementById("ingredientes").innerHTML,
            await recetaHtml.querySelector(".modalContent").innerHTML
          ];
        });
      } catch (error) {
        let message = error.statusText || "Ha ocurrido un error";
        this.recetaHtml = `Error ${error.status} : ${message}`;
      } finally {
        document.body.style.overflow = "hidden";
        this.showModal = true;
      }
    },
    closeModal() {
      this.showModal = false;
      document.body.style.overflow = "auto";
      this.setCerrarRightPosition();
    },
    setCerrarRightPosition() {
      this.$refs.cerrar.style.right = "0%";
    },
    removeCerrarRightPosition() {
      this.$refs.cerrar.removeAttribute("style");
    }
  }
};
</script>

<style scoped>
/* --- Masonry: Multicolumn --- */
.protection {
  display: block;
  -webkit-column-break-inside: avoid-column;
  page-break-inside: avoid-column;
  break-inside: avoid-column;
  padding-bottom: 0.75rem;
  padding-top: 0.75rem;
}
@media (min-width: 500px) {
  .protection {
    padding-bottom: 0.65rem;
    padding-top: 0.35rem;
  }
}
/* ------------- */
article {
  vertical-align: middle;
  border-radius: 5px 5px 5px 5px;
  box-shadow: 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.3s;
  transition: box-shadow 0.3s;
}
@media (hover: hover) {
  article:hover {
    transform: scale(1.025);
    box-shadow: 6px 10px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.19);
  }
}
article:focus {
  transform: scale(1.025);
  box-shadow: 6px 10px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.19);
}
article:active {
  transform: scale(0.975);
  box-shadow: 3px 7px 0 rgba(0, 0, 0, 0.2), 0 5px 9px 0 rgba(0, 0, 0, 0.19);
}
article > h1 {
  background-color: var(--header-card-background);
  font-size: 2.25rem;
  text-align: center;
  color: var(--header-card-color);
  padding-bottom: 0.25rem;
  border-radius: 5px 5px 0% 0%;
  cursor: pointer;
}
@media (min-width: 500px) {
  article > h1 {
    font-size: 1.4rem;
  }
}
article > img {
  height: 100%;
  width: 100%;
  border-radius: 0px 0px 1% 1%;
  vertical-align: middle;
  object-fit: contain;
  cursor: pointer;
  filter: var(--modal-recetas-img-filter);
}
/*------ modal---- */
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4) !important; /* ; Black w/ opacity */
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  display: table;
  /* transition: opacity 0.3s ease;  Ajustar transición hacia adentro y ahcia afuer, tal vez en los transition effects.*/
}
.modal-container {
  outline: 0;
  position: fixed; /* Stay in place */
  z-index: 9999;
  left: 5%;
  top: 5%;
  width: 90%;
  height: 90%;
  margin: 0px auto;
  background-color: var(--modal-background);
  color: var(--modal-color);
  border-radius: 0.5%;
  font-family: Helvetica, Arial, sans-serif;
  overflow: auto; /*Enable scroll if needed*/
  box-shadow: 0px 0px 5px #5688ba;
}
/* Vue transition functionality */
.modal-enter-from,
.modal-leave-to {
  transform: scale(0);
  opacity: 0;
}
.modal-enter-to,
.modal-leave-from {
  transform: scale(1);
  opacity: 1;
}
.modal-enter-active {
  transition: all 0.2s ease-out;
}
.modal-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
/* El botón para cerrar */
.cerrar {
  color: #5688ba;
  background-color: transparent;
  font-size: 3rem;
  font-weight: bold;
  position: fixed;
  right: 4.99999523162841875%;
  margin-top: -0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  z-index: 5;
}
@media (hover: hover) {
  .cerrar:hover {
    color: #b7cbdf;
  }
}
.cerrar:active {
  text-shadow: 0 0 0.25rem #5688ba;
  color: #b7cbdf;
  font-weight: 500;
}
@media (min-width: 500px) and (max-width: 900px) {
  .cerrar {
    right: 8.3154795441757122211003543782542%;
  }
}
@media (min-width: 900px) {
  .cerrar {
    right: 6.898865840349542%;
  }
}
.modal-container > h2 {
  text-align: center;
  color: #5688ba;
  font-size: 3rem;
  background-color: black;
  padding-left: 0.25rem;
  padding-right: 3rem;
  padding-bottom: 0.75rem;
}
.modalGrid > img {
  width: 100%;
  filter: var(--modal-recetas-img-filter);
}
.ingredientes {
  margin: 0.75rem 0.4rem 0rem 0.4rem;
}
.ingredientes ::v-deep(h3) {
  font-weight: 800;
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}
.ingredientes ::v-deep(ul) {
  margin-top: 10px;
  list-style: none;
  padding-left: 0;
  font-size: 2.25rem;
  font-weight: 400;
}
.ingredientes ::v-deep(ul li) {
  position: relative;
  padding-left: 1.5rem; /* space to preserve indentation on wrap */
  margin-bottom: 1rem;
}
.ingredientes ::v-deep(ul li:before) {
  content: ""; /* placeholder for the SVG */
  position: absolute;
  left: 0; /* place the SVG at the start of the padding */
  top: 0.55rem;
  width: 1rem;
  height: 1rem;
  background: var(--modal-recetas-check-svg);
}
.modalContent {
  margin: 0.5rem 0.4rem 0.4rem 0.4rem;
  font-size: 2.25rem;
}
.modalContent ::v-deep(h3) {
  font-weight: 800;
  font-size: 2.5rem;
  margin-bottom: 0.25rem;
}
.modalContent ::v-deep(ol) {
  list-style: none;
  font-weight: 400;
  margin-bottom: 2rem;
}
.modalContent ::v-deep(ol > li) {
  list-style-position: inside;
  margin: 0 0 0.5rem 0;
  padding-top: 0.5rem;
  padding-left: 2.25rem;
  display: block;
  position: relative;
  counter-increment: inst;
  text-align: justify;
}
.modalContent ::v-deep(ol > li::before) {
  content: counter(inst);
  border: 2px solid black;
  background: #5688ba;
  color: var(--modal-recetas-numero-white);
  -webkit-text-stroke: black;
  -webkit-text-stroke-width: 0.075rem;
  border-radius: 0.2rem;
  font-size: 1.75rem;
  font-weight: 800;
  text-align: center;
  padding: 0 0.25rem;
  left: 0%;
  top: 0.8rem;
  position: absolute;
}
.modalContent ::v-deep(ol > li:nth-child(n + 10)) {
  padding-left: 3rem;
}
.modalContent ::v-deep(ol > li > p) {
  text-align: justify;
  margin-left: 10%;
  margin-top: 2.5%;
  font-style: italic;
  font-size: 1.75rem;
  font-weight: 400;
}
.modalContent ::v-deep(ol > li > p > strong) {
  color: var(--modal-recetas-nota-color);
  -webkit-text-stroke: black;
  -webkit-text-stroke-width: 0.025rem;
}
.modalContent ::v-deep(ol > li > ul) {
  margin-top: 10px;
  list-style: none;
  padding-left: 0;
  /* font-size: 2.25rem; */
  font-weight: 400;
}
.modalContent ::v-deep(ol > li > ul > li) {
  position: relative;
  padding-left: 1.5rem; /* space to preserve indentation on wrap */
  margin-bottom: 1rem;
}
.modalContent ::v-deep(ol > li > ul > li:before) {
  content: ""; /* placeholder for the SVG */
  position: absolute;
  left: 0; /* place the SVG at the start of the padding */
  top: 0.55rem;
  width: 1rem;
  height: 1rem;
  background: var(--modal-recetas-check-svg);
}
.modalContent ::v-deep(ol > li > ol) {
  list-style: none;
  font-weight: 400;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}
.modalContent ::v-deep(ol > li > ol > li) {
  list-style-position: inside;
  margin: 0 0 0.5rem 0;
  padding-top: 0.5rem;
  padding-left: 1.75rem;
  display: block;
  position: relative;
  counter-increment: inst1;
  text-align: justify;
}
.modalContent ::v-deep(ol > li > ol > li::before) {
  content: counter(inst1);
  border: 2px solid black;
  background: var(--modal-recetas-numero-white);
  color: #5688ba;
  -webkit-text-stroke: black;
  -webkit-text-stroke-width: 0.075rem;
  border-radius: 0.2rem;
  font-size: 1.25rem;
  font-weight: 800;
  text-align: center;
  padding: 0 0.25rem;
  left: 0%;
  top: 0.8rem;
  position: absolute;
}
.modalContent ::v-deep(ul) {
  margin-top: 0.5rem;
  list-style: none;
  padding-left: 0;
  font-weight: 400;
}
.modalContent ::v-deep(ul > li) {
  position: relative;
  padding-left: 1.5rem; /* space to preserve indentation on wrap */
  margin-bottom: 0.15rem;
}
.modalContent ::v-deep(ul > li::before) {
  content: ""; /* placeholder for the SVG */
  position: absolute;
  left: 0; /* place the SVG at the start of the padding */
  top: 0.55rem;
  width: 1rem;
  height: 1rem;
  background: var(--modal-recetas-check-svg);
}
.modalContent ::v-deep(p) {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.modalContent ::v-deep(p > a) {
  text-decoration: none;
  border: 0.15rem solid var(--modal-recetas-referencia-border);
  -webkit-text-stroke: black;
  -webkit-text-stroke-width: 0.05rem;
  font-size: 1.5rem;
  font-weight: bolder;
  color: var(--modal-recetas-referencia-color);
  padding: 0.1rem 1rem;
  border-radius: 500px;
  margin: auto;
}
/* Mediante media queries se ajusta el modal para 2 tipos de pantalla (laptop:>1000px y ventana en laptop a la mitad: entre 500px y 1000px). Por defecto el estilo está orientado a celular(<500px). */
@media (min-width: 500px) and (max-width: 1000px) {
  .modal-container h2 {
    font-size: 3rem;
    padding-left: 0.25rem;
    padding-right: 3rem;
    padding-bottom: 1rem;
  }
  .ingredientes {
    margin: 1rem 0.8rem 0rem 0.8rem;
  }
  .ingredientes ::v-deep(h3) {
    font-size: 1.75rem;
  }
  .ingredientes ::v-deep(ul) {
    font-size: 1.5rem;
  }
  .ingredientes ::v-deep(ul li) {
    margin-bottom: 0;
  }
  .modalGrid > img {
    width: 100%;
  }
  .modalContent {
    margin: 1rem 0.8rem 0.8rem 0.8rem;
    font-size: 1.5rem;
  }
  .modalContent ::v-deep(h3) {
    font-size: 1.75rem;
  }
  .modalContent ::v-deep(ol > li::before) {
    font-size: 1.5rem;
    top: 0.55rem;
  }
  .modalContent ::v-deep(ol > li > p) {
    font-size: 1.3rem;
  }
}
@media (min-width: 1000px) {
  .modal-container h2 {
    font-size: 3rem;
    padding-left: 5rem;
    padding-right: 5rem;
    padding-bottom: 1rem;
  }
  .modalGrid {
    position: relative;
    padding: 2%;
    display: grid;
    grid:
      "a b"
      "c c";
    grid-template-columns: 60% 40%;
    grid-template-rows: auto auto;
    column-gap: 1%;
    justify-content: center;
  }
  .modalGrid > img {
    grid-area: a;
    max-width: 70%;
    margin: auto;
  }
  .ingredientes {
    grid-area: b;
    align-self: center;
  }
  .ingredientes ::v-deep(h3) {
    font-size: 1.75rem;
  }
  .ingredientes ::v-deep(ul) {
    font-size: 1.5rem;
  }
  .ingredientes ::v-deep(ul li) {
    margin-bottom: 0;
  }
  .modalContent {
    grid-area: c;
    margin: 1rem 0.8rem 0.8rem 0.8rem;
    font-size: 1.5rem;
  }
  .modalContent ::v-deep(h3) {
    font-size: 1.75rem;
  }
  .modalContent ::v-deep(ol > li::before) {
    font-size: 1.5rem;
    top: 0.55rem;
  }
  .modalContent ::v-deep(ol > li > p) {
    font-size: 1.3rem;
  }
}
</style>
