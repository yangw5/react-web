/*
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-26 08:22:55
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-08 17:37:06
 */
import React, { Component } from 'react';
// import { Layout, Icon } from 'antd';
// import styles from './HeaderCustom.module.less';
// import classnames from 'classnames';
import CustomHeader from './component/header';
import './style/index.less';
import './style/antd/index.less';
import { deleteCookie, toHtmlPage } from './utils';
let imgsrc = require('./assets/img/m1.jfif');
// const { Header } = Layout;

let config = {
    logo: 'young5',
    fullName: 'young5后台系统',
    shortName: 'young5',
    icon: [
        {
            type: 'logout',
            title: '退出',
            actions: {
                onclick: () => {
                    deleteCookie('y5Login');
                    toHtmlPage('login');
                },
            },
        },
        {
            type: 'edit',
            title: '设置',
            actions: {
                onclick: () => {
                    alert('设置');
                },
            },
        },
        {
            type: 'fullscreen',
            title: '全屏',
        },
        {
            title: '头像',
            render: () => {
                return (
                    <img
                        src={imgsrc}
                        alt="测试"
                        style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50px',
                        }}
                        onClick={() => {}}
                    />
                );
            },
        },
    ],
    search: true,
    extra: '',
};

class HeaderCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            istitle: true,
        };
    }

    Logout() {
        deleteCookie('y5Login');
        toHtmlPage('login');
    }
    render() {
        return (
            <div>
                <CustomHeader
                    collapsed={this.props.collapsed}
                    toggle={this.props.toggle}
                    config={config}
                />
            </div>
        );
    }
}

export default HeaderCustom;
