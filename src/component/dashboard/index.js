/*
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-27 16:26:04
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-02-05 14:56:48
 */
import React, { Component } from 'react';
import { BreadcrumbCustom } from '../widget';

export default class DashBoard extends Component {
    render() {
        const breadItems = [{ title: '首页' }];
        return (
            <div style={{ height: '100%' }}>
                <BreadcrumbCustom {...{ breadItems }} />
            </div>
        );
    }
}
