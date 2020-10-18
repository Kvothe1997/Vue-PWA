<template>
  <!-- Menú -->
  <nav>
    <ul>
      <MedidasEquivalencias />
      <SearchFilter />
    </ul>
  </nav>
</template>

<script>
import MedidasEquivalencias from "./MedidasEquivalencias.vue";
import SearchFilter from "./SearchFilter.vue";

export default {
  name: "NavigationBar",
  components: {
    MedidasEquivalencias,
    SearchFilter
  }
};
</script>

<style scoped>
/*---- ul of Nav style -----*/
nav > ul {
  display: flex;
  background-color: #5688ba;
  list-style-type: none;
  padding: 0.25rem;
}
</style>
