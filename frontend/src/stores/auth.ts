import { defineStore } from "pinia";

import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    student: null,
  }),
  actions: {
    async signIn(payload: object) {
      await axios
        .post("http://127.0.0.1:4004/api/student/login", payload)
        .then((res) => {
          localStorage.setItem("student_token", res.data.token);
        })
        .catch((er) => {
          console.log(er);
        });
    },
  },
});
