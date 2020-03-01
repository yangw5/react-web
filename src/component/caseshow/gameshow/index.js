/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-03-01 11:49:33
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-01 16:59:51
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
            <Clock />
        </div>
    );
};
