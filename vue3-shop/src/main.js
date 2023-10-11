import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue';
import router from './router/router'
import store from './store/index';
import YmapPlugin from 'vue-yandex-maps'

createApp(App).use(router).use(store).use(YmapPlugin).mount('#app')

