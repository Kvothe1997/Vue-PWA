<template>
  <NavigationBar />
  <CardsMasonry />
  <DarkModeButton />
</template>

<script>
import CardsMasonry from "./components/CardsMasonry.vue";
import NavigationBar from "./components/NavigationBar.vue";
import DarkModeButton from "./components/DarkModeButton.vue";

export default {
  name: "App",
  components: {
    CardsMasonry,
    NavigationBar,
    DarkModeButton,
  },
  created() {
    // Listener único de scroll, se utiliza para el scroll infinito y el sticky NavigationBar.
    addEventListener("scroll", () => {
      let value = window.scrollY;
      this.$store.commit("reactiveScrollAndResize/actualizarScroll", value);
    });
    // listener de resize, a utilizarse con el sticky navigator. Para calcular pading y altura del h1.
    addEventListener("resize", () => {
      let height = window.innerHeight;
      let width = window.innerWidth;
      this.$store.commit("reactiveScrollAndResize/actualizarResize", {
        height,
        width,
      });
    });
  },
};
</script>

<style>
/* Revisar si se vuelve a poner el background white luego de terminar todo. */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video,
#app {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 100%;
  vertical-align: baseline;
  /* background-color: rgb(255, 255, 255, 0.87); */
}
/* ---------Dark mode variables---------*/
html {
  --main-background: rgba(255, 255, 255, 0.87);
  /* Cards */
  --header-card-background: black;
  --header-card-color: rgba(255, 255, 255, 0.87);
  /* SearchBox */
  --searchBox-background: rgba(255, 255, 255, 0.87);
  --searchBox-color: #5688ba;
  /* Dark Mode Button */
  --darkModeButton-background: #8fc7ff;
  /* Modal*/
  --modal-background: rgba(255, 255, 255, 0.87);
  --modal-color: black;
  /* Modal navegación */
  --modal-nav-color: black;
  /* Modal medidas y equivalencias */
  --modal-medidas-table-background: #274b6e;
  --modal-medidas-table-color: rgba(255, 255, 255, 0.87);
  --modal-medidas-table-text-stroke: transparent;
  --modal-medidas-tableBody-color: black;
  /* Modal recetas */
  --modal-recetas-img-filter: none;
  --modal-recetas-check-svg: url("data:image/svg+xml;utf8,<?xml version='1.0' encoding='utf-8'?><svg width='18' height='18' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z'/></svg>")
    no-repeat;
  --modal-recetas-numero-white: rgba(255, 255, 255, 0.87);
  --modal-recetas-nota-color: #5688ba;
  --modal-recetas-referencia-color: #5688ba;
  --modal-recetas-referencia-border: #5688ba;
}
html.dark-theme {
  --main-background: #274b6e;
  /* Cards */
  --header-card-background: black;
  --header-card-color: rgba(255, 255, 255, 0.77);
  /* SearchBox */
  --searchBox-background: rgba(255, 255, 255, 0.7);
  --searchBox-color: #274b6e;
  /* Dark Mode Button */
  --darkModeButton-background: black;
  /* Modal */
  --modal-background: #274b6e;
  --modal-color: rgba(255, 255, 255, 0.77);
  /* Modal navegación */
  --modal-nav-color: rgba(255, 255, 255, 0.77);
  /* Modal medidas y equivalencias */
  --modal-medidas-table-background: black;
  --modal-medidas-table-color: rgba(255, 255, 255, 0.77);
  --modal-medidas-table-text-stroke: transparent;
  --modal-medidas-tableBody-color: rgba(255, 255, 255, 0.87);
  /* Modal recetas */
  --modal-recetas-img-filter: brightness(0.8) contrast(1.2);
  --modal-recetas-check-svg: url("data:image/svg+xml;utf8,<?xml version='1.0' encoding='utf-8'?><svg width='18' height='18' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path fill='rgb(143, 199, 255)' d='M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z'/></svg>")
    no-repeat;
  --modal-recetas-number-white: rgba(255, 255, 255, 0.77);
  --modal-recetas-nota-color: #8fc7ff;
  --modal-recetas-referencia-color: #8fc7ff;
  --modal-recetas-referencia-border: #8fc7ff;
}
@media (prefers-color-scheme: dark) {
  html {
    --main-background: #274b6e;
    /* Cards */
    --header-card-background: black;
    --header-card-color: rgba(255, 255, 255, 0.77);
    /* SearchBox */
    --searchBox-background: rgba(255, 255, 255, 0.7);
    --searchBox-color: #274b6e;
    /* Dark Mode Button */
    --darkModeButton-background: black;
    /* Modal */
    --modal-background: #274b6e;
    --modal-color: rgba(255, 255, 255, 0.77);
    /* Modal navegación */
    --modal-nav-color: rgba(255, 255, 255, 0.77);
    /* Modal medidas y equivalencias */
    --modal-medidas-table-background: black;
    --modal-medidas-table-color: rgba(255, 255, 255, 0.77);
    --modal-medidas-table-text-stroke: transparent;
    --modal-medidas-tableBody-color: rgba(255, 255, 255, 0.87);
    /* Modal recetas */
    --modal-recetas-img-filter: brightness(0.8) contrast(1.2);
    --modal-recetas-check-svg: url("data:image/svg+xml;utf8,<?xml version='1.0' encoding='utf-8'?><svg width='18' height='18' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path fill='rgb(143, 199, 255)' d='M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z'/></svg>")
      no-repeat;
    --modal-recetas-number-white: rgba(255, 255, 255, 0.77);
    --modal-recetas-nota-color: #8fc7ff;
    --modal-recetas-referencia-color: #8fc7ff;
    --modal-recetas-referencia-border: #8fc7ff;
  }
  html.light-theme {
    --main-background: rgba(255, 255, 255, 0.87);
    /* Cards */
    --header-card-background: black;
    --header-card-color: rgba(255, 255, 255, 0.87);
    /* SearchBox */
    --searchBox-background: rgba(255, 255, 255, 0.87);
    --searchBox-color: #5688ba;
    /* Dark Mode Button */
    --darkModeButton-background: #8fc7ff;
    /* Modal*/
    --modal-background: rgba(255, 255, 255, 0.87);
    --modal-color: black;
    /* Modal navegación */
    --modal-nav-color: black;
    /* Modal medidas y equivalencias */
    --modal-medidas-table-background: #274b6e;
    --modal-medidas-table-color: rgba(255, 255, 255, 0.87);
    --modal-medidas-table-text-stroke: transparent;
    --modal-medidas-tableBody-color: black;
    /* Modal recetas */
    --modal-recetas-img-filter: none;
    --modal-recetas-check-svg: url("data:image/svg+xml;utf8,<?xml version='1.0' encoding='utf-8'?><svg width='18' height='18' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z'/></svg>")
      no-repeat;
    --modal-recetas-numero-white: rgba(255, 255, 255, 0.87);
    --modal-recetas-nota-color: #5688ba;
    --modal-recetas-referencia-color: #5688ba;
    --modal-recetas-referencia-border: #5688ba;
  }
}
/* ---------------------------------------- */

html,
body {
  height: 100%;
}
html {
  scroll-behavior: smooth;
  background-color: var(--main-background);
}
/* ---------footer always on bottom---------- */
body {
  display: flex;
  flex-direction: column;
}
.content {
  flex-grow: 1;
  position: relative;
}
header > h1 {
  text-align: center;
  font-size: 4rem;
  font-weight: bolder;
  background-color: black;
  color: #5688ba;
  padding: 0.01rem 0.01rem;
}
footer {
  flex-shrink: 0; /* Footer on bottom */
  text-align: center;
  padding: 10px;
  background-color: #5688ba;
  color: black;
  font-weight: bolder;
}
/* ---------------------------------------- */
footer > div {
  background: #5688ba;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
footer > div > aside {
  background: #5688ba;
  flex-basis: 40%;
  flex-grow: 1;
  min-width: 300px;
  margin: 0.5rem;
}
footer > div > aside > h2 {
  background: #5688ba;
  font-size: 1.3rem;
  font-weight: 800;
}
footer > div > aside > p {
  background: #5688ba;
  font-size: 1rem;
}
footer > div > div {
  background: #5688ba;
  flex-basis: 40%;
  flex-grow: 1;
  min-width: 300px;
  margin: 0.5rem;
}
footer > div > div > a {
  text-decoration: none;
  background: #5688ba;
  margin: 1rem;
  align-self: right;
}
footer > div > div > a > img {
  width: 2rem;
  background: #5688ba;
}
footer > p {
  background: #5688ba;
  font-size: 1.3rem;
}
@media (min-width: 500px) {
  footer > div > aside > h2 {
    font-size: 1rem;
  }
  footer > div > aside > p {
    font-size: 0.75rem;
  }
  footer > div > div > a > img {
    width: 1.5rem;
  }
  footer > p {
    font-size: 1rem;
  }
}
</style>
