/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-20 14:39:29
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-25 10:36:17
 * @FilePath: \react-web\src\component\ui\Basis\widgets\BasisStyle\config.js
 */

import React from 'react';
import { Input } from 'antd';
import { ButtonGroup, Buttons } from '../../../../widget';
import {
    DividerCustom,
    BreadcrumbCustom,
    ButtonsMaterial,
    Gap,
    MouseCustom,
} from '../../../../widget/basis';

const { Search } = Input;

let items = [
    {
        name: '表单操作按钮',
        description:
            '该组件是由确定按钮和取消按钮组成，主要是对表单组件进行操作。该组件对外暴露出交互事件的api,由父组件传递，会可以自定义额外的按钮。',
        ComponentName: ButtonGroup,
        children: '',
        propsConfig: {
            title: [],
            sumit: () => {
                alert('提交');
            },
            reset: () => {
                alert('提交');
            },
        },
    },
    {
        name: '功能操作按钮',
        description:
            '该组件是由各种操作按钮组成，包括新建，编辑等操作按钮，并且该组件是有权限进行显示控制的。',
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
    {
        name: '分隔线',
        description: '基于antd的Divider，包括style,type等相同的api',
        ComponentName: DividerCustom,
        children: '',
        propsConfig: {
            style: {
                border: '1px solid red',
            },
        },
    },
    {
        name: '间距器',
        description: '设置留白',
        ComponentName: Gap,
        propsConfig: {
            height: '50px',
            style: {
                background: '#fff',
            },
        },
    },
    {
        name: '鼠标事件',
        description: '对鼠标时间进行封装',
        ComponentName: MouseCustom,
        children: '鼠标右键',
    },
    {
        name: '面包屑',
        description: '配置父子对象，包括名称，图标，跳转地址，还可配置自定义连接符',
        ComponentName: BreadcrumbCustom,
        propsConfig: {
            breadItems: [
                { title: '自定义Ui库', icon: 'home', herf: '/app/ui/count' },
                { title: '基础组件' },
            ],
        },
    },
    {
        name: '全局操作按钮',
        description: '右下角，可进行权限组件包裹控制显示',
        ComponentName: ButtonsMaterial,
        propsConfig: {
            onSubmit: () => {
                alert('提交');
            },
            onEdit: () => {
                alert('编辑');
            },
            onBack: () => {
                alert('返回');
            },
            onLog: () => {
                alert('日志');
            },
        },
    },
    {
        name: '回到顶部',
        description: '右下角',
    },
];

export default items;
