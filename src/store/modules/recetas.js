const state = () => {
  return {
    Recetas: [
      {
        indexNumber: 0,
        title: "Panqueques",
        imageUrl: "panqueques.webp",
        imageWidth: "634",
        imageHeight: "630",
        imageAlt: "Panqueques caseros sobre un plato blanco.",
        recetaUrl: `${process.env.BASE_URL}recetas/Panqueques.html`,
        categoria: "Postres",
        numeroDeVisitas: ""
      },
      {
        indexNumber: 1,
        title: "Muffins",
        imageUrl: "muffins.webp",
        imageWidth: "640",
        imageHeight: "1137",
        imageAlt: "6 Muffins caseros de maní y arándanos en una bandeja negra.",
        recetaUrl: `${process.env.BASE_URL}recetas/Muffins.html`,
        categoria: "Postres",
        numeroDeVisitas: ""
      },
      {
        indexNumber: 2,
        title: "Pan de molde",
        imageUrl: "pan_molde.webp",
        imageWidth: "1125",
        imageHeight: "929",
        imageAlt:
          "Pan de molde casero sobre bandeja de metal. A su costado hay un cuchillo con mango blanco.",
        recetaUrl: `${process.env.BASE_URL}recetas/Pan_molde.html`,
        categoria: "Pan",
        numeroDeVisitas: ""
      },
      {
        indexNumber: 3,
        title: "Panqueques de avena",
        imageUrl: "panqueques_avena.webp",
        imageWidth: "720",
        imageHeight: "546",
        imageAlt:
          "Pila de panqueques de avena sobre plato blanco. Fondo de mesa de cocina difuminado.",
        recetaUrl: `${process.env.BASE_URL}recetas/Panqueques_avena.html`,
        categoria: "Postres",
        numeroDeVisitas: ""
      },
      {
        indexNumber: 4,
        title: "Pie de maracuyá",
        imageUrl: "pie_maracuya.webp",
        imageWidth: "480",
        imageHeight: "852",
        imageAlt: "Pie de maracuyá casero.",
        recetaUrl: `${process.env.BASE_URL}recetas/Pie_maracuya.html`,
        categoria: "Postres",
        numeroDeVisitas: ""
      },
      {
        indexNumber: 5,
        title: "Queque marmoleado",
        imageUrl: "queque_marmoleado.webp",
        imageWidth: "1125",
        imageHeight: "1317",
        imageAlt:
          "Queque marmoleado circular con cuchillo y espátula de mango blanco. Todo sobre superficie blanca.",
        recetaUrl: `${process.env.BASE_URL}recetas/Queque_marmoleado.html`,
        categoria: "Postres",
        numeroDeVisitas: ""
      },
      {
        indexNumber: 6,
        title: "Torta selva negra",
        imageUrl: "selva_negra.webp",
        imageWidth: "720",
        imageHeight: "1280",
        imageAlt:
          "Pedazo de torta selva negra sobre plato blanco. Torta selva negra detrás desenfocada. La torta está cubierta de manjar blanco.",
        recetaUrl: `${process.env.BASE_URL}recetas/Torta_selva_negra.html`,
        categoria: "Postres",
        numeroDeVisitas: ""
      },
      {
        indexNumber: 7,
        title: "Torta de vainilla",
        imageUrl: "torta_vainilla.webp",
        imageWidth: "1125",
        imageHeight: "1305",
        imageAlt:
          "Torta de vainilla dorada y con una rajadura en la parte superior sobre una bandeja de metal. En fondo desenfocado hay una refrigeradora y un mueble blanco. En la parte superior izquierda está escrito Torta de vainilla en color mostaza y a su costado, en la parte superior derecha de la imagen, hay un sticker de un pedazo de torta con las palabras Yay, Cake.",
        recetaUrl: `${process.env.BASE_URL}recetas/Torta_vainilla.html`,
        categoria: "Postres",
        numeroDeVisitas: ""
      },
      {
        indexNumber: 8,
        title: "Pie de limón",
        imageUrl: "pie_limon.webp",
        imageWidth: "1125",
        imageHeight: "1344",
        imageAlt:
          "Pie de limón sobre bandeja de metal. Fondo borroso de ollas en una cocina. El pie tiene un merengue blanco y la tartaleta es de color mostaza. La imagen tiene un título en color verde que dice Pie de limón. Además, tiene un sticker de un pie humeante y otro sticker con la palabra en inglés 'Cutie pie'",
        recetaUrl: `${process.env.BASE_URL}recetas/Pie_limon.html`,
        categoria: "Postres",
        numeroDeVisitas: ""
      },
      {
        indexNumber: 9,
        title: "Salchipapas",
        imageUrl: "salchipapas.webp",
        imageWidth: "1125",
        imageHeight: "2001",
        imageAlt:
          "3 platos cubiertos de papel absorvente blanco. En cada plato hay salchipapas (papas fritas y salchichas). Los platos están sobre hornillas de una cocina. En la parte superior de la imágen, hay un texto en blanco con fondo rojo que dice 'SALCHIPAPAS' y otro texto en blanco con fondo amarilo que dice '#CHEATMEAL'",
        recetaUrl: `${process.env.BASE_URL}recetas/Salchipapas.html`,
        categoria: "Comida-rapida",
        numeroDeVisitas: ""
      },
      {
        indexNumber: 10,
        title: "Torta helada",
        imageUrl: "torta_helada.webp",
        imageWidth: "1280",
        imageHeight: "1280",
        imageAlt:
          "Torta helada en plato blanco sobre la hornilla de una cocina. La torta es roja en la parte superior y tiene una crema roja dividida por un bizcochuelo beige.",
        recetaUrl: `${process.env.BASE_URL}recetas/Torta_helada.html`,
        categoria: "Postres",
        numeroDeVisitas: ""
      }
    ]
  };
};

const mutations = {
  actualizarNumeroDeVisitas(state, { i, numeroVisitas }) {
    state.Recetas[i].numeroDeVisitas = numeroVisitas;
  }
};
export default {
  namespaced: true,
  state,
  mutations
};
