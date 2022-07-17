import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './input.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrash, faUserSecret, faCartShopping } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash, faUserSecret, faCartShopping)

createApp(App).use(router).use(store).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
