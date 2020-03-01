/*
 * @File:
 * @Description:分割线
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-21 10:54:27
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-24 17:09:07
 * @FilePath: \react-web\src\component\widget\basis\DividerCustom.js
 */
import React from 'react';
import { Divider } from 'antd';

export default ({ type = 'horizontal', className, dashed, orientation, style }) => {
    return (
        <div>
            <Divider
                {...{
                    type,
                    className,
                    dashed,
                    orientation,
                }}
                style={style}
            />
        </div>
    );
};
