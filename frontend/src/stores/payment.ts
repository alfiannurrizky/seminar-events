import { defineStore } from 'pinia'
import axios from 'axios'

export const usePaymentStore = defineStore('payment', {
  state: () => ({
    payments: []
  }),
  actions: {
    async getPayments() {
      const token = localStorage.getItem('student_token')
      await axios
        .get('http://127.0.0.1:4004/api/student/payments', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((res) => {
          this.payments = res.data.data
          //   console.log(res.data.data)
        })
        .catch((er) => {
          console.log(er)
        })
    }
  }
})
