<template>
  <li class="MenuHamburguesa">
    <button type="button" class="plate" @click="BotonHamburguesa">
      <svg version="1.1" viewBox="0 0 40 30">
        <path class="line" d="M 0 0 H 40"></path>
        <path class="line" d="M 0 15 H 40"></path>
        <path class="line" d="M 0 30 H 40"></path>
      </svg>
    </button>
  </li>
</template>

<script>
export default {
  name: "MenuHamburguesa",
  emits: ["emite"],
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
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 5px;
  cursor: pointer;
}
.plate:on-focus {
  outline: none;
  box-shadow: none;
}
svg {
  width: 1.4rem;
  height: 1.3rem;
}
.line {
  fill: none;
  stroke: #5688ba;
  stroke-width: 6px;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
