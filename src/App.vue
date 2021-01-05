<template>
  <!-- BlurredBackground solo se activará al routearse a los modales. -->
  <BlurredBackground />
  <!-- Este es el router view principal. Renderizarán aquí: Home, CardModal y NavigationBarModal. -->
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition">
      <keep-alive include="Home">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script>
import BlurredBackground from "./components/BlurredBackground.vue";

export default {
  name: "App",
  components: {
    BlurredBackground
  },
  created() {
    // Listener único de scroll, se utiliza para el scroll infinito y el sticky NavigationBar.
    addEventListener(
      "scroll",
      () => {
        let value = window.scrollY;
        this.$store.commit("reactiveScrollAndResize/actualizarScroll", value);
      },
      { passive: true }
    );
    // listener de resize, a utilizarse con el sticky navigator. Para calcular pading y altura del h1.
    addEventListener(
      "resize",
      () => {
        let height = window.innerHeight;
        let width = window.innerWidth;
        this.$store.commit("reactiveScrollAndResize/actualizarResize", {
          height,
          width
        });
      },
      { passive: true }
    );
    //Se escuchan los eventos online y offline. Luego, se mandan a vuex (store) para estar disponibles en todos los componentes.
    addEventListener("online", () => {
      let value = true;
      this.$store.commit("reactiveOnlineStatus/actualizarOnlineStatus", value);
    });
    addEventListener("offli ne", () => {
      let value = false;
      this.$store.commit("reactiveOnlineStatus/actualizarOnlineStatus", value);
    });
  }
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
  --offlineText-card-color: rgba(255, 255, 255, 0.87);
  /* SearchBox */
  --searchBox-background: rgba(255, 255, 255, 0.87);
  --searchBox-color: #5688ba;
  /* Dark Mode Button */
  --darkModeButton-background: #8fc7ff;
  --darkModeButton-focusOutline-color: black;
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
  --modal-recetas-img-filter: brightness(1) contrast(1);
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
  --offlineText-card-color: white;
  /* SearchBox */
  --searchBox-background: rgba(255, 255, 255, 0.7);
  --searchBox-color: #274b6e;
  /* Dark Mode Button */
  --darkModeButton-background: black;
  --darkModeButton-focusOutline-color: white;
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
    --offlineText-card-color: white;
    /* SearchBox */
    --searchBox-background: rgba(255, 255, 255, 0.7);
    --searchBox-color: #274b6e;
    /* Dark Mode Button */
    --darkModeButton-background: black;
    --darkModeButton-focusOutline-color: white;
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
    --offlineText-card-color: rgba(255, 255, 255, 0.87);
    /* SearchBox */
    --searchBox-background: rgba(255, 255, 255, 0.87);
    --searchBox-color: #5688ba;
    /* Dark Mode Button */
    --darkModeButton-background: #8fc7ff;
    --darkModeButton-focusOutline-color: black;
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
    --modal-recetas-img-filter: brightness(1) contrast(1);
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
body,
#app {
  height: 100%;
}
html {
  background-color: var(--main-background);
}
/* ---------------------------------------- */
/* menu - Vue transition functionality */
.menu-enter-active {
  transition: all 0.3s ease-out;
}
.menu-enter-from {
  transform: translatey(500px);
  opacity: 0;
}
.menu-leave-to {
  opacity: 0;
}

/* cardModal - Vue transition functionality */
.cardModal-enter-from,
.cardModal-leave-to {
  transform: scale(0);
  opacity: 0;
}
.cardModal-enter-to,
.cardModal-leave-from {
  transform: scale(1);
  opacity: 1;
}
.cardModal-enter-active {
  transition: all 0.2s ease-out;
}
.cardModal-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
</style>
