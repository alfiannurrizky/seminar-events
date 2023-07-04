import { defineStore } from 'pinia'
import axios from 'axios'

export const useSeminarStore = defineStore('seminar', {
  state: () => ({
    seminars: []
  }),
  actions: {
    async getSeminars() {
      const token = localStorage.getItem('student_token')
      await axios
        .get('http://127.0.0.1:4004/api/student/seminars', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((res) => {
          this.seminars = res.data.data
        })
        .catch((er) => {
          console.log(er)
        })
    }
  }
})
