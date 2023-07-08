<template>
  <section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-md-8 col-lg-7 col-xl-6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            class="img-fluid"
            alt="Phone image"
          />
        </div>
        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <h1>LOGIN</h1>
          <br />

          <form @submit.prevent="handleLogin()">
            <div class="form-outline mb-4">
              <input
                type="email"
                id="form1Example13"
                class="form-control form-control-lg"
                v-model="email"
                placeholder="Email"
              />
            </div>

            <div class="form-outline mb-4">
              <input
                type="password"
                id="form1Example23"
                class="form-control form-control-lg"
                v-model="password"
                placeholder="Password"
              />
            </div>

            <div class="d-flex justify-content-around align-items-center mb-4">
              <div class="form-check"></div>
            </div>

            <button type="submit" class="btn btn-primary btn-lg btn-block">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')

const authStore = useAuthStore()

const handleLogin = async () => {
  const formData = new FormData()

  formData.append('email', email.value)
  formData.append('password', password.value)

  await authStore.signIn(formData)
  router.push({
    path: '/dashboard'
  })
}
</script>