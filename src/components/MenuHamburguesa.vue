<template>
  <defs>
    <filter id="gooeyness">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
      <feColorMatrix
        in="blur"
        mode="matrix"
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
        result="gooeyness"
      />
      <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
    </filter>
  </defs>
  <li class="MenuHamburguesa">
    <button
      type="button"
      :class="['plate', 'plate4', { active: toggled }]"
      @click="BotonHamburguesa"
    >
      <svg version="1.1" viewBox="0 0 40 30">
        <path class="line line1" d="M 20 0 H 0"></path>
        <path class="line line2" d="M 20 0 H 40"></path>
        <path class="line line3" d="M 20 15 H 0"></path>
        <path class="line line4" d="M 20 15 H 40"></path>
        <path class="line line5" d="M 20 30 H 0"></path>
        <path class="line line6" d="M 20 30 H 40"></path>
      </svg>
      <svg class="x" version="1.1" viewBox="0 0 40 30">
        <path class="line" d="M 6,0 L 34,30" />
        <path class="line" d="M 34,0 L 6,30" />
      </svg>
    </button>
  </li>
</template>

<script>
export default {
  data() {
    return {
      toggled: false
    };
  },
  name: "MenuHamburguesa",
  emits: ["emite"],
  methods: {
    BotonHamburguesa() {
      this.toggled = !this.toggled;
      this.$emit("emite");
    }
  }
};
</script>

<style scoped>
.MenuHamburguesa {
  align-self: center;
  order: 2;
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
  background: black;
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
  position: absolute;
}
.burger {
  filter: url(#gooeyness);
}
.x {
  transform: scale(0);
  transition: transform 400ms;
}
.line {
  fill: none;
  stroke: #5688ba;
  stroke-width: 6px;
  stroke-linecap: round;
  stroke-linejoin: round;
  transform-origin: 50%;
  transition: stroke-dasharray 500ms 200ms, stroke-dashoffset 500ms 200ms,
    transform 500ms 200ms;
}
.x .line {
  stroke-width: 5.5px;
}
.plate4 .x {
  transition: transform 400ms;
}
.plate4 .line {
  transform-origin: 50%;
  transition: transform 400ms 100ms;
}
.active.plate4 .line {
  transition: transform 400ms;
}
.active.plate4 .line1 {
  transform: translateX(18px) translateY(-3px) rotate(-45deg) scale(0.7);
}
.active.plate4 .line2 {
  transform: translateX(-18px) translateY(-3px) rotate(45deg) scale(0.7);
}
.active.plate4 .line3 {
  transform: translateY(0px) rotate(45deg) scale(0.7);
}
.active.plate4 .line4 {
  transform: translateY(0px) rotate(-45deg) scale(0.7);
}
.active.plate4 .line5 {
  transform: translateX(18px) translateY(3px) rotate(45deg) scale(0.7);
}
.active.plate4 .line6 {
  transform: translateX(-18px) translateY(3px) rotate(-45deg) scale(0.7);
}
.active.plate4 .x {
  transition: transform 400ms 100ms;
  transform: scale(1);
}
</style>
