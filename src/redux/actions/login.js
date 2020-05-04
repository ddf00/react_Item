import {SAVE_USERINFO,} from "@/redux/action_types";

export const saveUserInfo = userObj => {
    // 向localstorage中保存用户登录信息
    const {user, token} = userObj
    // 保存到localstoreage中
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.getItem('token', token)
    return {type: SAVE_USERINFO, data: userObj}
}
