import React, { Component } from "react";
import "./css/header.less";
import { Button, Modal } from "antd";
import { connect } from "react-redux";
import { deleteuserinfo } from "@/redux/actions/login";
import {
  FullscreenOutlined,
  FullscreenExitOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import screenfull from "screenfull";
import dayjs from "dayjs";
import {reqWether} from "@/api";
const { confirm } = Modal;
@connect(
  // 映射状态
  (state) => ({ username: state.userInfo.user.username }),
  // 映射状态中的方法
  { deleteuserinfo }
)
class Header extends Component {
  state = {
    isFull: false,
    time: dayjs().format("YYYY年MM月DD日 HH:mm:ss"),
    weatherData: {}
  };

  // 全屏 /非全屏切换
  fullScreen = () => {
    screenfull.toggle();
  };

  // 退出登录
  logout = () => {
    confirm({
      title: "确定退出登录?",
      icon: <ExclamationCircleOutlined />,
      cancelText: "取消",
      okText: "确定",
      onOk: () => {
        this.props.deleteuserinfo();
      },
    });
  };
  // 获取天气信息
  getWether = async ()=>{
    let result = await reqWether()
    const {dayPictureUrl,weather, temperature} = result
    this.setState({weatherData: {dayPictureUrl,weather, temperature}})
  }
  async componentDidMount() {
    // 检测屏幕变化
    screenfull.onchange(() => {
      const { isFull } = this.state;
      this.setState({ isFull: !isFull });
    });
    // 开启定时器计算时间
    this.timer = setInterval(() => {
      this.setState({ time: dayjs().format("YYYY年MM月DD日 HH:mm:ss") });
    }, 1000);
    // 请求天气
    this.getWether()
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { isFull, time, weatherData } = this.state;
    return (
      <div className="header-contarner">
        <div className="header-top">
          <Button size="small" onClick={this.fullScreen}>
            {isFull ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
          </Button>
          <span className="username">欢迎, {this.props.username}</span>
          <Button type="link" onClick={this.logout}>
            退出登录
          </Button>
        </div>
        <div className="header-bottom">
          <div className="bottom-left">
            <span>首页</span>
          </div>
          <div className="bottom-right">
            <span>{time}</span>
            <img
              src={weatherData.dayPictureUrl}
              alt="wether"
            />
            <span>{weatherData.weather}</span>
            <span>{weatherData.temperature}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
