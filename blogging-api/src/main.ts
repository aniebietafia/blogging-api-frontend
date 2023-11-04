import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import LoginPage from './components/LoginPage.vue'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// app.component('login-page', LoginPage)

app.mount('#app')
