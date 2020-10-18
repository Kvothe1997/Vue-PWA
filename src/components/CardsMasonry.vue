<template>
  <div class="cards-container">
    <CardWithModal
      v-for="Receta in RecetasFiltradas"
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
      Recetas: [
        {
          title: "Panqueques",
          imageUrl: "panqueques.webp",
          imageAlt: "Panqueques caseros sobre un plato blanco.",
          recetaUrl: "./recetas/Panqueques.html"
        },
        {
          title: "Muffins",
          imageUrl: "muffins.webp",
          imageAlt:
            "6 Muffins caseros de maní y arándanos en una bandeja negra.",
          recetaUrl: "./recetas/Muffins.html"
        },
        {
          title: "Pan de molde",
          imageUrl: "pan_molde.webp",
          imageAlt:
            "Pan de molde casero sobre bandeja de metal. A su costado hay un cuchillo con mango blanco.",
          recetaUrl: "./recetas/Pan_molde.html"
        },
        {
          title: "Panqueques de avena",
          imageUrl: "panqueques_avena.webp",
          imageAlt:
            "Pila de panqueques de avena sobre plato blanco. Fondo de mesa de cocina difuminado.",
          recetaUrl: "./recetas/Panqueques_avena.html"
        },
        {
          title: "Pie de maracuyá",
          imageUrl: "pie_maracuya.webp",
          imageAlt: "Pie de maracuyá casero.",
          recetaUrl: "./recetas/Pie_maracuya.html"
        },
        {
          title: "Queque marmoleado",
          imageUrl: "panqueques.webp",
          imageAlt:
            "Queque marmoleado circular con cuchillo y espátula de mango blanco. Todo sobre superficie blanca.",
          recetaUrl: "./recetas/Queque_marmoleado.html"
        },
        {
          title: "Torta selva negra",
          imageUrl: "selva_negra.webp",
          imageAlt:
            "Pedazo de torta selva negra sobre plato blanco. Torta selva negra detrás desenfocada. La torta está cubierta de manjar blanco.",
          recetaUrl: "./recetas/Torta_selva_negra.html"
        }
      ]
    };
  },
  name: "CardsMasonry",
  components: {
    CardWithModal
  },
  computed: {
    RecetasFiltradas() {
      return this.Recetas.filter(receta => {
        return receta.title
          .toLowerCase()
          .includes(this.$store.state.buscar.toLowerCase());
      });
    }
  }
};
</script>

<style>
/* --- Masonry: Multicolumn --- */
.cards-container {
  margin: 1rem;
  display: inline-block;
  gap: 1rem;
  columns: 1;
}
@media (min-width: 500px) {
  .cards-container {
    columns: 10rem;
  }
}
/* --- */
</style>
