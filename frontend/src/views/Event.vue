<template>
  <div>
    <Navbar />
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-md-12">
          <div class="card border-0 rounded shadow container">
            <table class="table table-striped table-hover mt-4">
              <thead>
                <th>No.</th>
                <th>Nama Event</th>
                <th>Status</th>
                <th>Sertifikat</th>
                <th>Tanggal Bayar</th>
              </thead>
              <tbody>
                <tr v-for="(payment, index) in payments" :key="payment.id">
                  <td>{{ index + 1 }}</td>
                  <td>
                    {{ payment.seminar.name }}
                  </td>
                  <td>
                    <div
                      v-if="payment.status === 'lunas'"
                      class="alert alert-success p-1"
                      style="width: 120px"
                      role="alert"
                    >
                      {{ payment.status }}
                    </div>
                    <div
                      v-else
                      class="alert alert-danger p-1"
                      style="width: 120px"
                      role="alert"
                    >
                      {{ payment.status }}
                    </div>
                  </td>
                  <td>
                    <button
                      @click="certificate(payment.id)"
                      class="btn btn-primary btn-sm"
                    >
                      Cetak Sertifikat
                    </button>
                  </td>
                  <td>{{ payment.createdAt.slice(0, 10) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import axios from 'axios'

import { usePaymentStore } from '../stores/payment'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

const store = usePaymentStore()
const { payments } = storeToRefs(store)
const { getPayments } = store

const certificate = async (id: string) => {
  const token = localStorage.getItem('student_token')
  await axios
    .get(`http://127.0.0.1:4004/api/student/certificates/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      responseType: 'blob'
    })
    .then((res) => {
      const fileUrl = window.URL.createObjectURL(new Blob([res.data]))
      const fileLink = document.createElement('a')
      fileLink.href = fileUrl
      fileLink.setAttribute('download', 'sertifikat.pdf')
      document.body.appendChild(fileLink)
      fileLink.click()
    })
    .catch((er) => {
      console.error(er)
    })
}

onMounted(() => {
  getPayments()
})
</script>