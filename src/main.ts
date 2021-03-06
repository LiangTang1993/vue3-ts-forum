import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.scss'
import './assets/css/elementPlus.scss'
// element-ui
const ElementPlus = require('element-plus')
import 'element-plus/theme-chalk/index.css';

const app = createApp(App)
app.use(ElementPlus)
app.use(store).use(router).mount('#app')
