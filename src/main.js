// import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 引入初始化样式文件
import '@/styles/common.scss'
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 注册全局指令lazyload
import { lazyPlugin } from '@/directives/lazyload.js'

// 引入全局组件插件
import { componentMethod } from '@/components/index.js'
const app = createApp(App)
const pinia = createPinia()

app.use(router)

app.mount('#app')
app.use(lazyPlugin)
app.use(componentMethod)
app.use(pinia)

pinia.use(piniaPluginPersistedstate)