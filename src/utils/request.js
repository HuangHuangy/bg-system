// 封装axios
import axios from 'axios'
import { getToken } from 'auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000 // request timeout 请求超时时间
})

// reques interceptor(拦截器)
service.interceptors.request.use(config => {
  // Do something before request is sent
  if (store.getters.token) {
    // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    config.headers['X-Token'] = getToken()
  }
  return config
},
error => {
  // Do something with request error
  console.log(error)
  Promise.reject(error)
})
