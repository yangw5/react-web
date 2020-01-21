/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-20 14:39:29
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-21 10:49:18
 * @FilePath: \react-web\src\component\ui\Basis\widgets\config.js
 */

import React from 'react';
import { Input, Button } from 'antd';
import { ButtonGroup, Buttons } from '../../../../widget/basis';

const { Search } = Input;

let items = [
    {
        name: 'redux获取组件',
        description:
            '该组件是通过构建一个空壳组件，通过基本的与react-redux结合，获取store，再通过React.cloneElement先其不确定的子组件childen传递自己的props。从而子组件就可以在props获取到store进行操作',
        ComponentName: false,
        children: '',
        propsConfig: {
            hasButtons: true,
            requirement: { 0: ['new'], 1: ['edit'] },
        },
        other: {
            title: '',
            show: (receiveData, store) => (
                <div
                    style={{
                        width: '400px',
                        padding: '10px',
                        fontSize: '13px',
                    }}
                >
                    <Button
                        onClick={() => {
                            console.log(store.store);
                            alert(JSON.stringify(store.store.auth));
                        }}
                    >
                        获取store
                    </Button>
                    <Search
                        placeholder="请输入权限字段"
                        enterButton="设置权限"
                        onSearch={value => {
                            localStorage.setItem(
                                'user',
                                JSON.stringify({ uid: 369, permissions: [value] })
                            );
                            // debugger;
                            store.store.receiveData(
                                JSON.parse(localStorage.getItem('user') || {}).permissions,
                                'auth'
                            );
                            // receiveData(
                            //     JSON.parse(localStorage.getItem('user') || {}).permissions,
                            //     'auth'
                            // );
                        }}
                    />
                </div>
            ),
        },
    },
    {
        name: '权限组件',
        description: '该组件是对子组件进行权限绑定。以控制显示',
        ComponentName: Buttons,
        children: '',
        propsConfig: {
            hasButtons: true,
            requirement: { 0: ['new'], 1: ['edit'] },
        },
        other: {
            title: '',
            show: (receiveData, store) => (
                <div
                    style={{
                        width: '400px',
                        padding: '10px',
                        fontSize: '13px',
                    }}
                >
                    <Search
                        placeholder="请输入权限字段"
                        enterButton="设置权限"
                        onSearch={value => {
                            localStorage.setItem(
                                'user',
                                JSON.stringify({ uid: 369, permissions: [value] })
                            );
                            // debugger;
                            store.store.receiveData(
                                JSON.parse(localStorage.getItem('user') || {}).permissions,
                                'auth'
                            );
                            // receiveData(
                            //     JSON.parse(localStorage.getItem('user') || {}).permissions,
                            //     'auth'
                            // );
                        }}
                    />
                </div>
            ),
        },
    },
];

export default items;
