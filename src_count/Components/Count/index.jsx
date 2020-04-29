import React, { Component } from "react";

export default class Count extends Component {
  state = {
    count: 0,
  };
  crement = (add) => {
    // 获取输入的值
    const { value } = this.refs.user_val;
    // 获取元数据
    let { count } = this.state;
    // 把value 转化成数组
    let add_value = value * 1;
    // 点击加 或 减
    if (add) count += add_value;
    else count -= add_value;
    // 更新状态
    this.setState({ count });
  };
  // 奇数添加
  incrementOdd = () => {
    // 获取输入的值
    const { value } = this.refs.user_val;
    // 获取元数据
    let { count } = this.state;
    // 把value 转化成数组
    let add_value = value * 1;
    if (count % 2 === 1) {
      // 加
      count += add_value;
      this.setState({ count });
    }
  };
  incrementAsync = () => {
    // 获取输入的值
    const { value } = this.refs.user_val;
    // 获取元数据
    let { count } = this.state;
    // 把value 转化成数组
    let add_value = value * 1;
    count += add_value;
    setTimeout(() => {
      this.setState({ count });
    }, 500);
  };

  render() {
    return (
      <div>
        <h1 style={{ fontSize: "30px" }}>当前求和: {this.state.count}</h1>
        <select ref="user_val">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button
          onClick={(add) => {
            this.crement((add = true));
          }}
        >
          +
        </button>
        <button
          onClick={(add) => {
            this.crement((add = false));
          }}
          style={{ margin: "10px" }}
        >
          -
        </button>
        <button onClick={this.incrementOdd} style={{ marginRight: "10px" }}>
          奇数添加
        </button>
        <button onClick={this.incrementAsync}>延迟添加</button>
      </div>
    );
  }
}
