<template>
  <!-- list item -->
  <li ontouchstart="" @click="openModal">
    Medidas y equivalencias
  </li>

  <!-- Modal de list item -->
  <transition name="modal">
    <div v-if="showModal" class="modal-mask">
      <div class="modal-container">
        <span @click="closeModal" class="cerrar" ontouchstart="">&times;</span>
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
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      showModal: false
    };
  },
  name: "MedidasEquivalencias",
  methods: {
    openModal() {
      document.body.style.overflow = "hidden";
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      document.body.style.overflow = "auto";
    }
  }
};
</script>

<style scoped>
/*---- List item style -----*/
li {
  text-align: center;
  padding: 0.25rem 1rem;
  background-color: #5688ba;
  font-weight: bolder;
  font-size: 1.7rem;
  border-radius: 500px;
  color: black;
  border: 0.01rem solid #5688ba;
}
@media (min-width: 600px) {
  li {
    font-size: 1.4rem;
  }
}

@media (hover: hover) {
  li:hover {
    background-color: #b7cbdf;
    cursor: pointer;
  }
}
li:active {
  box-shadow: inset 0px 0px 0.3rem black;
  background-color: #b7cbdf;
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
  position: fixed; /* Stay in place */
  left: 5%;
  top: 5%;
  width: 90%;
  height: 90%;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 0.5%;
  /* transition: all 0.3s ease;  Arreglar*/
  font-family: Helvetica, Arial, sans-serif;
  overflow: auto; /*Enable scroll if needed*/
  box-shadow: 0px 0px 5px #5688ba;
}
/* -----Vue transition functionality----- */
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
/* -----El botón para cerrar -----*/
.cerrar {
  color: #5688ba;
  background-color: transparent;
  font-size: 3rem;
  font-weight: bold;
  position: fixed;
  right: 5.5%;
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
  border: 0.5rem solid #b7cbdf;
  text-align: center;
  flex-grow: 1;
}
.modalTables > table th {
  background: #b7cbdf;
  color: black;
  -webkit-text-stroke: black;
  -webkit-text-stroke-width: 0.05rem;
  padding: 0.25rem;
  font-size: 2.25rem;
}
.modalTables > table tbody {
  font-weight: 500;
  font-size: 2rem;
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
