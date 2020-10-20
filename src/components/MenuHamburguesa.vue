<template>
  <button class="plate plate4" @click="this.classList.toggle('active')">
    <svg
      class="burger"
      version="1.1"
      height="100"
      width="100"
      viewBox="0 0 100 100"
    >
      <path class="line line1" d="M 50,35 H 30"></path>
      <path class="line line2" d="M 50,35 H 70"></path>
      <path class="line line3" d="M 50,50 H 30"></path>
      <path class="line line4" d="M 50,50 H 70"></path>
      <path class="line line5" d="M 50,65 H 30"></path>
      <path class="line line6" d="M 50,65 H 70"></path>
    </svg>
    <svg class="x" version="1.1" height="100" width="100" viewBox="0 0 100 100">
      <path class="line" d="M 34,32 L 66,68"></path>
      <path class="line" d="M 66,32 L 34,68"></path>
    </svg>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
svg {
  height: 80px;
  position: absolute;
  width: 80px;
}
.plate {
  height: 80px;
  width: 80px;
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
  stroke: black;
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
