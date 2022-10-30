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
      <div class="modal-title">
        <span>Elimianr solicitante</span>
      </div>
      <span class="x" @click.stop="toggleDeleteModalShow()">x</span>
      <div class="message container">
        <h4>Atención!</h4>
        <p>
          Si elimina el solcitante <strong>{{ user.fullName }}</strong> se
          eliminarán las solcitudes de compra asociadas a este.
        </p>
        <button class="btn-confirm">Confirmar</button>
        <button @click="toggleDeleteModalShow()" class="btn-cancel">
          Cancelar
        </button>
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
.modal-title {
  border-bottom: 0.5px solid var(--light-gray);
  padding-bottom: 12px;
}
.main-modal-delete {
  height: 190px;
  width: fit-content;
  margin: 130px auto;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  position: absolute;
  z-index: 4;
  right: 0;
  left: 0;
}
h4 {
  color: var(--danger);
  margin: 10px 0;
}
.message.container > p {
  margin: 10px;
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
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.3s ease;
}
.btn-confirm,
.btn-cancel {
  height: 45px;
  width: 120px;
  font-weight: 600;
}
button.btn-confirm {
  background-color: transparent;
  border: 1px solid var(--info);
  color: var(--info);
}
button.btn-cancel {
  background-color: var(--danger);
  color: var(--just-white);
}
.x {
  position: absolute;
  left: calc(100% - 5%);
  bottom: calc(100% - 40px);
  font-weight: bold;
  cursor: pointer;
  font-size: 25px;
}
</style>
