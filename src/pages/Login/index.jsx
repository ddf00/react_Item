import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import qs from "querystring";

import logo from "./images/logo.png";
import "./css/login.less";
export default class Login extends Component {
    // 表单验证成功提交的回调
    onFinish = values => {
        console.log(values);
        axios.post("http://localhost:3000/login", qs.stringify(values))
        .then(
            resposne => {console.log("成功", resposne)},
            error => {console.log("失败",error)}
        )
    }
  // 密码校验
  pwdValidator = (_, value = "") => {
    let errMsgArr = [];
    if (!value.trim()) return Promise.reject("密码必须输入");
    if (value.length < 4) errMsgArr.push("密码必须大于4位");
    if (value.length > 12) errMsgArr.push("密码必须小于12位");
    if (!/^\w+$/.test(value)) errMsgArr.push("密码只能是英文, 数字, 下划线组成");
    if(errMsgArr.length !== 0) return Promise.reject(errMsgArr)
    else return Promise.resolve();
  };
  render() {
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
