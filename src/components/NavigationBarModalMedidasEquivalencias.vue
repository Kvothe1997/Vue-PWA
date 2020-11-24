<template>
  <!-- list item -->
  <li
    @click="openModal"
    @keyup.enter="openModal"
    class="MedidasEquivalencias"
    ontouchstart=""
    tabindex="0"
  >
    Medidas y equivalencias
  </li>

  <!-- Modal de list item -->
  <div v-if="showModal" @click="closeModal" class="modal-mask"></div>
  <focus-trap :active="showModal" :escape-deactivates="false">
    <transition name="modal">
      <div
        v-if="showModal"
        @keyup.esc="closeModal"
        class="modal-container"
        tabindex="-1"
      >
        <span
          @click="closeModal"
          @keyup.enter="closeModal"
          class="cerrar"
          ontouchstart=""
          tabindex="0"
          >&times;</span
        >
        <h2>Medidas y equivalencias</h2>
        <div class="modalTables">
          <table>
            <thead>
              <tr>
                <th>Harina o azúcar impalpable</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 taza = 110 g</td>
              </tr>
              <tr>
                <td>&frac12; taza = 55 g</td>
              </tr>
              <tr>
                <td>&frac13; taza = 40 g</td>
              </tr>
              <tr>
                <td>&frac14; taza = 30 g</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Azúcar o mantequilla</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 taza = 225 g</td>
              </tr>
              <tr>
                <td>&frac12; taza = 115 g</td>
              </tr>
              <tr>
                <td>&frac13; taza = 75 g</td>
              </tr>
              <tr>
                <td>&frac14; taza = 55 g</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Azúcar moreno</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 taza = 200 g</td>
              </tr>
              <tr>
                <td>&frac12; taza = 100 g</td>
              </tr>
              <tr>
                <td>&frac13; taza = 65 g</td>
              </tr>
              <tr>
                <td>&frac14; taza = 50 g</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Cacao en polvo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 taza = 125 g</td>
              </tr>
              <tr>
                <td>&frac12; taza = 60 g</td>
              </tr>
              <tr>
                <td>&frac13; taza = 40 g</td>
              </tr>
              <tr>
                <td>&frac14; taza = 30 g</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Otras medidas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 onza = 28 g</td>
              </tr>
              <tr>
                <td>1 stick = 125 g</td>
              </tr>
              <tr>
                <td>1 pinta = 400 ml</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Líquidos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 taza = 240 ml</td>
              </tr>
              <tr>
                <td>1 cucharadita = 5 ml</td>
              </tr>
              <tr>
                <td>1 cucharada = 15 ml</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </transition>
  </focus-trap>
</template>

<script>
export default {
  emits: ["emite"],
  name: "NavigationBarModalMedidasEquivalencias",
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.$emit("emite");
    }
  }
};
</script>

<style scoped>
/*---- List item style -----*/
.MedidasEquivalencias {
  text-align: center;
  padding: 0.5rem 0;
  background-color: black;
  font-weight: bolder;
  font-size: 1.7rem;
  color: #5688ba;
}

@media (hover: hover) {
  .MedidasEquivalencias:hover {
    background-color: #5688ba;
    cursor: pointer;
    color: black;
  }
}
.MedidasEquivalencias:active {
  box-shadow: inset 0px 0px 0.3rem black;
  background-color: #5688ba;
  color: black;
}
/*---- Modal -----*/
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4) !important; /* ; Black w/ opacity */
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  display: table;
  /* transition: opacity 0.3s ease;  Ajustar transición hacia adentro y ahcia afuer, tal vez en los transition effects.*/
}
.modal-container {
  outline: 0;
  position: fixed; /* Stay in place */
  z-index: 9999;
  left: 5%;
  top: 5%;
  width: 90%;
  height: 90%;
  margin: 0px auto;
  background-color: var(--modal-background);
  border-radius: 0.5%;
  font-family: Helvetica, Arial, sans-serif;
  overflow: auto; /*Enable scroll if needed*/
  box-shadow: 0px 0px 5px #5688ba;
}
/* -----El botón para cerrar -----*/
.cerrar {
  color: #5688ba;
  background-color: transparent;
  font-size: 3rem;
  font-weight: bold;
  position: fixed;
  right: 4.99999523162841875%;
  margin-top: -0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  z-index: 5;
}
@media (hover: hover) {
  .cerrar:hover {
    color: #b7cbdf;
  }
}
.cerrar:active {
  text-shadow: 0 0 0.25rem #5688ba;
  color: #b7cbdf;
  font-weight: 500;
}
@media (min-width: 500px) and (max-width: 900px) {
  .cerrar {
    right: 8.3154795441757122211003543782542%;
  }
}
@media (min-width: 900px) {
  .cerrar {
    right: 6.898865840349542%;
  }
}
/*---- Modal content-----*/
.modal-container > h2 {
  text-align: center;
  color: #5688ba;
  font-size: 3rem;
  background-color: black;
  padding-left: 0.25rem;
  padding-right: 3rem;
  padding-bottom: 0.75rem;
}
.modalTables {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: flex-start;
}
.modalTables > table {
  flex-basis: 40%;
  min-width: 300px;
  margin: 1rem 0.5rem 0rem 0.5rem;
  border: 0.5rem solid var(--modal-medidas-table-background);
  text-align: center;
  flex-grow: 1;
}
.modalTables > table th {
  background: var(--modal-medidas-table-background);
  color: var(--modal-medidas-table-color);
  -webkit-text-stroke: var(--modal-medidas-table-text-stroke);
  -webkit-text-stroke-width: 0.05rem;
  padding: 0.25rem;
  font-size: 2.25rem;
}
.modalTables > table tbody {
  font-weight: 500;
  font-size: 2rem;
  color: var(--modal-medidas-tableBody-color);
}
@media (min-width: 500px) {
  .modalTables {
    padding: 1rem;
  }
  .modalTables > table {
    margin: 1rem 1.5rem 0.5rem 1.5rem;
  }
  .modalTables > table th {
    font-size: 1.5rem;
  }
  .modalTables > table tbody {
    font-size: 1.5rem;
  }
}
</style>
