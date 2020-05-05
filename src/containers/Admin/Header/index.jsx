import React, { Component } from "react";
import "./css/header.less";
import { Button } from "antd";
import { connect } from "react-redux";
import { deleteuserinfo } from "@/redux/actions/login";
import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons";
import screenfull from "screenfull";
class Header extends Component {
  state = {
    isFull: false,
  };

  // 全屏 /非全屏切换
  fullScreen = () => {
    screenfull.toggle();
  };

  // 退出登录
  logout = () => {
      this.props.deleteuserinfo();
  };

  componentDidMount() {
    screenfull.onchange(() => {
      const { isFull } = this.state;
      this.setState({ isFull: !isFull });
    });
  }
  render() {
    return (
      <div className="header-contarner">
        <div className="header-top">
          <Button size="small" onClick={this.fullScreen}>
            {this.state.isFull ? (
              <FullscreenExitOutlined />
            ) : (
              <FullscreenOutlined />
            )}
          </Button>
          <span className="username">欢迎, xxx</span>
          <Button type="link" onClick={this.logout}>
            退出登录
          </Button>
        </div>
        <div className="header-bottom">
          <div className="bottom-left">
            <span>首页</span>
          </div>
          <div className="bottom-right">
            <span>2002年5月5日 00:00:00</span>
            <img
              src="http://demo.sc.chinaz.com/Files/pic/icons/5675/0.png"
              alt="wether"
            />
            <span>阴天</span>
            <span>温度: 25 ~ 35℃</span>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  // 映射状态
  (state) => ({}),
  // 映射状态中的方法
  { deleteuserinfo }
)(Header);
