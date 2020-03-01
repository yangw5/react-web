/*
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-27 16:26:04
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-25 21:22:42
 */
import React, { Component } from 'react';
import { BreadcrumbCustom } from '../widget';
import Header from './widget/Header';
import CpItems from './widget/CpItems';
import EacharPoint from './widget/EacharPoint';

const option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['表单', '基础样式', '基础逻辑', '三方', '组件库'],
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center',
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold',
                    },
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: [
                { value: 335, name: '表单' },
                { value: 310, name: '基础样式' },
                { value: 234, name: '基础逻辑' },
                { value: 135, name: '三方' },
                { value: 1548, name: '组件库' },
            ],
        },
    ],
};

export default class DashBoard extends Component {
    render() {
        const breadItems = [{ title: '首页' }];
        this.items = [
            {
                name: '表单组件',
                number: 16,
            },
            {
                name: '基础样式组件',
                number: 16,
            },
            {
                name: '基础逻辑组件',
                number: 16,
            },
            {
                name: '第三方组件',
                number: 16,
            },
            {
                name: '组件库组件',
                number: 16,
            },
        ];
        return (
            <div style={{ height: '100%' }}>
                <BreadcrumbCustom {...{ breadItems }} />
                {/* <Header /> */}
                <CpItems items={this.items} />
                <div
                    style={{
                        display: 'flex',
                        marginTop: '20px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            width: '60%',
                            flexWrap: 'wrap',
                        }}
                    >
                        <div>
                            <EacharPoint
                                option={option}
                                height={'250px'}
                                width={'250px'}
                                id={'e1'}
                            />
                            <EacharPoint
                                option={option}
                                height={'250px'}
                                width={'250px'}
                                id={'e2'}
                            />
                        </div>
                        <div>
                            <EacharPoint
                                option={option}
                                height={'250px'}
                                width={'250px'}
                                id={'e3'}
                            />
                            <EacharPoint
                                option={option}
                                height={'250px'}
                                width={'250px'}
                                id={'e4'}
                            />
                        </div>
                    </div>
                    <div style={{ width: '40%' }}>
                        <EacharPoint />
                    </div>
                </div>
            </div>
        );
    }
}
