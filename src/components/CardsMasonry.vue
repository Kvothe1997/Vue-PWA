<template>
  <div class="cards-container" ref="cardsContainer">
    <CardWithModal
      v-for="Receta in RecetasRendered"
      :key="Receta.title"
      :title="Receta.title"
      :imageUrl="Receta.imageUrl"
      :imageAlt="Receta.imageAlt"
      :recetaUrl="Receta.recetaUrl"
    />
  </div>
</template>

<script>
import CardWithModal from "./CardWithModal.vue";

export default {
  data() {
    return {
      RecetasRendered: [],
      Recetas: [
        {
          title: "Panqueques",
          imageUrl: "panqueques.webp",
          imageAlt: "Panqueques caseros sobre un plato blanco.",
          recetaUrl: "./recetas/Panqueques.html",
          categoria: "Postres",
        },
        {
          title: "Muffins",
          imageUrl: "muffins.webp",
          imageAlt:
            "6 Muffins caseros de maní y arándanos en una bandeja negra.",
          recetaUrl: "./recetas/Muffins.html",
          categoria: "Postres",
        },
        {
          title: "Pan de molde",
          imageUrl: "pan_molde.webp",
          imageAlt:
            "Pan de molde casero sobre bandeja de metal. A su costado hay un cuchillo con mango blanco.",
          recetaUrl: "./recetas/Pan_molde.html",
          categoria: "Pan",
        },
        {
          title: "Panqueques de avena",
          imageUrl: "panqueques_avena.webp",
          imageAlt:
            "Pila de panqueques de avena sobre plato blanco. Fondo de mesa de cocina difuminado.",
          recetaUrl: "./recetas/Panqueques_avena.html",
          categoria: "Postres",
        },
        {
          title: "Pie de maracuyá",
          imageUrl: "pie_maracuya.webp",
          imageAlt: "Pie de maracuyá casero.",
          recetaUrl: "./recetas/Pie_maracuya.html",
          categoria: "Postres",
        },
        {
          title: "Queque marmoleado",
          imageUrl: "queque_marmoleado.webp",
          imageAlt:
            "Queque marmoleado circular con cuchillo y espátula de mango blanco. Todo sobre superficie blanca.",
          recetaUrl: "./recetas/Queque_marmoleado.html",
          categoria: "Postres",
        },
        {
          title: "Torta selva negra",
          imageUrl: "selva_negra.webp",
          imageAlt:
            "Pedazo de torta selva negra sobre plato blanco. Torta selva negra detrás desenfocada. La torta está cubierta de manjar blanco.",
          recetaUrl: "./recetas/Torta_selva_negra.html",
          categoria: "Postres",
        },
        {
          title: "Torta de vainilla",
          imageUrl: "torta_vainilla.webp",
          imageAlt:
            "Torta de vainilla dorada y con una rajadura en la parte superior sobre una bandeja de metal. En fondo desenfocado hay una refrigeradora y un mueble blanco. En la parte superior izquierda está escrito Torta de vainilla en color mostaza y a su costado, en la parte superior derecha de la imagen, hay un sticker de un pedazo de torta con las palabras Yay, Cake.",
          recetaUrl: "./recetas/Torta_vainilla.html",
          categoria: "Postres",
        },
        {
          title: "Pie de limón",
          imageUrl: "pie_limon.webp",
          imageAlt:
            "Pie de limón sobre bandeja de metal. Fondo borroso de ollas en una cocina. El pie tiene un merengue blanco y la tartaleta es de color mostaza. La imagen tiene un título en color verde que dice Pie de limón. Además, tiene un sticker de un pie humeante y otro sticker con la palabra en inglés 'Cutie pie'",
          recetaUrl: "./recetas/Pie_limon.html",
          categoria: "Postres",
        },
      ],
    };
  },
  name: "CardsMasonry",
  components: {
    CardWithModal,
  },
  methods: {
    scrollInfinito() {
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
          console.log(recetasToConcat);
          this.RecetasRendered = this.RecetasRendered.concat(recetasToConcat);
          console.log(this.RecetasRendered);
          console.log(numeroRecetasFaltantes);
        }
      }
    },
    stickyActivateAddPadding() {
      if (
        window.pageYOffset >= this.$store.state.stickyNavBar.NavBarOffSetTop
      ) {
        this.$refs.cardsContainer.style.paddingTop = `${this.$store.state.stickyNavBar.NavBarHeight}px`;
      } else {
        this.$refs.cardsContainer.style.paddingTop = "0px";
      }
    },
  },
  computed: {
    RecetasFiltradasPorCategoria() {
      return this.RecetasFiltradasPorBuscar.filter((receta) => {
        return receta.categoria
          .toLowerCase()
          .includes(this.$store.state.searchAndFilter.categoryId.toLowerCase());
      });
    },
    RecetasFiltradasPorBuscar() {
      return this.Recetas.filter((receta) => {
        return receta.title
          .toLowerCase()
          .includes(this.$store.state.searchAndFilter.buscar.toLowerCase());
      });
    },
  },
  watch: {
    RecetasFiltradasPorCategoria: {
      handler: function() {
        this.RecetasRendered = this.RecetasFiltradasPorCategoria.slice(0, 40);
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
      },
      immediate: true,
    },
    "$store.state.reactiveScrollAndResize.scroll": {
      handler() {
        this.scrollInfinito();
        this.stickyActivateAddPadding();
      },
    },
  },
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
