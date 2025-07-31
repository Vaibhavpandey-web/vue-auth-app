import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Vuelidate from '@vuelidate/core'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(store)
app.use(router)
app.use(vuetify)
app.use(Vuelidate)

app.mount('#app')
