<template>
  <div class="cards-container" ref="cardsContainer">
    <Card
      v-for="Receta in RecetasRendered"
      :key="Receta.title"
      :title="Receta.title"
      :receta-index-number="Receta.indexNumber"
      :image-url="Receta.imageUrl"
      :image-width="Receta.imageWidth"
      :image-height="Receta.imageHeight"
      :image-alt="Receta.imageAlt"
      :receta-url="Receta.recetaUrl"
    />
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "CardsMasonry",
  components: {
    Card
  },
  data() {
    return {
      RecetasRendered: []
    };
  },
  computed: {
    RecetasFiltradasPorBuscar() {
      return this.$store.state.recetas.Recetas.filter(receta => {
        return receta.title
          .toLowerCase()
          .includes(this.$store.state.searchAndFilter.buscar.toLowerCase());
      });
    },
    RecetasFiltradasPorCategoria() {
      return this.RecetasFiltradasPorBuscar.filter(receta => {
        return receta.categoria
          .toLowerCase()
          .includes(this.$store.state.searchAndFilter.categoryId.toLowerCase());
      });
    }
  },
  watch: {
    RecetasFiltradasPorCategoria: {
      handler: function() {
        this.RecetasRendered = this.RecetasFiltradasPorCategoria.slice(0, 40);
        // Escrolear hasta el borde del NavBar si la altura total del scroll menos el header es mayor a la altura del viewport(ventana: window.innerheight) o hasta top si es menor. Se espera a que se rendericen las cards y luego se ejecuta. No se ejecutará cuando sea la primera vez que se ingresa a la ruta de home.
        if (this.$store.state.homeRouteNavigation.homeRoutePath != "") {
          this.$nextTick(() => {
            if (
              document.body.scrollHeight -
                this.$store.state.stickyNavBar.NavBarOffSetTop >=
              window.innerHeight
            ) {
              window.scrollTo(
                0,
                this.$store.state.stickyNavBar.NavBarOffSetTop
              );
            } else {
              window.scrollTo(0, 0);
            }
          });
        }
      },
      immediate: true
    },
    "$store.state.reactiveScrollAndResize.scroll": {
      handler() {
        this.scrollInfinito();
        this.stickyActivateAddPadding();
      }
    }
  },
  methods: {
    async scrollInfinito() {
      if (
        this.$refs.cardsContainer.getBoundingClientRect().bottom <
        window.innerHeight
      ) {
        let numeroRecetasFiltradas = this.RecetasFiltradasPorCategoria.length,
          numeroRecetasRenderizadas = this.RecetasRendered.length,
          numeroRecetasFaltantes =
            numeroRecetasFiltradas - numeroRecetasRenderizadas;

        if (numeroRecetasFaltantes !== 0) {
          let desde = numeroRecetasRenderizadas,
            hasta = numeroRecetasRenderizadas + 40,
            recetasToConcat = this.RecetasFiltradasPorCategoria.slice(
              desde,
              hasta
            );
          //Aquí se filtran las recetasToConcat que estén cacheadas solo cuando se esté offline
          recetasToConcat = await this.filterRecetasWithCachedImage(
            recetasToConcat
          );
          this.RecetasRendered = this.RecetasRendered.concat(recetasToConcat);
        }
      }
    },
    async filterRecetasWithCachedImage(recetasToConcat) {
      if (navigator.onLine === false) {
        let recetasWithCachedImage = new Array();
        for (const receta of recetasToConcat) {
          let cachedImageUrlName = new Request(
            require(`../assets/Images/${receta.imageUrl}`)
          ).url;
          await caches
            .match(cachedImageUrlName)
            .then(response => (response ? true : false))
            .then(imageIsCached => {
              if (imageIsCached) {
                //Solo si la imagen está cacheada, se mostrará la card.
                recetasWithCachedImage.push(receta);
              }
            });
        }
        return recetasWithCachedImage;
      } else {
        return recetasToConcat;
      }
    },
    stickyActivateAddPadding() {
      if (
        window.pageYOffset >
        1 + this.$store.state.stickyNavBar.NavBarOffSetTop
      ) {
        this.$refs.cardsContainer.style.paddingTop = `${this.$store.state.stickyNavBar.NavBarHeight}px`;
      } else {
        this.$refs.cardsContainer.style.paddingTop = "0px";
      }
    }
  }
};
</script>

<style scoped>
/* --- Masonry: Multicolumn --- */
.cards-container {
  margin: 0.25rem 1rem 0.75rem 1rem;
  display: block;
  gap: 1rem;
  columns: 1;
}
@media (min-width: 500px) {
  .cards-container {
    margin: 0.65rem 1rem 0.35rem 1rem;
    columns: 10rem;
  }
}
/* --- */
</style>
