/*
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-10-10 08:27:25
 * @LastEditors: yangw5
 * @LastEditTime: 2019-10-10 10:03:35
 */
import React, { useState, useEffect } from 'react';
import { BreadcrumbCustom } from '../../widget';
import { HeaderTree, BodyTree } from './widgets';

export default () => {
    const breadItems = [{ title: '标签树', icon: 'home' }];
    return (
        <div style={{ overflow: 'visible' }}>
            <BreadcrumbCustom {...{ breadItems }} />
            <div style={{ height: '1px', background: '#eee', marginBottom: '10px' }} />
            {/* 头 */}
            <HeaderTree />
            <BodyTree />
            {/* 内容 */}
        </div>
    );
};
