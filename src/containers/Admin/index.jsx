import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import { Route, Redirect, Switch} from 'react-router-dom'

import Header from "./Header";
import LeftNav from "./left_Nav";
import Check from "@/containers/Hoc";
import "./css/admin.less";
import Category from "./Category";
import Home from "./Home";
import Bar from "./Bar";
import Line from "./Line";
import Pie from "./Pie";
import Product from "./Product";
import Role from "./Role";
import User from "./User";
import Pruduct from "./Product";
const { Footer, Sider, Content } = Layout;
@connect(
  (state) => ({
    isLogin: state.userInfo.isLogin,
  }), // 映射状态
  {} // 映射方法
)
@Check
class Admin extends Component {
  render() {
    // if (!this.props.isLogin) return <Redirect to="login" />;
    return (
      <Layout className="admin-container">
        <Sider>
          <LeftNav />
        </Sider>
        <Layout>
          <Header />
          <Content>
            <Switch>
              <Route path="/admin/home" component={Home}/>
              <Route path="/admin/prod_about/category" component={Category}/>
              <Route path="/admin/prod_about/pruduct" component={Pruduct}/>
              <Route path="/admin/user" component={User}/>
              <Route path="/admin/role" component={Role}/>
              <Route path="/admin/charts/bar" component={Bar}/>
              <Route path="/admin//charts/line" component={Line}/>
              <Route path="/admin//charts/pie" component={Pie}/>
              <Redirect to="/admin/home"/>
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default Admin;
