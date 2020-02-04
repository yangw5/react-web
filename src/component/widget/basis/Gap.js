/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-02-04 14:37:30
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-02-04 14:40:10
 * @FilePath: \react-web\src\component\widget\basis\Gap.js
 */
import React from 'react';
export default ({ height, style, childen }) => {
    return (
        <div
            style={{
                height: height,
                ...style,
            }}
        >
            {childen && childen}
        </div>
    );
};
