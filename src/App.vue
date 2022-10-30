<script>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import SideBar from "./components/SideBar.vue";

export default {
  components: {
    RouterView,
    NavBar,
    SideBar,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleVisibility() {
      this.show = !this.show;
    },
  },
};
</script>

<template class="app-template">
  <header>
    <NavBar @toggle-sidebar="toggleVisibility()" />
  </header>
  <main class="main-content">
    <SideBar :show="show" />
    <RouterView :class="{ 'adjust-screen': show }" />
  </main>
</template>

<style scoped>
.main-content {
  display: flex;
  justify-content: space-between;
}
.adjust-screen {
  width: 100vw;
  height: calc(100vh - 45px);
}
</style>
