<template>
  <!-- Card -->
  <div class="protection">
    <article
      :class="{ noClick: offline }"
      ref="card"
      @touchstart.passive="() => {}"
      @click="openCardModal"
      @keyup.enter="openCardModal"
      tabindex="0"
      class="card"
    >
      <h1>{{ title }}</h1>
      <figure class="figureContainer">
        <img
          :width="imageWidth"
          :height="imageHeight"
          :src="require(`../assets/Images/${imageUrl}`)"
          :alt="imageAlt"
          class="image"
          :class="{ imageBlur: offline }"
        />
        <p v-if="offline" class="offlineText">
          <strong>OFFLINE</strong><br />
          Intente con otra<br />
          receta
        </p>
      </figure>
    </article>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      required: true
    },
    recetaIndexNumber: {
      type: Number,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    imageWidth: {
      type: String,
      required: true
    },
    imageHeight: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    },
    recetaUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      offline: false
    };
  },
  watch: {
    "$store.state.reactiveOnlineStatus.onlineStatus": {
      handler(newValue) {
        this.checkCardOnlineStatus(newValue);
      }
    }
  },
  mounted() {
    this.checkCardOnlineStatus(navigator.onLine);
  },
  methods: {
    checkCardOnlineStatus(newValue) {
      if (newValue === true) {
        //El usuario está online
        this.offline = false;
        this.$refs.card.tabindex = 0;
      } else {
        //El usuario está offline
        //Se obtiene el url del .html que podría estar cacheado utilizando Request. Luego, se usa la propiedad caches.match y promesas para verificar si el .html está cacheado.
        let cachedRecetaUrlName = new Request(this.recetaUrl).url;
        caches
          .match(cachedRecetaUrlName)
          .then(response => (response ? true : false))
          .then(recetaIsCached => {
            if (!recetaIsCached) {
              //La variable offline activará el css necesario para desactivar las cards cuyas recetas .html no estén cacheadas.
              this.offline = true;
              this.$refs.card.tabindex = -1;
            }
          });
      }
    },
    openCardModal() {
      let receta = this.title.replace(/\s/g, "_"),
        indexNumber = this.recetaIndexNumber;
      this.$router.push({ name: "CardModal", params: { receta, indexNumber } });
    }
  }
};
</script>

<style scoped>
/* --- Masonry: Multicolumn --- */
.protection {
  display: block;
  -webkit-column-break-inside: avoid-column;
  page-break-inside: avoid-column;
  break-inside: avoid-column;
  padding-bottom: 0.75rem;
  padding-top: 0.75rem;
}
@media (min-width: 500px) {
  .protection {
    padding-bottom: 0.65rem;
    padding-top: 0.35rem;
  }
}
/* -------------card-------------- */
.card {
  vertical-align: middle;
  border-radius: 5px 5px 5px 5px;
  box-shadow: 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.3s;
  transition: box-shadow 0.3s;
}
@media (hover: hover) {
  .card:hover {
    transform: scale(1.025);
    box-shadow: 6px 10px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.19);
  }
}
.card:focus {
  transform: scale(1.025);
  box-shadow: 6px 10px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.19);
}
.card:active {
  transform: scale(0.975);
  box-shadow: 3px 7px 0 rgba(0, 0, 0, 0.2), 0 5px 9px 0 rgba(0, 0, 0, 0.19);
}
.card > h1 {
  background-color: var(--header-card-background);
  font-size: 2.25rem;
  text-align: center;
  color: var(--header-card-color);
  padding-bottom: 0.25rem;
  border-radius: 5px 5px 0% 0%;
  cursor: pointer;
}
@media (min-width: 500px) {
  .card > h1 {
    font-size: 1.4rem;
  }
}
.figureContainer {
  height: 100%;
  width: 100%;
  border-radius: 0px 0px 1% 1%;
  vertical-align: middle;
  object-fit: contain;
  cursor: pointer;
  display: relative;
  filter: var(--modal-recetas-img-filter);
}
.image {
  height: 100%;
  width: 100%;
  vertical-align: middle;
}
.imageBlur {
  -webkit-filter: blur(15px); /* Safari 6.0 - 9.0 */
  filter: blur(15px);
}
.offlineText {
  position: absolute;
  bottom: 0%;
  left: 0%;
  width: 100%;
  /* color: white; */
  color: var(--offlineText-card-color);
  text-align: center;
  font-size: 2.2rem;
  background-color: rgba(255, 0, 0, 0.5); /* ; Black w/ opacity */
}
@media (min-width: 500px) {
  .offlineText {
    font-size: 1.5rem;
  }
}
.noClick {
  pointer-events: none;
}
</style>
