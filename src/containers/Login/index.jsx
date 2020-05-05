import React, { Component } from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { reqLogin } from "@/api";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { saveUserInfo } from "@/redux/actions/login";

import logo from "./images/logo.png";
import "./css/login.less";
class Login extends Component {
  // 表单验证成功提交的回调
  onFinish = async (values) => {
    let result = await reqLogin(values);
    const { status, data, msg } = result;
    if (status === 0) {
      // 成功
      message.success ("登录成功", 1); // 提示
      // 向redux和localstoreage中保存用户信息
      this.props.saveUserInfo(data);
      // this.props.history.replace('/admin')
    } else {
      message.error(msg);
    }
    console.log(result);
  };
  // 密码校验
  pwdValidator = (_, value = "") => {
    let errMsgArr = [];
    if (!value.trim()) return Promise.reject("密码必须输入");
    if (value.length < 4) errMsgArr.push("密码必须大于4位");
    if (value.length > 12) errMsgArr.push("密码必须小于12位");
    if (!/^\w+$/.test(value))
      errMsgArr.push("密码只能是英文, 数字, 下划线组成");
    if (errMsgArr.length !== 0) return Promise.reject(errMsgArr);
    else return Promise.resolve();
  };
  render() {
    if (this.props.isLogin) return <Redirect to="/admin" />;
    return (
      <div className="login">
        <header>
          <img src={logo} alt="logo" />
          <h1>商品管理系统</h1>
        </header>
        <section>
          <span className="title">用户登录</span>
          <Form className="login-form" onFinish={this.onFinish}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "用户名必须输入" },
                { min: 4, message: "用户名必须大于4位" },
                { max: 12, message: "用户名必须小于12位" },
                {
                  pattern: /^\w+$/,
                  message: "密码只能是英文, 数字, 下划线组成",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="用户名"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ validator: this.pwdValidator }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}


export default connect(
  (state) => ({ isLogin: state.userInfo.isLogin }), //映射状态
  { saveUserInfo } // 映射操作状态的方法
)(Login);
