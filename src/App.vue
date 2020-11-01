<template>
  <NavigationBar />
  <CardsMasonry />
</template>

<script>
import CardsMasonry from "./components/CardsMasonry.vue";
import NavigationBar from "./components/NavigationBar.vue";

export default {
  name: "App",
  components: {
    CardsMasonry,
    NavigationBar
  },
  created() {
    // Listener único de scroll, se utiliza para el scroll infinito y el sticky NavigationBar.
    addEventListener("scroll", () => {
      let value = window.scrollY;
      this.$store.commit("actualizarScroll", value);
    });
    // listener de resize, a utilizarse con el sticky navigator. Para calcular pading y altura del h1.
    addEventListener("resize", () => {
      let height = window.innerHeight;
      let width = window.innerWidth;
      this.$store.commit("actualizarResize", { height, width });
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
  background-color: rgb(255, 255, 255, 0.87);
}
html,
body {
  height: 100%;
}
html {
  scroll-behavior: smooth;
}

body {
  display: flex;
  flex-direction: column;
}

.content {
  flex-grow: 1;
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
  flex-shrink: 0;
  text-align: center;
  padding: 10px;
  background-color: #5688ba;
  color: black;
  font-weight: bolder;
}
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
