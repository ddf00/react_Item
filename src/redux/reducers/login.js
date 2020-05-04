import {SAVE_USERINFO} from "@/redux/action_types";

// 尝试从localstoreage中读取user 和 token
let _user 
try {
    _user = JSON.parse(localStorage.getItem('user'))
} catch (error) {
    _user = null
}

let _token = localStorage.getItem('token')

// 定义一个初始化状态
let initState = {
    user: _user,
    token: _token,
    isLogin: _user && _token ? true : false // 是否有登录标识
}

export default function(perState = initState, action) {
    // 获取type data
    const {type, data} = action
    let newState 
    switch (type) {
        case SAVE_USERINFO:
            newState = {...data, isLogin: true}
            return newState
        default: // 初始化
        return perState
    }
    
}