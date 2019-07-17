import React from "react";
import { Menu, Icon } from "antd";
import queryString from "query-string"; //获取格式化url参数
import { Link } from "react-router-dom";
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

const renderMenuItem = item => (
  <MenuItem key={item.key}>
    {item.href ? (
      <a>
        {item.icon && <Icon type={`${item.icon}`} />}
        <span>{item.title}</span>
      </a>
    ) : (
      <Link
        to={
          (item.route || item.key) +
          (item.query
            ? `?${queryString.stringify(
                window._.isFunction(item.query) ? item.query() : item.query
              )}`
            : "")
        }>
        {item.icon && <Icon type={`${item.icon}`} />}
        <span>{item.title}</span>
      </Link>
    )}
  </MenuItem>
);

const renderSubMenu = item => (
  <SubMenu
    key={item.key}
    title={
      <span>
        {item.icon && <Icon type={`${item.icon}`} />}
        <span>{item.title}</span>
      </span>
    }>
    {item.subs.map(item => renderMenuItem(item))}
  </SubMenu>
);

export default ({ menus, defaultSelectedKeys = ["/app"], ...props }) => (
  <Menu
    // defaultSelectedKeys
    style={{
      background: "#f0f2f5",
      height: "100%",
      paddingTop: "50px",
      maxWidth: "200px"
    }}
    defaultOpenKeys={["/app/frontend"]}
    {...props}
    mode="inline">
    {menus &&
      menus.map(item =>
        item.subs ? renderSubMenu(item) : renderMenuItem(item)
      )}
  </Menu>
);
