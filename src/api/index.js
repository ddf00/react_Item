import ajax from './ajax'
import jsonp from "jsonp";
import {
    message
} from "antd";
import {
    CITY,
    WETHER_AK
} from "@/config";
// import {CITY,WEATHER_AK} from "@/config";
export const reqLogin = (loginObj) => ajax.post('/login', loginObj)
// 请求天气信息
export const reqWether = () => {
    // 天气的url
    const URL = `http://api.map.baidu.com/telematics/v3/weather?location=${CITY}&output=json&ak=${WETHER_AK}`
    // `http://api.map.baidu.com/telematics/v3/weather?location=xxx&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`

    return new Promise((resolve) => {
        jsonp(URL, {
            timeout: 2000,
        }, (err, data) => {
            if (!err) {
                resolve(data.results[0].weather_data[0])
            } else {
                message.error('请求天气错误, 联系管理员')
            }
        })
    })
}