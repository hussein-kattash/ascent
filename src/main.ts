import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.scss'
import router from "./router/index"
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css';

const globalOptions = {};

const app = createApp(App)

app.use(createPinia()).use(router)

// Register the VueTelInput plugin
app.component('vue-tel-input', VueTelInput)

app.mount('#app')

