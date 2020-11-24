<template>
  <!-- Crear un método en setup donde se evalue el local storage o el scheme user preference para poder definir el modo inicial del botón (varaibles dark y lighmode Active) y del data-theme -->
  <button
    @click="ToggleTheme"
    id="buttonDarkMode"
    class="buttonDarkMode"
    type="button"
  >
    <div v-if="darkModeActive" class="moon">
      <font-awesome-icon :icon="['fas', 'moon']" />
    </div>
    <div v-if="lightModeActive" class="sun">
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
      lightModeActive: ""
    };
  },
  watch: {
    "$store.state.reactiveScrollAndResize.scroll": {
      handler() {
        this.SetButtonPosition();
      }
    },
    "$store.state.reactiveScrollAndResize.resizeHeight": {
      handler() {
        this.SetButtonPosition();
      }
    },
    "$store.state.reactiveScrollAndResize.resizeWidth": {
      handler() {
        this.SetButtonPosition();
      }
    }
  },
  created() {
    const content = document.getElementById("content");
    const resizeObserver = new ResizeObserver(this.SetButtonPosition);
    resizeObserver.observe(content);
    this.SetInitialButtonState();
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
