<template>
  <v-container class="d-flex flex-column justify-center align-center" style="height: 100vh;">
    <h1>Welcome, {{ user?.email || 'Guest' }}</h1>
    <v-btn color="error" v-if="user" @click="logout">Logout</v-btn>
    <v-btn color="primary" v-else @click="goToAuth">Login / Signup</v-btn>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const user = computed(() => store.getters.user)

function logout() {
  store.dispatch('logout')
  router.push('/auth')
}

function goToAuth() {
  router.push('/auth')
}
</script>