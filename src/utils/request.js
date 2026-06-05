import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:8080/api', // 后端地址
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(config => {
  return config
})

// 响应拦截器
service.interceptors.response.use(res => {
  return res.data
})

export default service