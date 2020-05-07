import React, { Component } from "react";
import "./css/index.less";
import logo from "@/assets/images/logo.png";
import { Menu } from "antd";
import menus from "@/config/menu_config";

const { SubMenu, Item } = Menu;
export default class leftNav extends Component {
  // 创建菜单
  createMenu = (menuArr) => {
    return menuArr.map((menuObj) => {
      if (!menuObj.children) {
        return (
          <Item key={menuObj.key} icon={<menuObj.icon />}>
            {menuObj.title}
          </Item>
        );
      } else {
        return (
          <SubMenu
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
    return (
      <div className="left-nav">
        <div className="nav-top">
          <img src={logo} alt="logo" />
          <h1>商品管理系统</h1>
        </div>
        <div className="nav-bottom">
          <Menu
            defaultSelectedKeys={["home"]} // 默认选中
            defaultOpenKeys={[]} // 默认展开
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
