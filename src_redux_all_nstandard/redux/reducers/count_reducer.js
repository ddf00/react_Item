// count 组件服务的reducer 操作状态
import {INCREMENT, DECREMENT} from "../aciotn_type";
let initState = 0  // 初始化状态
export default function (perState = initState, action) {
    const {type, data} = action
    
    let newState
    switch (type) {
        case INCREMENT:
            // 加
            console.log('加', perState,action)
            newState = perState + data
            return newState
        case DECREMENT:
            // 减
            console.log('减', perState,action)
            newState = perState - data
            return newState
        default:
            // 如果没有动作 初始化
            console.log('初始化', perState, action)
            return  perState
    }
}