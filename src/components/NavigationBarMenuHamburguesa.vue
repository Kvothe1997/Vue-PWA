<template>
  <li class="MenuHamburguesa">
    <button
      @click="openModalNav"
      type="button"
      class="botonHamburguesa"
      aria-label="Botón para abrir el menú de navegación"
    >
      <font-awesome-icon :icon="['fas', 'bars']" />
    </button>
  </li>
</template>

<script>
export default {
  name: "NavigationBarMenuHamburguesa",
  methods: {
    openModalNav() {
      this.$router.push({ name: "NavigationBarModal" });
    }
  }
};
</script>

<style scoped>
.MenuHamburguesa {
  align-self: center;
  order: 2;
  background-color: #5688ba;
}
@media (min-width: 728px) {
  .MenuHamburguesa {
    order: 3;
  }
}
.botonHamburguesa {
  height: 2.5rem;
  width: 0rem;
  padding: 0.15rem 1.2rem 0.15rem 1.2rem;
  display: flex;
  text-align: center;
  justify-content: center;
  background-color: black;
  border-radius: 5px;
  cursor: pointer;
  color: #5688ba;
  font-size: 2.1rem;
}
.botonHamburguesa:on-focus {
  outline: none;
  box-shadow: none;
}
</style>
