// 高阶组件  根据登录状态 检查传递过来的组件 
import React,{Component} from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
export default function (ReciveComponent) {
    @connect(
        state => ({isLogin: state.userInfo.isLogin}), //状态
        {} // 操作状态
    )
    class TargetComponent extends Component {
        render() {
            // 判断
            const {isLogin} = this.props // 获取登录标识
            const {pathname} = this.props.location
            if(!isLogin && pathname !== '/login') return <Redirect to="/login"/>
            if(isLogin && pathname === '/login') return <Redirect to="/admin/home"/>
            return <ReciveComponent {...this.props}/>
        }
    }
    return TargetComponent
}