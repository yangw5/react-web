/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-21 16:29:14
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-02-05 15:06:20
 * @FilePath: \react-web\src\component\datashow\echars\index.js
 */
import React, { Component } from 'react';
import { BreadcrumbCustom } from '../../widget';
import * as echarts from 'echarts';
import 'echarts-gl'; //可直接使用echarts-for-react插件进行开发
// 指定图表的配置项和数据
let option = {
    title: {
        text: '系统数据',
    },
    tooltip: {},
    legend: {
        data: ['数量'],
    },
    xAxis: {
        data: [
            '前端知识',
            '前端工具',
            '数据可视化',
            '自定义组件库',
            '自定义组件',
            '生活工具',
            '案例展示',
        ],
    },
    yAxis: {},
    series: [
        {
            name: '数量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 10, 20],
        },
    ],
};
const series = [
    {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        data: [
            { value: 235, name: '前端知识' },
            { value: 274, name: '前端工具' },
            { value: 310, name: '数据可视化' },
            { value: 335, name: '自定义组件库' },
            { value: 250, name: '自定义组件' },
            { value: 50, name: '生活工具' },
            { value: 100, name: '案例展示' },
        ],
    },
];
class Echaers extends Component {
    componentDidMount() {
        //初始化
        let myecharts = echarts.init(this.div);
        let myecharts2 = echarts.init(this.div2);
        // 使用刚指定的配置项和数据显示图表。
        myecharts.setOption(option);
        myecharts2.setOption({
            series,
        });
    }

    render() {
        const breadItems = [{ title: '数据可视化' }, { title: 'echar' }];
        return (
            <div style={{ height: '100%' }}>
                <BreadcrumbCustom {...{ breadItems }} />
                <div
                    style={{
                        display: 'flex',
                    }}
                >
                    <div
                        ref={div => (this.div = div)}
                        style={{ width: '600px', height: '400px' }}
                    />
                    <div
                        ref={div => (this.div2 = div)}
                        style={{ width: '600px', height: '400px' }}
                    />
                </div>
            </div>
        );
    }
}
export default Echaers;
