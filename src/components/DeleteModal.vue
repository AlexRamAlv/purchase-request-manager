<script>
export default {
  emits: ["closeDeleteModal"],
  props: {
    user: {
      type: Object,
    },
    showModalProp: {
      type: Boolean,
    },
  },
  methods: {
    toggleDeleteModalShow() {
      this.showModal = !this.showModalProp;
      console.log("click", this.showModal);
      this.$emit("closeDeleteModal");
    },
  },
};
</script>

<template>
  <div :class="['modal-delete', { hide: !showModalProp }]">
    <div class="overlay" @click="toggleDeleteModalShow()"></div>
    <div class="main-modal-delete">
      <span>Elimianr solicitante</span
      ><span class="x" @click.stop="toggleDeleteModalShow()">x</span>
      <div class="message container">
        <h4>Atención</h4>
        <p>
          Al borrar es solcitante <strong>{{ user.fullName }}</strong> se
          eliminaran las solcitudes de compra asociadas a este
        </p>
        <button>Confirmar</button>
        <button @click="toggleDeleteModalShow()">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-delete,
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.12);
  color: var(--just-gray);
  z-index: 4;
  transform: translateY(0);
  transition: transform 0.3s ease;
}
.main-modal-delete {
  height: 160px;
  width: fit-content;
  margin: 130px auto;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  position: absolute;
  z-index: 4;
  right: calc(50% - 365px);
}
.main-modal-delete button {
  margin: 10px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  padding: 9px;
  border: none;
}
.hide {
  transform: translateY(665px);
  opacity: 0;
  transition: all 0.3s ease;
}
.x {
  position: relative;
  left: calc(100% - 135px);
  bottom: 9px;
  font-weight: bold;
  cursor: pointer;
  font-size: 25px;
}
</style>
