// 创建 Count 组件相关的action 
// 既有两种action: 
            // 加 action
            // 减 action
import {INCREMENT,DECREMENT} from "../aciotn_type";

// 创建加的action 
export const createIncrementAction = value => ({type: INCREMENT, data: value})
export const createDecrementAction = value => ({type: DECREMENT, data: value})