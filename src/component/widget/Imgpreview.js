/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-17 17:33:18
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-17 17:47:02
 * @FilePath: \react-web\src\component\widget\Imgpreview.js
 */
import React from 'react';
import { Icon } from 'antd';

export default ({ url, name, width, height }) => {
    let _onclose = () => {};

    return (
        <div>
            <img
                src={url}
                alt={name}
                {...{
                    width,
                    height,
                }}
            />
            <div class={'imgSource_close'} onClick={_onclose}>
                <Icon type="close-circle" />
            </div>
        </div>
    );
};
