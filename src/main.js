const { createApp } = Vue;
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/mobile/flexible.js'
import '@/styles/reset.css'
createApp(App).use(router).use(store).use(vant.Lazyload).mount('#app')