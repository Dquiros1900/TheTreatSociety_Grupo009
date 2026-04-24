import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/css/layout.css'
import './assets/css/tokens.css'
import './assets/css/estilos.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
