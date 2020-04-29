import React, { Component } from "react";
import store from "../../redux/store";
import {
  createIncrementAction,
  createDecrementAction,
} from "../../redux/count_action_creator";

export default class Count extends Component {
  // 加
  increment = () => {
    // 获取输入的值
    const { value } = this.refs.user_val;
    store.dispatch(createIncrementAction(value * 1));
  };
  // 减
  decrement = () => {
    // 获取输入的值
    const { value } = this.refs.user_val;
    store.dispatch(createDecrementAction(value * 1));
  };

  // 奇数添加
  incrementOdd = () => {
    // 获取输入的值
    const { value } = this.refs.user_val;
    let count = store.getState();
    if (count % 2 === 1) {
      store.dispatch(createIncrementAction(value * 1));
    }
  };
  // 延时加
  incrementAsync = () => {
    // 获取输入的值
    const { value } = this.refs.user_val;
    setTimeout(() => {
      store.dispatch(createIncrementAction(value * 1));
    }, 500);
  };

  render() {
    return (
      <div>
        <h1 style={{ fontSize: "30px" }}>当前求和: {store.getState()}</h1>
        <select ref="user_val">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement} style={{ margin: "10px" }}>
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
