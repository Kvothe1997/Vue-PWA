<template>
  <!-- Menú -->
  <nav>
    <ul>
      <MedidasEquivalencias />
    </ul>
  </nav>
</template>

<script>
import MedidasEquivalencias from "./MedidasEquivalencias.vue";
export default {
  name: "NavigationBar",
  components: {
    MedidasEquivalencias
  }
};
</script>

<style scoped>
/*---- ul of Nav style -----*/
nav > ul {
  display: flex;
  flex-direction: row;
  background-color: #5688ba;
  justify-content: left;
  list-style-type: none;
  padding: 0.25rem;
}
</style>
