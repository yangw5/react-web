/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-27 16:26:04
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-21 13:47:51
 * @FilePath: \react-web\src\component\ui\gallery\index.js
 */
import React, { Component } from 'react';
import { BreadcrumbCustom, ImgList } from '../../widget';
import ImgCustom from '../../widget/ImgCustom';

class Gallery extends Component {
    render() {
        const breadItems = [{ title: 'UI库', icon: 'home', herf: '/app/ui' }, { title: '画廊' }];

        return (
            <div>
                <BreadcrumbCustom {...{ separator: '>', breadItems }} />
                <ImgList />
            </div>
        );
    }
}

export default Gallery;
