import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// element-ui
const ElementPlus = require('element-plus')
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App)
app.use(ElementPlus)
app.use(store).use(router).mount('#app')
