/*
 * @File:
 * @Description:查看原图
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-17 17:34:02
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-17 17:40:39
 * @FilePath: \react-web\src\component\widget\ImgSrouce.js
 */
import React from 'react';

export default ({ url, title = '查看原图' }) => {
    let openImg = () => {
        window.open(url);
    };
    return <div onClick={openImg}>{title}</div>;
};
