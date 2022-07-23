import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SocketPlugin from '@/plugins/SocketPlugin'

createApp(App).use(store).use(router).use(SocketPlugin, {
    connection: 'http://localhost:3000',
    options: {
        // Your Socket.io options here
    }}).mount('#app')
