<template>
  <!-- Modal ... -->
  <div v-if="showModal" @click="closeModal" class="modal-mask"></div>
  <focus-trap :active="showModal" :escape-deactivates="false">
    <transition name="modal">
      <div
        v-if="showModal"
        @keyup.esc="closeModal"
        class="modal-container"
        tabindex="-1"
      >
        <span
          @click="closeModal"
          @keyup.enter="closeModal"
          class="cerrar"
          ontouchstart=""
          tabindex="0"
          >&times;</span
        >
        <div class="modal-content-container">
          <div class="modal-cabecera">
            <h2>Las recetas de Lita</h2>
            <img
              :src="`${faviconURL}`"
              alt="Símbolo del sitio. Una
          jarra celeste, dos huevos y un tazón con un batidor."
            />
          </div>
          <ul class="modal-contenido">
            <NavigationBarModalMedidasEquivalencias @emite="closeModal" />
            <li>
              <span>Categorías:</span>
              <ul>
                <li
                  v-for="(category, index) in Categories"
                  @click="seleccionarCategoria"
                  @keyup.enter="seleccionarCategoria"
                  :key="index"
                  :data-id="category.id"
                  ontouchstart=""
                  tabindex="0"
                >
                  {{ category.title }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </focus-trap>
</template>

<script>
import NavigationBarModalMedidasEquivalencias from "./NavigationBarModalMedidasEquivalencias.vue";
export default {
  emits: ["emitecerrar"],
  name: "NavigationBarModal",
  components: {
    NavigationBarModalMedidasEquivalencias
  },
  props: {
    showModal: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      faviconURL: process.env.VUE_APP_FAVICONURL,
      Categories: [
        {
          title: "Todas las recetas",
          id: ""
        },
        {
          title: "Postres",
          id: "Postres"
        },
        {
          title: "Pan",
          id: "Pan"
        }
      ]
    };
  },
  methods: {
    closeModal() {
      this.$emit("emitecerrar");
    },
    seleccionarCategoria() {
      let name = event.currentTarget.textContent;
      let id = event.currentTarget.getAttribute("data-id");
      this.$store.commit("searchAndFilter/actualizarCategory", {
        name,
        id
      });
      this.closeModal();
      // Escrolear hasta el borde del NavBar si la altura total del scroll menos el header es mayor a la altura del viewport(ventana: window.innerheight) o hasta top si es menor. Se espera a que se rendericen las cards y luego se ejecuta.
      this.$nextTick(() => {
        if (
          document.body.scrollHeight -
            this.$store.state.stickyNavBar.NavBarOffSetTop >=
          window.innerHeight
        ) {
          window.scrollTo(0, this.$store.state.stickyNavBar.NavBarOffSetTop);
        } else {
          window.scrollTo(0, 0);
        }
      });
    }
  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* width: 100%;
  height: 100vh; */
  background-color: rgba(0, 0, 0, 0.4) !important; /* ; Black w/ opacity */
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  /* transition: opacity 0.3s ease;  Ajustar transición hacia adentro y ahcia afuer, tal vez en los transition effects.*/
}
.modal-container {
  outline: 0;
  position: fixed; /* Stay in place */
  z-index: 9999;
  left: 5%;
  top: 5%;
  height: 90%;
  width: 90%;
  margin: 0px auto;
  border-radius: 0.5%;
  font-family: Helvetica, Arial, sans-serif;
  box-shadow: 0px 0px 5px #5688ba;
}
/* Vue transition functionality */
.modal-enter-active {
  transition: all 0.3s ease-out;
}
.modal-enter-from {
  transform: translatey(500px);
  opacity: 0;
}
.modal-leave-to {
  opacity: 0;
}
/* El botón para cerrar */
.cerrar {
  color: black;
  background-color: transparent;
  font-size: 3rem;
  font-weight: bold;
  position: absolute;
  right: 0%;
  margin-top: -0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  z-index: 5;
}
@media (hover: hover) {
  .cerrar:hover {
    color: grey;
  }
}
.cerrar:active {
  text-shadow: 0 0 0.25rem black;
  color: grey;
  font-weight: 500;
}
/*-----contenido modal-------*/
.modal-content-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: var(--modal-background);
}
.modal-cabecera {
  display: block;
  width: 100%;
  background-color: #5688ba;
  align-items: center;
}
.modal-cabecera > h2 {
  background-color: #5688ba;
  color: black;
  padding-right: 2rem;
  padding-left: 0.25rem;
  font-size: 2rem;
  text-align: center;
}
.modal-cabecera > img {
  background-color: #5688ba;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 4rem;
}
.modal-contenido {
  overflow: auto;
  display: block;
  width: 100%;
  list-style-type: none;
}
.modal-contenido > li:nth-child(2) {
  font-weight: bolder;
  font-size: 1.7rem;
  color: #5688ba;
}
.modal-contenido > li:nth-child(2) > span {
  display: inline-block;
  text-align: left;
  margin: 0.75rem 0 0.75rem 0.5rem;
  color: var(--modal-nav-color);
}
.modal-contenido > li > ul {
  list-style-type: none;
}
.modal-contenido > li > ul > li {
  text-align: center;
  background-color: black;
  width: 100%;
  padding: 0.5rem 0;
  border-bottom: 0.05rem solid grey;
}
@media (hover: hover) {
  .modal-contenido > li > ul > li:hover {
    background-color: #5688ba;
    color: black;
    cursor: pointer;
  }
}
.modal-contenido > li > ul > li:active {
  box-shadow: inset 0px 0px 0.3rem black;
  background-color: #5688ba;
  color: black;
}
</style>
