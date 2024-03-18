import axios from 'axios'
import { ElMessage } from 'element-plus'
// ElMessage本身使用的样式文件(官网的文件可能覆盖样式)
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/user'
import router from '@/router/index.js'


// 创建axios实例
const httpInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  // 1. 从pinia中获取数据
  const userStore = useUserStore()
  // 2. 按照后端的要求拼接token数据
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
    console.log(token);
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  const userStore = useUserStore()
  // 修改错误提示
  ElMessage({
    type: 'warning',
    message: e.response.data.message
  })
  // token 401
  // 1.清除本地数据
  if (e.response.statue === 401) {
    userStore.clearUserInfo()
    router.push('/login')
  }
  return Promise.reject(e)
})


export default httpInstance