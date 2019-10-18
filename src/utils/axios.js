import axios from 'axios'
import { MessageBox, Message } from 'element-ui'


// 线上登陆接口
const url = ' ' //线上
const mainUrl = ''  //线上
const loginURl = ''
const ctx = ''

const service = axios.create({
    //  url = base url + request url
    // baseURL: process.env.VUE_APP_BASE_API,
    baseURL: url,
    // withCredentials: true, // send cookies when cross-domain requests
     timeout: 10000, // request timeout
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
const CTService = axios.create({
    timeout: 10000, // request timeout
    headers:{
        'token': localStorage.token,
        //'Accept':'application/json, text/javascript, */*; q=0.01'
    }
})

axios.defaults.timeout = 10000
axios.defaults.baseURL = url
// axios.defaults.headers.common['token'] === localStorage.token
// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        if (localStorage.token) {
            //   // please modify it according to the actual situation
            config.headers['token'] = localStorage.token
            //    axios.defaults.headers['token'] = localStorage.token
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }  
)

CTService.interceptors.request.use(
    config => {
        // do something before request is sent
        if (localStorage.token) {
            //   // please modify it according to the actual situation
            config.headers['token'] = localStorage.token
            //    axios.defaults.headers['token'] = localStorage.token
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data   
        // if the custom code is not 20000, it is judged as an error.
        if (res.status !== 10000) {
            Message({
                message: res.info || 'Error',
                type: 'error',
                duration: 5 * 1000
            })

            // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
            if (res.status === 10005) {
                // to re-login
                localStorage.removeItem('token');
                localStorage.removeItem('userInfo');
                window.location.href = loginURl;
            }
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)
CTService.interceptors.response.use(

    response => {
        const res = response.data
        // if the custom code is not 20000, it is judged as an error.
        if (res.status !== 10000) {
            Message({
                message: res.info || 'Error',
                type: 'error',
                duration: 5 * 1000
            })

            // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
            if (res.status === 10005) {
                // to re-login
                localStorage.removeItem('token');
                localStorage.removeItem('userInfo');
                window.location.href = loginURl;
            }
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

const get = (url, data) => service.get(url, {
    params: data
})
const post = (url, data) => service.post(url, data)
const del = (url, data) => service.delete(url, data)
const head = (url, data) => service.head(url, data)
const options = (url, data) => service.options(url, data)
const put = (url, data) => service.put(url, data)
const patch = (url, data) => service.patch(url, data)
const ctService = (config) =>CTService.request(config)
export {
    get,
    post,
    del,
    head,
    options,
    put,
    patch,
    ctService,
    url,
    ctx,
    mainUrl
}
