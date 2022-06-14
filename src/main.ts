import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import naiveUI from 'naive-ui'
import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
let app = createApp(App)
app.config.globalProperties.$axios=axios;
axios.defaults.baseURL = "http://localhost:8888/"
app.use(ElementPlus)
app.use(router)
app.use(store)
app.use(naiveUI)
app.mount('#app')
