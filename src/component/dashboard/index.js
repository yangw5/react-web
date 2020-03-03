/*
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-27 16:26:04
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-02 14:24:34
 */
import React, { Component } from 'react';
import { BreadcrumbCustom } from '../widget';
import Header from './widget/Header';
import CpItems from './widget/CpItems';
import EacharPoint from '../datashow/echars/widget/EacharPoint';
import { dataItems, option, projectItem } from './widget/data';
import { Tabs } from 'antd';
import './index.less';

const { TabPane } = Tabs;

export default class DashBoard extends Component {
    doacton = myecharts => {
        myecharts.on('updateAxisPointer', function(event) {
            var xAxisInfo = event.axesInfo[0];
            if (xAxisInfo) {
                var dimension = xAxisInfo.value + 1;
                myecharts.setOption({
                    series: {
                        id: 'pie',
                        label: {
                            formatter: '{b}: {@[' + dimension + ']} ({d}%)',
                        },
                        encode: {
                            value: dimension,
                            tooltip: dimension,
                        },
                    },
                });
            }
        });
    };
    render() {
        const breadItems = [{ title: '首页' }];

        return (
            <div className={'dash_root'}>
                <BreadcrumbCustom {...{ breadItems }} />
                {/* <Header /> */}
                <CpItems items={dataItems} />
                <div className={'dash_echars'}>
                    <div className={'echars_contents'}>
                        <EacharPoint
                            id="x"
                            action={this.doacton}
                            option={option}
                            width={'1000px'}
                            height={'500px'}
                        />
                    </div>
                    <div className={'dash_right'}>
                        <div className={'dash_right_items'}>
                            {projectItem.map(v => (
                                <div className={'dash_right_item'} style={{ background: v.bg }}>
                                    {v.name}
                                </div>
                            ))}
                        </div>
                        <div className={'dash_right_gg'}>
                            <div>
                                <Tabs defaultActiveKey="1" onChange={() => {}}>
                                    <TabPane tab="公告" key="1">
                                        公告
                                    </TabPane>
                                    <TabPane tab="异常监控" key="2">
                                        异常监控
                                    </TabPane>
                                    <TabPane tab="最近访问" key="3">
                                        最近访问
                                    </TabPane>
                                </Tabs>
                                ,
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
