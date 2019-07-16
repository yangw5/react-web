import React from "react";
import { Menu } from "antd";
import queryString from "query-string"; //获取格式化url参数
import { Link } from "react-router-dom";
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

const renderMenuItem = item => (
  <MenuItem key={item.key}>
    {item.href ? (
      <a>
        {item.icon && <i className={`${item.icon}`} />}
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
        {item.icon && <i className={`${item.icon}`} />}
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
        {item.icon && <i className={`${item.icon}`} />}
        <span>{item.title}</span>
      </span>
    }>
    {item.subs.map(item => renderMenuItem(item))}
  </SubMenu>
);

export default ({ menus, ...props }) => (
  <Menu
    style={{ width: 240 }}
    defaultSelectedKeys={["1"]}
    defaultOpenKeys={["sub1"]}
    {...props}
    mode="inline">
    {menus &&
      menus.map(item =>
        item.subs ? renderSubMenu(item) : renderMenuItem(item)
      )}
  </Menu>
);
