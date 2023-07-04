import { defineStore } from 'pinia'

import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: []
  }),
  actions: {
    async getUser() {
      const token = localStorage.getItem('student_token')
      await axios
        .get('http://127.0.0.1:4004/api/student/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((res) => {
          this.user = res.data.data
        })
        .catch((er) => {
          console.error(er)
        })
    }
  }
})
