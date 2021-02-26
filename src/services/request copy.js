import axios from 'axios'
import Vue from 'vue'
import qs from 'qs'
import store from '../store'
import { Toast } from 'vant'

Vue.use(Toast)

function getBaseUrl() {
    const flag = process.env.NODE_ENV
    console.log("flag", flag)
    if (flag === 'development') {
        return process.env.VUE_APP_BASE_API
    } else {
        return window.snBaseConfig.BASE_API
    }
}
console.log("getBaseUrl()", getBaseUrl())
const service = axios.create({
    baseURL: getBaseUrl(),
    timeout: 30 * 1000
})
service.interceptors.request.use(
    config => {
        const { loadingText } = config.headers
        const { noLoading } = config.headers
        console.log("noLoading", noLoading)
        if (!noLoading) {
            Toast.loading({
                message: loadingText ? decodeURI(loadingText) : '加载中' + '...',
                forbidClick: true,
                duration: 0,
                loadingType: 'spinner'
            })
        }
        if (store.getters.token) {
            // config.headers.token = store.getters.shopH5InfoToken
            config.headers['shopH5InfoToken'] = store.getters.token
        }
        if (config.method === 'post') {
            const cType = config.headers['Content-Type']
            config.headers['Content-Type'] = cType ?
                cType :
                'application/x-www-form-urlencoded'
            const params = {
                token: store.getters.token,
                // service: 'shuttle'
            }
            config.data =
                cType === 'application/json' ?
                Object.assign(config.data || {}, params) :
                qs.stringify(Object.assign(config.data || {}, params))
        }
        config.cancelToken = new axios.CancelToken(function(cancel) {
            store.commit('pushToken', { cancelToken: cancel })
        })
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)
service.interceptors.response.use(
    response => {
        const res = response.data
        Toast.clear()
            // console.log("resres", res)
        if (res.code !== "0") {
            // console.log("code 0")
            if (response.config.url.indexOf('/login') !== -1) {

            } else {
                Toast.fail(res.msg)
            }
            console.log('response', response.config.url.indexOf('/login') !== -1)
            if (res.code === 1001) {
                //token过期
                store.commit('user/resetLogin')
            }
            // return res
            return Promise.reject(res)
                // return Promise.reject(new Error(res.msg || 'Error'))
        } else {
            // console.log("code !0")
            // console.log("red", res)
            // try {
            //     if (res.data && typeof res.data === 'string') {
            //         res.data = JSON.parse(res.data)
            //     }
            //     if (res.data.body && typeof res.data.body === 'string') {
            //         res.data.body = JSON.parse(res.data.body)
            //     }
            // } catch (error) {}
            // if (response.config.url.indexOf('/h5/login') !== -1) {
            //     return res
            // } else {
            //     if (res.data.code_ === 0) {
            // return res.data
            // } else {
            //     // Toast.fail(res.data.message_)
            // }
            // }
            return res
        }
    },
    error => {
        if (error.msg !== '取消请求') {
            Toast.fail(error)
            return Promise.reject(error)
        }
        console.log(error)
    }
)

export default service