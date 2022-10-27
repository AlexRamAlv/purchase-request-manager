<script setup>
import RequesterCard from "../components/RequesterCard.vue";
import RequestPagination from "../components/RequesterPagination.vue";
import DeleteModal from "../components/DeleteModal.vue";
import { ref } from "vue";

const users = [
  {
    fullName: "Alexander Ramirez",
    role: "Comprador de bienes",
    receivedRequests: 450,
    partialReceived: 335,
    nonReceivedRequests: 92,
  },
  {
    fullName: "Yndira Padilla",
    role: "Medico ocupacional",
    receivedRequests: 800,
    partialReceived: 860,
    nonReceivedRequests: 401,
  },
  {
    fullName: "Alexnader Ramirez Jr",
    role: "Estudiante",
    receivedRequests: 932,
    partialReceived: 12,
    nonReceivedRequests: 15,
  },
  {
    fullName: "Ander Ramirez",
    role: "Niño de casa",
    receivedRequests: 731,
    partialReceived: 2,
    nonReceivedRequests: 5,
  },
];
const userInfoToBePass = ref({});
const showDeleteModal = ref(false);
const deleteRequester = (userInfo) => {
  userInfoToBePass.value = userInfo;
  showDeleteModal.value = !showDeleteModal.value;
};
</script>

<template>
  <div class="card-container">
    <Teleport to="#teleport">
      <DeleteModal
        :user="userInfoToBePass"
        :showModalProp="showDeleteModal"
        @closeDeleteModal="showDeleteModal = !showDeleteModal"
      />
    </Teleport>
    <RequesterCard
      v-for="(user, index) in users"
      :key="index"
      :userInfo="user"
      @deleteClick="deleteRequester(user)"
    />
    <RequestPagination class="pagination" />
  </div>
</template>

<style>
.card-container {
  display: grid;
  grid-template-columns: 400px 400px;
  grid-template-rows: 250px 250px;
  justify-content: center;
  width: 78vw;
  place-items: center;
}
.pagination {
  grid-area: 3 / span 2;
  display: flex;
  justify-content: space-around;
  width: 300px;
}
</style>
