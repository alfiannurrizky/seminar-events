<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <div class="fade-in">
        <div class="row">
          <div
            class="col-md-3 mt-1 mb-4"
            v-for="seminar in seminars"
            :key="seminar.id"
          >
            <div class="card h-10 border-0 rounded shadow-sm">
              <div class="card-body">
                <div class="card-img-actions">
                  <img
                    :src="
                      'http://localhost:4004' +
                      seminar.image.replace('public', '')
                    "
                    class="card-img img-fluid"
                  />
                </div>
              </div>
              <div class="card-body bg-light-custom text-center rounded-bottom">
                <div div class="mb-2">
                  <h6 class="font-weight-semibold mb-2"></h6>
                </div>
                <hr />
                <h6>{{ seminar.name }}</h6>
                <h6>Harga: {{ seminar.date }}</h6>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'

import { useSeminarStore } from '../stores/seminar'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

const store = useSeminarStore()
const { seminars } = storeToRefs(store)
const { getSeminars } = store

onMounted(() => {
  getSeminars()
})
</script>