/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-21 10:54:27
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-21 10:56:45
 * @FilePath: \react-web\src\component\widget\basis\DividerCustom.js
 */
import React from 'react';
import { Divider } from 'antd';

export default ({ type, className, dashed, orientation }) => {
    return (
        <div>
            <Divider
                {...{
                    type,
                    className,
                    dashed,
                    orientation,
                }}
            />
        </div>
    );
};
