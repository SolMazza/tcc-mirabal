import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Tooltip, Toast, Popover } from 'bootstrap'
import * as bootstrap from 'bootstrap'
import Alert from 'bootstrap/js/dist/alert'

const app = createApp(App)

app.use(router) 

app.mount('#app')
