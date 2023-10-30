import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import SignInPage from './components/SignInPage.vue'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('sign-in', SignInPage)

app.mount('#app')
