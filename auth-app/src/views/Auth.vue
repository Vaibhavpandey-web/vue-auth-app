<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <div class="auth-container">
      <v-btn-toggle v-model="tab" mandatory class="mb-4">
        <v-btn value="login">Login</v-btn>
        <v-btn value="signup">Signup</v-btn>
      </v-btn-toggle>
      <Login v-if="tab === 'login'" />
      <Signup v-else />
    </div>
  </v-container>
</template>

<script setup>
import { ref } from 'vue' 
import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'

const tab = ref('login')
</script>

<style scoped>
.auth-container {
  background: #f5f5f5;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.v-btn-toggle {
  margin-bottom: 24px;
  border-radius: 20px ;
}
</style>
