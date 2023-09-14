import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import 'vuetify/styles'

const app = createApp(App)

app.use(createVuetify())
app.use(createPinia())

app.mount('#app')
