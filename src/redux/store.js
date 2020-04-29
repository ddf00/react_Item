// 创建redux 的核心函数的一个对象

// 引入createStore
import { createStore } from "redux";
// 引入count服务的reducer
import countReducer from "./count_reducer";

// 创建store, 同时制定好为state所服务的reducer
export default createStore(countReducer)