<template>
  <footer class="mainFooter">
    <div>
      <aside class="developerSideNote">
        <h2>Nota del desarrollador</h2>
        <p>
          Esta PWA es mi primera página web utilizando Vue.js.
        </p>
      </aside>
      <div class="mediaIcons">
        <a
          class="facebook"
          href="https://www.facebook.com/Luis.Barrreto"
          target="_blank"
          rel="noopener noreferrer"
          ><img
            width="100"
            height="100"
            :src="`${baseURL}img/mediaIcons/facebook.svg`"
            alt="Agrégame en Facebook."
          />
        </a>
        <a
          href="https://www.linkedin.com/in/luis-enrique-barreto-periche-2102223b/"
          target="_blank"
          rel="noopener noreferrer"
          ><img
            width="100"
            height="100"
            :src="`${baseURL}img/mediaIcons/linkedin.svg`"
            alt="Agrégame en LinkedIN"
          />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=51964561893&text=!Hola,%20Luis%20Barreto!%20%C2%BFQu%C3%A9%20tal?"
          target="_blank"
          rel="noopener noreferrer"
          ><img
            width="100"
            height="100"
            :src="`${baseURL}img/mediaIcons/whatsapp.svg`"
            alt="Contáctame en whatsapp"
          />
        </a>
        <a
          href="https://github.com/Kvothe1997"
          target="_blank"
          rel="noopener noreferrer"
          ><img
            width="100"
            height="100"
            :src="`${baseURL}img/mediaIcons/github.svg`"
            alt="Sígueme en GitHub"
          />
        </a>
        <a
          href="https://www.instagram.com/barreto0608/?hl=es-la"
          target="_blank"
          rel="noopener noreferrer"
          ><img
            width="100"
            height="100"
            :src="`${baseURL}img/mediaIcons/instagram.svg`"
            alt="Sígueme en Instagram"
          />
        </a>
      </div>
    </div>
    <p>
      &copy;2024 Luis Enrique Barreto Periche
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      baseURL: process.env.BASE_URL
    };
  }
};
</script>

<style>
/* ---------Footer always on bottom---------- */
.mainFooter {
  flex-shrink: 0; /* Footer on bottom */
  text-align: center;
  padding: 10px;
  background-color: #5688ba;
  color: black;
  font-weight: bolder;
}
/* ---------------Styles------------------------- */
.mainFooter > div {
  background: #5688ba;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.developerSideNote {
  background: #5688ba;
  flex-basis: 40%;
  flex-grow: 1;
  min-width: 300px;
  margin: 0.5rem;
}
.developerSideNote > h2 {
  background: #5688ba;
  font-size: 1.3rem;
  font-weight: 800;
}
.developerSideNote > p {
  background: #5688ba;
  font-size: 1rem;
}
.mediaIcons {
  background: #5688ba;
  flex-basis: 40%;
  flex-grow: 1;
  min-width: 300px;
  margin: 0.5rem;
}
.mediaIcons > a {
  text-decoration: none;
  background: #5688ba;
  margin: 1rem;
}
.mediaIcons > a > img {
  height: auto;
  width: 2rem;
  background: #5688ba;
}
.mainFooter > p {
  background: #5688ba;
  font-size: 1.3rem;
}
@media (min-width: 500px) {
  .developerSideNote > h2 {
    font-size: 1rem;
  }
  .developerSideNote > p {
    font-size: 0.75rem;
  }
  .mediaIcons > a > img {
    width: 1.5rem;
  }
  .mainFooter > p {
    font-size: 1rem;
  }
}
</style>
