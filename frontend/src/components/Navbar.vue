<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light shadow-lg bg-body rounded"
    >
      <div class="container">
        <a class="navbar-brand" href="#">{{ user.username }}</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link
                class="nav-link active"
                aria-current="page"
                to="/dashboard"
                >Dashboard</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/events">Event</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/user'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

const store = useUserStore()
const { user } = storeToRefs(store)
const { getUser } = store

onMounted(() => {
  getUser()
})
</script>