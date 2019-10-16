import axios from 'axios'
import router from '../router'
import Cookies from 'js-cookie'

import { Message } from 'element-ui'
// export const baseURL = process.env.BASE_API
export const baseURL = process.env.VUE_APP_BASE_API
// export const baseURL = 'http://172.19.23.103:7001'

export const server = axios.create({ baseURL, timeout: 0 })
// timeout: 0
server.interceptors.request.use(
  config => {
    config.headers.timeout = 'infinite'
    let Token
    if (config.headers.Authorization) {
      Token = config.headers.Authorization
    } else {
      Token = sessionStorage.getItem('Token')
    }
    config.headers.Authorization = Token
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

server.interceptors.response.use(response => {
  const resData = response.data
  if (resData.token) {
    sessionStorage.setItem('Token', resData.token)
    Cookies.set('Token', resData.token)
  }
  return resData
},
error => {
  if (error.response && error.response.status === 401) {
    sessionStorage.clear()
    Message.error('身份已过期，请重新登录')
    router.push('/login')
  }
}
)
export default function request(api, data = {}, headers = { 'Content-Type': 'application/json' }, responseType = '') {
  const [method, url] = [...api.split('|')]
  if (method === 'get') {
    return server({ url, method, params: data, headers, responseType })
  } else {
    return server({ url, method, data, headers, responseType })
  }
}
