<template>
  <li class="MenuHamburguesa">
    <button @click="BotonHamburguesa" type="button" class="plate">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </button>
  </li>
</template>

<script>
export default {
  emits: ["emite"],
  name: "NavigationBarMenuHamburguesa",
  methods: {
    BotonHamburguesa() {
      this.$emit("emite");
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
.plate {
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
.plate:on-focus {
  outline: none;
  box-shadow: none;
}
</style>
