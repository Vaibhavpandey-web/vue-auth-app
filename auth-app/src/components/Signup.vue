<template>
  <v-card class="pa-4" width="400">
    <v-card-title>Signup</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="signup">
        <v-text-field
          label="Email"
          v-model="email"
          :error-messages="emailErrors"
          @blur="v$.email.$touch()"
        />
        <v-text-field
          label="Password"
          type="password"
          v-model="password"
          :error-messages="passwordErrors"
          @blur="v$.password.$touch()"
        />
        <v-btn type="submit" color="primary">Signup</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email as emailRule, minLength } from '@vuelidate/validators'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const email = ref('')
const password = ref('')
const router = useRouter()
const store = useStore()

const rules = {
  email: { required, email: emailRule },
  password: { required, minLength: minLength(6) },
}

const v$ = useVuelidate(rules, { email, password })

const emailErrors = computed(() =>
  !v$.value.email.$dirty ? [] : v$.value.email.$errors.map(e => e.$message)
)

const passwordErrors = computed(() =>
  !v$.value.password.$dirty ? [] : v$.value.password.$errors.map(e => e.$message)
)

function signup() {
  v$.value.$touch()
  if (v$.value.$invalid) return

  const user = { email: email.value }
  store.dispatch('login', user)
  router.push('/')
}
</script>
