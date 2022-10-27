<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div :class="['modal', { hide: !showModal }]">
    <div class="main">
      <span>Personalizar cuenta</span>
      <span>Cerrar sesión</span>
    </div>
  </div>
</template>
<style scoped>
.modal {
  position: absolute;
  right: 8px;
  top: 42px;
  border: 1px solid var(--light-gray);
  color: var(--just-gray);
  border-radius: 5px;
  width: 168px;
  height: 80px;
  text-align: center;
  z-index: 2;
  background-color: var(--just-white);
  transition: opacity 0.3s ease-in-out;
}
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
}
.main > span {
  padding: 5px;
  width: 90%;
}
.main > span:hover {
  background-color: var(--opac-green-color);
  color: var(--green-color);
  border-radius: 5px;
  cursor: pointer;
}
.hide {
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
</style>
