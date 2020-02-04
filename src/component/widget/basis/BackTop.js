/*
 * @File:widget\BackTop.js
 * @Description:自定义回到顶部标签
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-11-18 16:31:44
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-02-04 13:37:01
 * @FilePath: \react-web\src\component\widget\BackTop.js
 */
import React from 'react';
import { BackTop, Icon } from 'antd';

export default ({ status, id, style, children }) => (
    <div>
        <BackTop
            visibilityHeight={100}
            target={() => document.getElementById(id)}
            style={{ right: 50, bottom: 105, ...style }}
        >
            {children ? children : <Icon type="vertical-align-top" />}
        </BackTop>
    </div>
);
