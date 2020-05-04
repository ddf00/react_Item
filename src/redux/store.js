// 引入crateStore 创建store 
import {createStore, applyMiddleware} from "redux";
// 引入thunk 异步编码
import thunk from 'redux-thunk'
// 支持开发者工具的使用
import {composeWithDevTools} from "redux-devtools-extension";
// 引入reducer 
import allReducer from './reducers'

// 暴露store对象
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))