import axios from 'axios'
import {Toast} from "vant";

// 创建axios实例
const service = axios.create({
    baseURL: 'https://api.liuyanggang.com:8443/aibizhi/', // api 的 base_url
    timeout: 1200000 // 请求超时时间
})

let loading;
//内存中正在请求的数量
let loadingNum = 0;

function startLoading() {
    if (loadingNum == 0) {
        loading = Toast.loading({
            message: '加载中...',
            forbidClick: true,
        });
    }
    //请求数量加1
    loadingNum++;
}

function endLoading() {
    //请求数量减1
    loadingNum--
    if (loadingNum <= 0) {
        loading.close()
    }
}


// request拦截器
service.interceptors.request.use(
    config => {
        startLoading()
        config.headers['Content-Type'] = 'application/json'
        return config
    },
    error => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
    }
)


// response 拦截器
service.interceptors.response.use(
    response => {
        endLoading()
        const code = response.status
        if (code < 200 || code > 300) {
            Notification.error({
                title: response.message
            })
            return Promise.reject('error')
        } else {
            return response.data
        }
    },
    error => {
        endLoading()
        try {
            Notification.error({
                title: '接口请求失败',
                duration: 5000
            })
        } catch (e) {
            if (error.toString().indexOf('Error: timeout') !== -1) {
                Notification.error({
                    title: '网络请求超时',
                    duration: 5000
                })
                return Promise.reject(error)
            }
        }
        return Promise.reject(error)
    }
)
export default service
