/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-02-25 14:18:09
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-25 14:27:53
 * @FilePath: \react-web\src\component\widget\basis\MouseItemsCustom.js
 */
import React, { useState } from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MouseItemsCustom = props => {
    let [menus, setMenus] = useState([{ key: 'copy', name: '复制', onClick: this._copy }]);
    let { pageX, pageY, showMenu, chidren } = props;
    return (
        <div style={{ position: 'relative' }}>
            {chidren}
            {showMenu && (
                <div
                    ref={div => (this.contextMenu = div)}
                    className="contextmenu"
                    style={{ position: 'fixed', top: pageY, left: pageX }}
                >
                    <Menu
                        style={{ width: 100 }}
                        mode="vertical"
                        className="contextmenu__menu"
                        onClick={this.onMenuClick}
                    >
                        {menus.map((v, i) =>
                            v.subs ? (
                                <SubMenu
                                    key={v.key}
                                    title={v.name}
                                    className="contextmenu__submenu"
                                >
                                    {v.subs.map(sub => (
                                        <Menu.Item key={sub.key}>{sub.name}</Menu.Item>
                                    ))}
                                </SubMenu>
                            ) : (
                                <Menu.Item key={v.key}>{v.name}</Menu.Item>
                            )
                        )}
                    </Menu>
                </div>
            )}
        </div>
    );
};
export default MouseItemsCustom;
