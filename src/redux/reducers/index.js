// 引入combineReducers 用于合并多个reducer
import {combineReducers} from "redux";

import LoginReducer from "./login";
// 管理标题
import titleReducer from "./title";

export default combineReducers({
    userInfo: LoginReducer,
    title: titleReducer
})