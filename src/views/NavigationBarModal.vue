<template>
  <!-- Modal ... -->
  <focus-trap :active="true" :escape-deactivates="false">
    <div @keyup.esc="closeModal" class="modal-container" tabindex="-1">
      <span
        @touchstart.passive="() => {}"
        @click="closeModal"
        @keyup.enter="closeModal"
        class="cerrar"
        tabindex="0"
        >&times;</span
      >
      <div class="modal-content-container">
        <div class="modal-cabecera">
          <h2>Las recetas de Lita</h2>
          <img
            :src="`${baseURL}img/icons/favicon.svg`"
            alt="Símbolo del sitio.
          Una jarra celeste, dos huevos y un tazón con un batidor."
          />
        </div>
        <ul class="modal-contenido">
          <li
            @touchstart.passive="() => {}"
            @click="openMedidasyEquivalenciasModal"
            @keyup.enter="openMedidasyEquivalenciasModal"
            tabindex="0"
          >
            Medidas y equivalencias
          </li>
          <!-- Aquí se renderizan las rutas "children" de "/menu" -->
          <router-view></router-view>
          <li>
            <span>Categorías:</span>
            <ul>
              <li
                v-for="(category, index) in this.$store.state.searchAndFilter
                  .Categories"
                @touchstart.passive="() => {}"
                @click="seleccionarCategoria"
                @keyup.enter="seleccionarCategoria"
                :key="index"
                :data-id="category.id"
                :data-index-number="category.indexNumber"
                tabindex="0"
              >
                {{ category.title }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </focus-trap>
</template>

<script>
export default {
  name: "NavigationBarModal",
  data() {
    return {
      baseURL: process.env.BASE_URL
    };
  },
  mounted() {
    document.body.style.overflow = "hidden";
    this.$store.commit(
      "blurredBackground/actualizarShowBlurredBackground",
      true
    );
  },
  unmounted() {
    document.body.style.overflow = "auto";
    this.$store.commit(
      "blurredBackground/actualizarShowBlurredBackground",
      false
    );
  },
  methods: {
    openMedidasyEquivalenciasModal() {
      this.$router.push(`${process.env.BASE_URL}menu/medidas_y_equivalencias`);
    },
    seleccionarCategoria() {
      let name = event.currentTarget.textContent,
        indexNumber = event.currentTarget.getAttribute("data-index-number");
      //Cierro el modal y pusheo la nueva ruta según la categoría seleccionada.
      if (name == "Todas las recetas") {
        this.$router.push({ name: "Home" });
      } else {
        let categoria = name.replace(/\s/g, "_");
        this.$router.push({
          name: "HomeWithCategory",
          params: { categoria, indexNumber }
        });
      }
    },
    closeModal() {
      if (this.$store.state.homeRouteNavigation.homeRoutePath === "") {
        this.$router.push({ name: "Home" });
      } else {
        this.$router.go(-1);
      }
    }
  }
};
</script>

<style scoped>
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
.modal-contenido > li {
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
.modal-contenido > li > ul > li,
.modal-contenido > li:nth-child(-n + 1) {
  text-align: center;
  background-color: black;
  width: 100%;
  padding: 0.5rem 0;
  border-bottom: 0.05rem solid grey;
}
@media (hover: hover) {
  .modal-contenido > li > ul > li:hover,
  .modal-contenido > li:nth-child(-n + 1):hover {
    background-color: #5688ba;
    color: black;
    cursor: pointer;
  }
}
.modal-contenido > li > ul > li:active,
.modal-contenido > li:nth-child(-n + 1):active {
  box-shadow: inset 0px 0px 0.3rem black;
  background-color: #5688ba;
  color: black;
}
</style>
