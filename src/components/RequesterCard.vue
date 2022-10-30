<script>
export default {
  props: {
    userInfo: {
      type: Object,
      required: true,
    },
  },
  emits: ["deleteClick"],
};
</script>
<template>
  <div class="requester-card">
    <img src="../assets/img/profile.png" alt="requester profile photo" />
    <div class="user-info">
      <h2 class="full-name">{{ userInfo.fullName }}</h2>
      <p class="working-as">{{ userInfo.role }}</p>
    </div>
    <button href="" class="btn btn-info" type="button">Ver solicitudes</button>
    <div class="statistics">
      <section class="statistics-container">
        <div style="color: #189d00; font-weight: 500; font-size: 14px">
          {{ userInfo.receivedRequests }}
        </div>
        <span class="req-recived-icon"></span>
      </section>
      <section class="statistics-container">
        <div style="color: #ff8d00; font-weight: 500; font-size: 14px">
          {{ userInfo.partialReceived }}
        </div>
        <span class="req-partial-icon"></span>
      </section>
      <section class="statistics-container">
        <div style="color: #ff0000; font-weight: 500; font-size: 14px">
          {{ userInfo.nonReceivedRequests }}
        </div>
        <span class="req-nonrecived-icon"></span>
      </section>
    </div>

    <div class="actions">
      <svg id="edit-icon" class="edit-icon">
        <use href="/src/assets/icons/pencil-square.svg#pencil" />
      </svg>
      <svg @click="$emit('deleteClick')" class="delete-icon">
        <use href="/src/assets/icons/trash-fill.svg#trash" />
      </svg>
    </div>
  </div>
</template>
<style scoped>
.requester-card {
  background-color: var(--just-white);
  height: 190px;
  border: 0.5px solid rgb(1 1 1 / 21%);
  border-radius: 18px;
  margin: 15px;
  width: 335px;
  box-shadow: 0 0 10px 1px rgb(0 0 0 / 10%);
  position: relative;
  display: grid;
  grid-template-rows: 25% 30% 25% 20%;
  grid-template-columns: 30% 55% 15%;
}
.requester-card img {
  position: initial;
  box-shadow: none;
  width: 80px;
  height: 80px;
  border-radius: 20%;
  grid-area: 1 /1 / span 2;
  place-self: center;
  margin-top: 10px;
}
.user-info {
  grid-row: 2;
  grid-column: 2;
  place-self: center;
  text-align: center;
}

.full-name {
  font-size: 18px;
  color: var(--just-gray);
  grid-row: 2;
  align-self: end;
}
.working-as {
  grid-row: 3;
  color: var(--just-gray);
}
.btn {
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  letter-spacing: 1px;
  min-height: 37px;
  place-self: center;
}
.btn-info {
  border: 1px solid var(--primary);
  color: var(--primary);
  background-color: transparent;
  text-decoration: none;
  text-align: center;
  padding: 12px;
}
/* .btn-info:hover {
  color: var(--just-white);
  background-color: var(--primary);
} */
.requester-card .btn-info {
  grid-row: 3;
  grid-column: 2;
}
.statistics {
  grid-row: 2;
  grid-column: 1;
  grid-area: 3/1 / span 2;
  place-self: center;
  place-items: end;
  display: flex;
  flex-direction: column;
  margin: 0 0 10px 24px;
}
.statistics-container {
  display: flex;
  align-items: center;
  height: 25px;
}
.actions {
  grid-area: 1 /2 /1 / span 3;
  display: flex;
  justify-content: end;
  align-self: baseline;
  margin: 10px 10px 0 0;
  color: var(--just-gray);
}
.edit-icon,
.delete-icon {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  width: 20px;
  height: 20px;
  margin: 8px;
  cursor: pointer;
}
/* .edit-icon {
  background-image: url("/src/assets/icons/pencil-square.svg#pencil");
} */
/* .delete-icon {
  background-image: url("/src/assets/icons/trash-fill.svg#trash");
} */

.req-recived-icon,
.req-partial-icon,
.req-nonrecived-icon {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 10px;
}
.req-recived-icon {
  background-image: url("/src/assets/icons/battery-full.svg");
}
.req-partial-icon {
  background-image: url("/src/assets/icons/battery-half.svg");
}
.req-nonrecived-icon {
  background-image: url("/src/assets/icons/battery.svg");
}
</style>
