/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-26 08:23:03
 * @LastEditors: yangw5
 * @LastEditTime: 2019-11-27 12:49:51
 * @FilePath: \react-web\src\component\antdUi\index.js
 */
import React, { useState } from 'react';
import { BreadcrumbCustom } from '../widget';
import { Alert, imgsourceshow } from 'react-antdup';
import { Button } from 'antd';
let imgsrc = require('../../assets/img/m1.jfif');

function AntdUi() {
    let showImgSource = () => {
        imgsourceshow.show(imgsrc);
    };
    const breadItems = [{ title: 'antdup Ui库', icon: 'home' }];
    return (
        <div>
            <BreadcrumbCustom {...{ breadItems }} />
            <div>
                <Button
                    onClick={() => {
                        Alert.success({ title: '成功' });
                    }}
                >
                    成功
                </Button>
                <Button
                    onClick={() => {
                        Alert.confirm({
                            title: '请确认',
                            onOk: () => {
                                alert('好的');
                            },
                        });
                    }}
                >
                    确认
                </Button>
                <Button
                    onClick={() => {
                        Alert.warning({ title: '亲，查询的音源不存在哟~' });
                    }}
                >
                    警告
                </Button>
                <Button
                    onClick={() => {
                        Alert.error({ title: '失败' });
                    }}
                >
                    弹框
                </Button>
                <img
                    src={imgsrc}
                    alt="测试"
                    width="100"
                    height="100"
                    onClick={() => {
                        showImgSource();
                    }}
                />
            </div>
        </div>
    );
}

export default AntdUi;
