/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-27 16:26:04
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-04 11:31:54
 * @FilePath: \react-web\src\component\frontend\basestation\index.js
 */
import React, { Component } from 'react';
import { felsit2 } from '../../../axios';
import './index.less';

class BaseStation extends Component {
    state = {
        data: {},
    };
    componentDidMount() {
        this.setState({
            data: 'yang5',
        });
        felsit2().then(res =>
            this.setState({
                data: res.data,
            })
        );
    }
    render() {
        return (
            <div className={'css_root'}>
                <div className={'css_item'}>
                    <div className={'css_item_title'}>mock数据模拟</div>
                    <div className={'css_item_contens'}>{this.state.data.name}</div>
                </div>
                <div className={'css_item'}>
                    <div className={'css_item_title'}>css应用-content应用</div>
                    <div className={'css_item_contens css_content'}>
                        内容<dot>...</dot>
                    </div>
                </div>
                <div className={'css_item'}>
                    <div className={'css_item_title'}>css应用-shape-outside应用</div>
                    <div className={'css_item_contens css_shapout'}>
                        {/* <div className="css_center" /> */}
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                        内容 内容内容内容内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容 内容内容内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容内容内容内容内容内容内容
                        <img src="" alt="" />
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                        内容 内容内容内容内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容 内容内容内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                        内容 内容内容内容内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容 内容内容内容内容内容内容内容内容内容内容内容内容
                        内容内容内容内容内容内容内容内容内容内容内容
                    </div>
                </div>
            </div>
        );
    }
}

export default BaseStation;
