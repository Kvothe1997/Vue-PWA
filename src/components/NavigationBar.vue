<template>
  <!-- Menú -->
  <nav>
    <ul class="NavBar">
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
.NavBar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 0.5rem;
  background-color: #5688ba;
  list-style-type: none;
  padding: 0.25rem;
}
@media (min-width: 640px) {
  .NavBar {
    justify-content: space-between;
  }
}
</style>
