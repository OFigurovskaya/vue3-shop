import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue';
import router from './router/router'
import store from './store/index';
import YmapPlugin from 'vue-yandex-maps'

const settings = {
    apiKey: '962531c6-b115-4090-9ff5-de60778039a6',
    lang: 'ru_RU',
    coordorder: 'latlong',
    enterprise: false,
    version: '2.1'
  }

createApp(App).use(router).use(store).use(YmapPlugin, settings).mount('#app')
