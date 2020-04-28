// axios 二次封装

import axios from "axios";
import qs from "querystring";
// 配置请求路径
axios.defaults.baseURL = ''
// 配置超时时间
axios.defaults.tiemout = 20000


// 请求拦截器
axios.interceptors.reqest.use((config) => {
    const {
        method,
        data
    } = config

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
        return response.data
    },
    // 失败的回调
    err => {
        let errMsg = '位置错误, 请联系管理员'
        const {message} = err
        
    }
)

export default axios