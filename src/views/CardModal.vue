<template>
  <!-- Modal ... -->
  <focus-trap :active="true" :escape-deactivates="false">
    <div @keyup.esc="closeModal" class="modal-container" tabindex="-1">
      <span
        ref="cerrar"
        @touchstart.passive="() => {}"
        @click="closeModal"
        @keyup.enter="closeModal"
        class="cerrar"
        tabindex="0"
        >&times;</span
      >
      <h2>{{ $store.state.recetas.Recetas[indexNumber].title }}</h2>
      <div class="modalGrid">
        <img
          :width="$store.state.recetas.Recetas[indexNumber].imageWidth"
          :height="$store.state.recetas.Recetas[indexNumber].imageHeight"
          :src="
            require(`../assets/Images/${$store.state.recetas.Recetas[indexNumber].imageUrl}`)
          "
          :alt="$store.state.recetas.Recetas[indexNumber].imageAlt"
        />
        <div
          v-if="recetaIngredientes"
          class="ingredientes"
          v-html="recetaIngredientes"
        ></div>
        <div
          v-if="recetaContenido"
          class="modalContent"
          v-html="recetaContenido"
        ></div>
      </div>
    </div>
  </focus-trap>
</template>

<script>
export default {
  name: "CardModal",
  props: ["indexNumber"],
  data() {
    return {
      recetaIngredientes: null,
      recetaContenido: null
    };
  },
  created() {
    this.$watch(
      "this.$route.params",
      () => {
        this.openModal();
      },
      // fetch the data when the modal is created and the data is
      // already being observed
      { immediate: true }
    );
  },
  mounted() {
    document.body.style.overflow = "hidden";
    this.$store.commit(
      "blurredBackground/actualizarShowBlurredBackground",
      true
    );
    //Incrementa o establece en localStorage el númeroDeVisitas a la receta.
    let value = localStorage.getItem(this.indexNumber);
    localStorage.setItem(this.indexNumber, ++value);
  },
  unmounted() {
    this.$store.commit(
      "blurredBackground/actualizarShowBlurredBackground",
      false
    );
    document.body.style.overflow = "auto";
  },
  methods: {
    closeModal() {
      if (this.$store.state.homeRouteNavigation.homeRoutePath == "") {
        this.$router.push({ name: "Home" });
      } else {
        this.$router.go(-1);
      }
    },
    async openModal() {
      //Hacemos fetch en la receta para pintar el html del modal.
      try {
        let response = await fetch(
          this.$store.state.recetas.Recetas[this.indexNumber].recetaUrl
        );
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
        console.log(error);
        let message = error.statusText || "Ha ocurrido un error";
        console.log(`Error ${error.status} : ${message}`);
      }
    }
  }
};
</script>

<style scoped>
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
  height: auto;
  vertical-align: middle;
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
