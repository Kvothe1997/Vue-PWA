<template>
  <!-- Card -->
  <article @click="openModal">
    <h1>{{ title }}</h1>
    <img :src="require(`../assets/Images/${imageUrl}`)" :alt="imageAlt" />
  </article>

  <!-- Modal ... -->
  <transition name="modal">
    <div v-if="showModal" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <span @click="closeModal" class="cerrar" ontouchstart=""
            >&times;</span
          >
          <h2>{{ title }}</h2>
          <div class="modalGrid">
            <img
              :src="require(`../assets/Images/${imageUrl}`)"
              :alt="imageAlt"
            />
            <div class="ingredientes" v-html="recetaIngredientes"></div>
            <div class="modalContent" v-html="recetaContenido"></div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      recetaIngredientes: "",
      recetaContenido: ""
    };
  },
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
    }
  }
};
</script>

<style scoped>
article {
  margin: 15px 0px;
  vertical-align: middle;
  border-radius: 5px 5px 5px 5px;
  box-shadow: 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
article > h1 {
  background-color: black;
  font-size: 2.25rem;
  text-align: center;
  color: white;
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
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4) !important; /* ; Black w/ opacity */
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  display: table;
  /* transition: opacity 0.3s ease;  Ajustar transición hacia adentro y ahcia afuer, tal vez en los transition effects.*/
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 90%;
  height: 90%;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 0.5%;
  /* transition: all 0.3s ease;  Arreglar*/
  font-family: Helvetica, Arial, sans-serif;
  overflow: auto; /*Enable scroll if needed*/
  box-shadow: 0px 0px 5px #5688ba;
}

.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
/* El botón para cerrar */
.cerrar {
  color: #5688ba;
  background-color: transparent;
  font-size: 3rem;
  font-weight: bold;
  position: fixed;
  right: 5.5%;
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
}
.ingredientes {
  margin: 0.75rem 0.4rem 0rem 0.4rem;
}
.ingredientes >>> h3 {
  font-weight: 800;
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}
.ingredientes >>> ul {
  margin-top: 10px;
  list-style: none;
  padding-left: 0;
  font-size: 2.25rem;
  font-weight: 400;
}
.ingredientes >>> ul li {
  position: relative;
  padding-left: 1.5rem; /* space to preserve indentation on wrap */
  margin-bottom: 1rem;
}
.ingredientes >>> ul li:before {
  content: ""; /* placeholder for the SVG */
  position: absolute;
  left: 0; /* place the SVG at the start of the padding */
  top: 0.55rem;
  width: 1rem;
  height: 1rem;
  background: url("data:image/svg+xml;utf8,<?xml version='1.0' encoding='utf-8'?><svg width='18' height='18' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z'/></svg>")
    no-repeat;
}
.modalContent {
  margin: 0.5rem 0.4rem 0.4rem 0.4rem;
  font-size: 2.25rem;
}
.modalContent >>> h3 {
  font-weight: 800;
  font-size: 2.5rem;
  margin-bottom: 0.25rem;
}
.modalContent >>> ol {
  list-style: none;
  font-weight: 400;
  margin-bottom: 2rem;
}
.modalContent >>> ol > li {
  list-style-position: inside;
  margin: 0 0 0.5rem 0;
  padding-top: 0.5rem;
  padding-left: 2.25rem;
  display: block;
  position: relative;
  counter-increment: inst;
  text-align: justify;
}
.modalContent >>> ol > li::before {
  content: counter(inst);
  border: 2px solid black;
  background: #5688ba;
  color: white;
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
.modalContent >>> ol > li:nth-child(n + 10) {
  padding-left: 3rem;
}
.modalContent >>> ol > li > p {
  text-align: justify;
  margin-left: 10%;
  margin-top: 2.5%;
  font-style: italic;
  font-size: 1.75rem;
  font-weight: 400;
}
.modalContent >>> ol > li > p > strong {
  color: #5688ba;
  -webkit-text-stroke: black;
  -webkit-text-stroke-width: 0.025rem;
}
.modalContent >>> ol > li > ul {
  margin-top: 10px;
  list-style: none;
  padding-left: 0;
  /* font-size: 2.25rem; */
  font-weight: 400;
}
.modalContent >>> ol > li > ul > li {
  position: relative;
  padding-left: 1.5rem; /* space to preserve indentation on wrap */
  margin-bottom: 1rem;
}
.modalContent >>> ol > li > ul > li:before {
  content: ""; /* placeholder for the SVG */
  position: absolute;
  left: 0; /* place the SVG at the start of the padding */
  top: 0.55rem;
  width: 1rem;
  height: 1rem;
  background: url("data:image/svg+xml;utf8,<?xml version='1.0' encoding='utf-8'?><svg width='18' height='18' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z'/></svg>")
    no-repeat;
}
.modalContent >>> ol > li > ol {
  list-style: none;
  font-weight: 400;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}
.modalContent >>> ol > li > ol > li {
  list-style-position: inside;
  margin: 0 0 0.5rem 0;
  padding-top: 0.5rem;
  padding-left: 1.75rem;
  display: block;
  position: relative;
  counter-increment: inst1;
  text-align: justify;
}
.modalContent >>> ol > li > ol > li::before {
  content: counter(inst1);
  border: 2px solid black;
  background: white;
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
.modalContent >>> ul {
  margin-top: 0.5rem;
  list-style: none;
  padding-left: 0;
  font-weight: 400;
}
.modalContent >>> ul > li {
  position: relative;
  padding-left: 1.5rem; /* space to preserve indentation on wrap */
  margin-bottom: 0.15rem;
}
.modalContent >>> ul > li::before {
  content: ""; /* placeholder for the SVG */
  position: absolute;
  left: 0; /* place the SVG at the start of the padding */
  top: 0.55rem;
  width: 1rem;
  height: 1rem;
  background: url("data:image/svg+xml;utf8,<?xml version='1.0' encoding='utf-8'?><svg width='18' height='18' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z'/></svg>")
    no-repeat;
}
.modalContent >>> p {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.modalContent >>> p:first-child {
  /* margin-bottom: 100rem; */
}
.modalContent >>> p > a {
  text-decoration: none;
  border: 0.15rem solid #5688ba;
  -webkit-text-stroke: black;
  -webkit-text-stroke-width: 0.05rem;
  font-size: 1.5rem;
  font-weight: bolder;
  /* background-color: black; */
  color: #5688ba;
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
  #ingredientes {
    margin: 1rem 0.8rem 0rem 0.8rem;
  }
  #ingredientes h3 {
    font-size: 1.75rem;
  }
  #ingredientes ul {
    font-size: 1.5rem;
  }
  #ingredientes ul li {
    margin-bottom: 0;
  }
  .modalGrid > img {
    width: 100%;
  }
  .modalContent {
    margin: 1rem 0.8rem 0.8rem 0.8rem;
    font-size: 1.5rem;
  }
  .modalContent >>> h3 {
    font-size: 1.75rem;
  }
  .modalContent >>> ol > li::before {
    font-size: 1.5rem;
    top: 0.55rem;
  }
  .modalContent >>> ol > li > p {
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
  #ingredientes {
    grid-area: b;
    align-self: center;
  }
  #ingredientes h3 {
    font-size: 1.75rem;
  }
  #ingredientes ul {
    font-size: 1.5rem;
  }
  #ingredientes ul li {
    margin-bottom: 0;
  }
  .modalContent >>> {
    grid-area: c;
    margin: 1rem 0.8rem 0.8rem 0.8rem;
    font-size: 1.5rem;
  }
  .modalContent >>> h3 {
    font-size: 1.75rem;
  }
  .modalContent >>> ol > li::before {
    font-size: 1.5rem;
    top: 0.55rem;
  }
  .modalContent >>> ol > li > p {
    font-size: 1.3rem;
  }
}
</style>
