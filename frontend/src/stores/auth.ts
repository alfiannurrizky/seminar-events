import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

import axios from 'axios'
const router = useRouter()

export const useAuthStore = defineStore('auth', {
  state: () => ({
    student: null
  }),
  actions: {
    async signIn(payload: object) {
      await axios
        .post('http://127.0.0.1:4004/api/student/login', payload)
        .then((res) => {
          localStorage.setItem('student_token', res.data.token)
        })
        .catch((er) => {
          if (er.response.status === 401) {
            alert('email or password is wrong!')
          }
          router.push({
            path: '/'
          })
        })
    }
  }
})
