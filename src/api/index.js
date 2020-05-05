import ajax from './ajax'
// import jsonp from "jsonp";
// import {CITY,WEATHER_AK} from "@/config";
export const reqLogin =(loginObj) => ajax.post('/login', loginObj)
// 请求天气信息
// export const reqWeatherData = () => {
//     // 定义请求天气的url
//     const URL = `http://api.map.baidu.com/telematics/v3/weather?location=${CITY}&output=json&ak=${WEATHER_AK}`
//     // 使用jsonp库发送请求
//     jsonp(URL,{
//         output: 'json',
//         ak: WEATHER_AK,
//         param: ``,
//         timeout: 2000
//     }, ()=>{
      
//     })
// }