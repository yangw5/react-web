/*
 * @Description: 导航基础组件
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-26 08:22:55
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-21 15:53:22
 */

import React from 'react';
import { Menu, Icon } from 'antd';
import queryString from 'query-string'; //获取格式化url参数
import { Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
//用于包装拖拽根组件，Draggable和Droppable都需要包裹在DragDropContex内
//Droppable可被拖拽的区域
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

const renderMenuItem = item => (
    <MenuItem key={item.key}>
        {item.href ? (
            <a href={'ww'}>
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
                        : '')
                }
            >
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
        }
    >
        {item.subs.map(v => renderMenuItem(v))}
    </SubMenu>
);

export default ({ menus, defaultSelectedKeys = ['/app'], ...props }) => (
    <DragDropContext
        onDragEnd={() => {
            //数据更新
        }}
    >
        <Droppable droppableId="id">
            {provided => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                    {provided.placeholder}
                    {menus &&
                        menus.map((item, i) => (
                            <Draggable key={i} draggableId={item.key} index={i}>
                                {p => (
                                    <div
                                        ref={p.innerRef}
                                        {...p.draggableProps}
                                        {...p.dragHandleProps}
                                    >
                                        <Menu {...props}>
                                            {item.subs ? renderSubMenu(item) : renderMenuItem(item)}
                                        </Menu>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                </div>
            )}
        </Droppable>
    </DragDropContext>
);
