import { defineStore } from "pinia";

const userState = defineStore("userState", {
  state: {
    userInfo: {},
  },
});

export default userState;
