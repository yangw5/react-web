/*
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-27 16:26:04
 * @LastEditors: yangw5
 * @LastEditTime: 2019-10-09 16:33:30
 */
import React, { Component } from 'react';
import { BreadcrumbCustom } from '../widget';
import * as echarts from 'echarts';
import 'echarts-gl'; //可直接使用echarts-for-react插件进行开发
// 指定图表的配置项和数据
var option = {
    title: {
        text: 'ECharts 入门示例',
    },
    tooltip: {},
    legend: {
        data: ['销量'],
    },
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {},
    series: [
        {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
        },
    ],
};

export default class DashBoard extends Component {
    componentDidMount() {
        //初始化
        let myecharts = echarts.init(this.div);
        let myecharts2 = echarts.init(this.div2);
        // 使用刚指定的配置项和数据显示图表。
        myecharts.setOption(option);

        myecharts2.setOption({
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    data: [
                        { value: 235, name: '视频广告' },
                        { value: 274, name: '联盟广告' },
                        { value: 310, name: '邮件营销' },
                        { value: 335, name: '直接访问' },
                        { value: 400, name: '搜索引擎' },
                    ],
                },
            ],
        });
    }
    render() {
        const breadItems = [{ title: '首页' }];
        return (
            <div>
                <BreadcrumbCustom {...{ breadItems }} />
                <div ref={div => (this.div = div)} style={{ width: '600px', height: '400px' }} />
                <div ref={div => (this.div2 = div)} style={{ width: '600px', height: '400px' }} />
            </div>
        );
    }
}
