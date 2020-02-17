/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-27 16:26:04
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-02-05 15:20:43
 * @FilePath: \react-web\src\component\tootsshow\index.js
 */
import React, { Component } from 'react';
import { BreadcrumbCustom } from '../widget';
class ToolsShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            type: '-',
            value: '',
        };
    }
    componentDidMount() {}

    render() {
        let breadItems = [{ title: '前端工具' }, { title: '第三方工具' }];
        return (
            <div>
                <BreadcrumbCustom {...{ breadItems }} />
            </div>
        );
    }
}

export default ToolsShow;
