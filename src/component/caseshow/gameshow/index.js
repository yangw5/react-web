/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-03-01 11:49:33
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-01 20:54:24
 * @FilePath: \react-web\src\component\caseshow\gameshow\index.js
 */
import React from 'react';
import { BreadcrumbCustom } from '../../widget';
import { Clock } from './widget';
export default () => {
    const breadItems = [{ title: '游戏人生' }];
    return (
        <div>
            <BreadcrumbCustom {...{ breadItems }} />
            <div style={{ padding: '20px' }}>有趣的技术案例汇总展示</div>
            <Clock />
        </div>
    );
};
