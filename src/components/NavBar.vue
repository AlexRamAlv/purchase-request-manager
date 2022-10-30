<script>
import UserModal from "./UserModal.vue";
export default {
  emits: ["toggleSidebar"],
  components: {
    UserModal,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleShowModal() {
      this.show = !this.show;
    },
  },
};
</script>

<template>
  <nav class="navbar-right">
    <div class="nabvar-brand">
      <svg class="purchase-label-icon">
        <use href="/src/assets/icons/bxs-purchase.svg#label" />
      </svg>
      <div><h4>Gestión de Solicitudes</h4></div>
      <svg @click="$emit('toggleSidebar')" class="menu">
        <use href="/src/assets/icons/bxs-menu.svg#menu" />
      </svg>
    </div>
    <div class="navbar-left">
      <div class="profile-img">
        <img src="../assets/img/user-profile.png" />
      </div>
      <div class="user-info">
        <span class="user-info--username">Alexander Ramirez</span>
        <span class="user-info--work-as">
          COMPRADOR DE BIENES Y SERVICIOS
        </span>
      </div>
      <svg
        @click="toggleShowModal()"
        :class="['icon-profile-menu', { rotate_arrow: show }]"
      >
        <use href="/src/assets/icons/bx-chevrons-down.svg#arrow" />
      </svg>
    </div>
  </nav>
  <UserModal :showModal="show" />
</template>

<style scoped>
.purchase-label-icon,
.icon-profile-menu {
  width: 24px;
  height: 24px;
  fill: var(--just-white);
}
.purchase-label-icon {
  transform: rotate(95deg);
}
nav {
  display: flex;
  justify-content: space-between;
}
.nabvar-brand {
  display: flex;
  align-items: center;
  height: 45px;
  margin-left: 10px;
}
.nabvar-brand > div {
  margin: 4px 10px;
}
.navbar-right {
  background-color: var(--primary);
  color: white;
}
.navbar-left {
  margin-right: 10px;
  display: flex;
  align-items: center;
  border-left: 1px solid var(--primary-light);
}
.navbar-left .profile-img {
  margin-left: 10px;
  width: 35px;
  cursor: pointer;
}
.navbar-left .profile-img img {
  width: 30px;
  border-radius: 50%;
  background-color: azure;
}
.navbar-left .user-info {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.user-info span {
  margin: 1px;
}
.navbar-left .icon-profile-menu {
  margin: 4px;
  cursor: pointer;
  transition: transform 0.5s ease;
}
.rotate_arrow {
  transform: rotate(180deg);
  transition: transform 0.5s ease;
}
.user-info--username {
  font-size: 12px;
  font-weight: lighter;
  letter-spacing: 1px;
}
.user-info--work-as {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
}
.menu {
  cursor: pointer;
  height: 100%;
  border-right: 1px solid var(--primary-light);
  border-left: 1px solid var(--primary-light);
  display: flex;
  padding: 10px;
  fill: var(--just-white);
  width: 45px;
}
</style>
