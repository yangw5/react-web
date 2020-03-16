/*
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-26 08:22:55
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-03 21:51:59
 */
import React, { Component } from 'react';
// import { Layout, Icon } from 'antd';
// import styles from './HeaderCustom.module.less';
// import classnames from 'classnames';
import CustomHeader from './component/header';
import './style/index.less';
import './style/antd/index.less';
import screenfull from 'screenfull'; //全屏
import { deleteCookie, toHtmlPage } from './utils';
let imgsrc = require('./assets/img/m1.jfif');
// const { Header } = Layout;

class HeaderCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            istitle: true,
            config: {
                logo: 'young5',
                fullName: 'young5后台系统',
                shortName: 'young5',
                search: {
                    slectOption: [
                        {
                            value: 'v1',
                            name: '条件1',
                        },
                        {
                            value: 'v2',
                            name: '条件2',
                        },
                        {
                            value: 'v3',
                            name: '条件3',
                        },
                        {
                            value: 'v4',
                            name: '条件4',
                        },
                        {
                            value: 'v5',
                            name: '条件5',
                        },
                        {
                            value: 'v6',
                            name: '条件6',
                        },
                    ],
                    searchOption: {
                        key: 'id',
                        OptionItem: ['name', 'sex'],
                        link: '~',
                    },
                    // callback: () => {
                    //     alert('查询成功');
                    // },
                    searchApi: value => {
                        console.log(value);
                        return [
                            {
                                id: '1',
                                name: 'young1',
                                sex: '男',
                            },
                            {
                                id: '2',
                                name: 'young2',
                                sex: '男',
                            },
                            {
                                id: '3',
                                name: 'young3',
                                sex: '男',
                            },
                            {
                                id: '4',
                                name: 'young4',
                                sex: '男',
                            },
                            {
                                id: '5',
                                name: 'young5',
                                sex: '女',
                            },
                        ];
                    },
                    // searchOptionDom: () => {
                    //     return '自定义';
                    // },
                    selectApi: value => {
                        console.log(value);
                        alert('查询成功');
                    },
                },
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
                        type: screenfull.isFullscreen ? 'fullscreen-exit' : 'fullscreen',
                        title: '全屏',
                        actions: {
                            onclick: () => {
                                // alert('全屏');
                                //4.o版本已经废弃了enabled
                                console.log(screenfull);
                                if (screenfull.isEnabled) {
                                    if (screenfull.isFullscreen) screenfull.exit();
                                    else screenfull.request();
                                } else {
                                }
                                //检测全屏错误;
                                if (screenfull.isEnabled) {
                                    screenfull.on('error', event => {
                                        console.error('Failed to enable fullscreen', event);
                                    });
                                }
                            },
                        },
                    },
                    {
                        title: '头像',
                        render: () => {
                            return (
                                <img
                                    className={'heard-tx'}
                                    src={imgsrc}
                                    alt="测试"
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50px',
                                    }}
                                    onClick={() => {
                                        alert('头像');
                                    }}
                                />
                            );
                        },
                    },
                ],
                extra: '',
            },
        };
    }
    //全屏设置
    setScreenfull() {
        if (screenfull.isEnabled) {
            if (screenfull.isFullscreen) screenfull.exit();
            else screenfull.request();
        } else {
        }
        //检测全屏错误;
        if (screenfull.isEnabled) {
            screenfull.on('error', event => {
                console.error('Failed to enable fullscreen', event);
            });
        }
    }
    //登出清空浏览器缓存
    Logout() {
        deleteCookie('y5Login');
        toHtmlPage('login');
    }
    render() {
        let { config } = this.state;
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
