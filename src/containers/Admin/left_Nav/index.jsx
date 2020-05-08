import React, { Component } from "react";
import "./css/index.less";
import logo from "@/assets/images/logo.png";
import { Menu } from "antd";
import menus from "@/config/menu_config";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { saveTitle } from "@/redux/actions/title";
const { SubMenu, Item } = Menu;
@connect(
  () => ({}), // 状态
  { saveTitle } // 状态方法
)
@withRouter
class leftNav extends Component {
  save_Title = (title) => {
    this.props.saveTitle(title);
  };
  // 计算title
  computed = () => {
    // 从路径中获取title
    const { pathname } = this.props.location;
    let currentKey = pathname.split("/").slice(-1)[0];
    if(currentKey === 'admin') currentKey = 'home'
    let title = "";
    // 匹配对应的title
    menus.forEach((menuObj) => {
      if (menuObj.children instanceof Array) {
        // 有子菜单
        let result = menuObj.children.find(
          (childObj) => childObj.key === currentKey
        );
        if (result) title = result.title;
      } else {
        // 没有子菜单
        if (menuObj.key === currentKey) title = menuObj.title;
      }
    });
    this.props.saveTitle(title);
  };
  componentDidMount() {
    // 根据路径计算出标题
    this.computed();
  }
  // 创建菜单
  createMenu = (menuArr) => {
    return menuArr.map((menuObj) => {
      if (!menuObj.children) {
        return (
          <Item
            key={menuObj.key}
            onClick={() => {
              this.save_Title(menuObj.title);
            }}
          >
            <Link to={menuObj.path} style={{ color: "#fff" }}>
              {<menuObj.icon />}
              {menuObj.title}
            </Link>
          </Item>
        );
      } else {
        return (
          <SubMenu
            style={{ color: "#fff" }}
            key={menuObj.key}
            icon={<menuObj.icon />}
            title={menuObj.title}
          >
            {this.createMenu(menuObj.children)}
          </SubMenu>
        );
      }
    });
  };
  render() {
    // console.log(this.props.location.pathname.split('/').slice(-1));
    const { pathname } = this.props.location;
    const openedkey = pathname.split("/");
    const checkedkey = openedkey.slice(-1);
    return (
      <div className="left-nav">
        <div className="nav-top">
          <img src={logo} alt="logo" />
          <h1>商品管理系统</h1>
        </div>
        <div className="nav-bottom">
          <Menu
            defaultSelectedKeys={checkedkey} // 默认选中
            defaultOpenKeys={openedkey} // 默认展开
            mode="inline" // 菜单模式
            theme="dark" // 主题
          >
            {this.createMenu(menus)}
          </Menu>
        </div>
      </div>
    );
  }
}
export default leftNav;
