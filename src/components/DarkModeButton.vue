<template>
  <button
    @click="ToggleTheme"
    id="buttonDarkMode"
    class="buttonDarkMode"
    type="button"
    aria-label="Botón para alternar entre modo oscuro y claro"
  >
    <div v-if="darkModeActive" class="moon" aria-label="Modo oscuro activado">
      <font-awesome-icon :icon="['fas', 'moon']" />
    </div>
    <div v-if="lightModeActive" class="sun" aria-label="Modo claro activado">
      <font-awesome-icon :icon="['fas', 'sun']" />
    </div>
  </button>
</template>

<script>
export default {
  name: "DarkModeButton",
  data() {
    return {
      darkModeActive: "",
      lightModeActive: "",
      content: "",
      resizeObserver: "",
      stopScrollWatcher: "",
      stopHeightWatcher: "",
      stopWidthWatcher: ""
    };
  },
  activated() {
    //Se inician los watchers de scroll y resize para evitar el error al salir de Home. (En deactivated se elimina el watcher)
    this.stopScrollWatcher = this.$watch(
      () => this.$store.state.reactiveScrollAndResize.scroll,
      () => {
        this.SetButtonPosition();
      }
    );
    this.stopHeightWatcher = this.$watch(
      () => this.$store.state.reactiveScrollAndResize.resizeHeight,
      () => {
        this.SetButtonPosition();
      }
    );
    this.stopWidthWatcher = this.$watch(
      () => this.$store.state.reactiveScrollAndResize.resizeWidth,
      () => {
        this.SetButtonPosition();
      }
    );
    // ---------------------------------------------
    this.content = document.getElementById("content");
    this.resizeObserver = new ResizeObserver(this.SetButtonPosition);
    this.resizeObserver.observe(this.content);
    this.SetInitialButtonState();
  },
  deactivated() {
    this.stopScrollWatcher();
    this.stopHeightWatcher();
    this.stopWidthWatcher();
    this.resizeObserver.unobserve(this.content);
  },
  methods: {
    SetButtonPosition() {
      if (
        window.pageYOffset + window.innerHeight <
        document.getElementById("content").offsetHeight
      ) {
        document.getElementById("buttonDarkMode").style.position = "fixed";
      } else {
        document.getElementById("buttonDarkMode").style.position = "absolute";
      }
    },
    SetInitialButtonState() {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark-theme");
        this.darkModeActive = true;
        this.lightModeActive = false;
      } else {
        document.documentElement.classList.add("light-theme");
        this.darkModeActive = false;
        this.lightModeActive = true;
      }
      // overrides prefered scheme if localstorage variable is present.
      switch (localStorage.getItem("theme")) {
        case "dark-theme":
          document.documentElement.classList.remove("light-theme");
          document.documentElement.classList.add("dark-theme");
          this.darkModeActive = true;
          this.lightModeActive = false;
          break;
        case "light-theme":
          document.documentElement.classList.remove("dark-theme");
          document.documentElement.classList.add("light-theme");
          this.darkModeActive = false;
          this.lightModeActive = true;
      }
    },
    ToggleTheme() {
      this.darkModeActive = !this.darkModeActive;
      this.lightModeActive = !this.lightModeActive;
      if (document.documentElement.classList.contains("dark-theme")) {
        document.documentElement.classList.remove("dark-theme");
        document.documentElement.classList.add("light-theme");
        // Update local storage theme variable
        localStorage.setItem("theme", "light-theme");
      } else {
        document.documentElement.classList.remove("light-theme");
        document.documentElement.classList.add("dark-theme");
        // Update local storage theme variable
        localStorage.setItem("theme", "dark-theme");
      }
    }
  }
};
</script>

<style>
.buttonDarkMode {
  all: unset;
  bottom: 0.5rem;
  right: 0.5rem;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--darkModeButton-background);
}
.buttonDarkMode:focus {
  box-shadow: 0 0 2pt 1pt var(--darkModeButton-focusOutline-color);
}
.moon {
  background: black;
  color: #5688ba;
  font-size: 2.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sun {
  background: #8fc7ff;
  color: white;
  font-size: 2.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (min-width: 500px) {
  .buttonDarkMode {
    height: 2rem;
    width: 2rem;
  }
  .moon {
    font-size: 1.4rem;
  }
  .sun {
    font-size: 1.4rem;
  }
}
</style>
