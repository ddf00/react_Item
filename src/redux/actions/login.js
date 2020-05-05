import {
    SAVE_USERINFO,
    DELETE_USERINFO
} from "@/redux/action_types";

// 保存
export const saveUserInfo = userObj => {
    // 向localstorage中保存用户登录信息
    const {
        user,
        token
    } = userObj
    // 保存到localstoreage中
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
    return {
        type: SAVE_USERINFO,
        data: userObj
    }
}

// 删除
export const deleteuserinfo = userObj => {
    localStorage.clear()
    return {
        type: DELETE_USERINFO
    }
}