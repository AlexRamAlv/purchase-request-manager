<script>
import { RouterLink } from "vue-router";

export default {
  components: { RouterLink },
  data() {
    return {
      listItems: [
        {
          name: "Dashboard",
          link: { name: "dasboard" },
          imgLink: "/src/assets/icons/bxs-dashboard.svg#dashboard",
        },
        {
          name: "Solicitantes",
          link: { name: "requesters" },
          imgLink: "/src/assets/icons/bxs-user.svg#user",
        },
        {
          name: "Solicitudes de compra",
          link: { name: "requests" },
          imgLink: "/src/assets/icons/bxs-shopping-bag.svg#bag",
        },
      ],
    };
  },
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<template>
  <div :class="{ 'show-sidebar': this.show }" class="list-container">
    <ul>
      <li v-for="item in listItems" :key="item.name">
        <RouterLink :to="item.link" class="list-container--text">
          <svg class="list-container--icon">
            <use :href="item.imgLink" />
          </svg>
          <div>
            {{ item.name }}
          </div>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul li {
  border-bottom: 1px solid var(--light-gray);
}
ul li a {
  list-style: none;
  margin: 8px 20px;
  font-size: large;
  cursor: pointer;
  width: 215px;
  height: 50px;
}
.list-container {
  background-color: var(--just-white);
  box-shadow: 14px 19px 44px -17px rgba(82, 82, 82, 0.45);
  width: 265px;
  height: calc(100vh - 45px);
  transition: transform 0.3s ease;
}
.list-container--text {
  padding: 2px;
  text-decoration: none;
  color: var(--just-gray);
  display: flex;
  align-items: center;
}
.list-container--text:hover {
  background-color: var(--primary);
  color: var(--just-white);
  border-radius: 5px;
}
.list-container--icon {
  margin: 0 10px 0 10px;
  width: 24px;
  height: 24px;
  fill: currentColor;
}
a.router-link-exact-active {
  background-color: var(--primary-light);
  color: var(--just-white);
  border-radius: 5px;
}
/* Animation */
.show-sidebar {
  position: absolute;
  z-index: 1;
  transform: translate(-330px, 0);
  transition: all 0.3s ease;
}
</style>
