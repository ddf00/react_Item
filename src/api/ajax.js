// axios 二次封装

import axios from "axios";
import qs from "querystring";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {
    message as msg
} from "antd";
// 配置请求路径
axios.defaults.baseURL = '/api'
// 配置超时时间
axios.defaults.tiemout = 20000


// 请求拦截器
axios.interceptors.request.use((config) => {
    // 开启加载进度条
    NProgress.start()
    const {
        method,
        data
    } = config
    // 统一处理post请求json编码问题
    if (method.toLowerCase() === 'post' && data instanceof Object) {
        config.data = qs.stringify(data)
    }

    // 必须返回config
    return config
})

// 响应拦截器
axios.interceptors.response.use(
    // 成功的回调
    response => {
        // 关闭加载进度条
        NProgress.done()
        return response.data
    },
    // 失败的回调
    error => {
        // 关闭加载进度条
        NProgress.done()
        let errMsg = '位置错误, 请联系管理员'
        const {
            message
        } = error
        if (message.indexOf('401') !== -1) errMsg = "未登录或身份过期, 请重新登录"
        else if (message.indexOf('Network Error') !== -1) errMsg = "网络断开, 请检查网络"
        else if (message.indexOf('timeout') !== -1) errMsg = '请求超时 网路不稳定'
        msg.error(errMsg, 1)
        return new Promise(() => {})
    }
)

export default axios