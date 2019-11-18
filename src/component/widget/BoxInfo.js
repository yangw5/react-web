/*
 * @File:widget\BoxInfo.js
 * @Description:信息展示框组件
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-11-13 16:33:30
 * @LastEditors: yangw5
 * @LastEditTime: 2019-11-13 16:55:49
 * @FilePath: \react-web\src\component\widget\BoxInfo.js
 */
import React from 'react';
import './BoxInfo.less';
import classNames from 'classnames';

const BoxInfo = ({ title, children, className, style }) => {
    return (
        <div className={classNames('boxInfo', className)} style={{ ...style }}>
            {title && <div className="boxInfo_title">{title}</div>}
            <div className="boxInfo_container">{children}</div>
        </div>
    );
};

export default BoxInfo;
