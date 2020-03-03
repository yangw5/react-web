import { timeout } from 'd3';
import { DataShow } from '../../../widget';

/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-02-26 16:18:36
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-27 16:12:32
 * @FilePath: \react-web\src\component\datashow\echars\widget\data.js
 */
// 指定图表的配置项和数据
export const option = {
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
            '第三方组件',
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
export const option2 = {
    legend: {},
    tooltip: {},
    dataset: {
        // 提供一份数据。
        source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1],
        ],
    },
    // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
    xAxis: { type: 'category' },
    // 声明一个 Y 轴，数值轴。
    yAxis: {},
    // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
};

export const option3 = {
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['product', '2012', '2013', '2014', '2015'],
            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
            ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4],
        ],
    },
    xAxis: [
        { type: 'category', gridIndex: 0 }, //行
        { type: 'category', gridIndex: 1 }, //列
    ],
    yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
    grid: [{ bottom: '55%' }, { top: '55%' }],
    series: [
        // 这几个系列会在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        // 这几个系列会在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
    ],
};
export const option4 = {
    backgroundColor: '#2c343c',
    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1],
        },
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            roseType: 'angle',
            data: [
                { value: 235, name: '视频广告' },
                { value: 274, name: '联盟广告' },
                { value: 310, name: '邮件营销' },
                { value: 335, name: '直接访问' },
                { value: 400, name: '搜索引擎' },
            ],
            // data: [{
            //     value:400,
            //     name:'搜索引擎',
            //     itemStyle: {
            //         color: '#c23531'
            //     }
            // }, ...]
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)',
                    },
                },
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)',
                    },
                },
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
    ],
};

export let option5 = () => {
    let option = {
        title: {
            text: '异步数据示例',
        },
        tooltip: {},
        legend: {
            data: ['销量'],
        },
        xAxis: {
            data: [],
        },
        yAxis: {},
        series: [
            {
                name: '销量',
                type: 'bar',
                data: [],
            },
        ],
    };
    let newdata = {
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋'],
        },
        series: [
            {
                // 根据名字对应到相应的系列
                name: '销量',
                data: [3, 44, 5, 7, 8],
            },
        ],
    };
    //setInterval
    // let setoption = function(myChart) {
    //     let cpnewdata = newdata;
    //     setTimeout(() => {
    //         myChart.setOption(cpnewdata);
    //     }, 2000);
    // };
    let setoption = myChart => {
        let cpnewdata = newdata;
        setTimeout(() => {
            myChart.setOption(cpnewdata);
        }, 2000);
    };
    return {
        option,
        setoption,
    };
};

export let option6 = () => {
    let option = {
        title: {
            text: '异步数据加载示例',
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
    let setOption = myChart => {
        let cpoption = option;
        myChart.showLoading();
        setTimeout(() => {
            myChart.hideLoading();
            myChart.setOption(cpoption);
        }, 2000);
    };
    return {
        setOption,
        option,
    };
};
export let option7 = () => {
    let option = {
        title: {
            text: '异步数据示例',
        },
        tooltip: {},
        legend: {
            data: ['销量'],
        },
        xAxis: {
            data: [],
        },
        yAxis: {},
        series: [
            {
                name: '销量',
                type: 'bar',
                data: [],
            },
        ],
    };
    let newdata = () => {
        let date = new Date();
        let index = date.getSeconds();
        let n = {
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋'],
            },
            series: [
                {
                    // 根据名字对应到相应的系列
                    name: '销量',
                    data: [index + 3, index, index + 10, index * 2, index],
                },
            ],
        };
        return n;
    };

    let setoption = myChart => {
        let cpnewdata = newdata;
        setInterval(() => {
            myChart.setOption(cpnewdata());
        }, 2000);
    };
    return {
        option,
        setoption,
    };
};

export const option8 = {
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [89.3, 58212, 'Matcha Latte'],
            [57.1, 78254, 'Milk Tea'],
            [74.4, 41032, 'Cheese Cocoa'],
            [50.1, 12755, 'Cheese Brownie'],
            [89.7, 20145, 'Matcha Cocoa'],
            [68.1, 79146, 'Tea'],
            [19.6, 91852, 'Orange Juice'],
            [10.6, 101852, 'Lemon Juice'],
            [32.7, 20112, 'Walnut Brownie'],
        ],
    },
    grid: { containLabel: true },
    xAxis: {},
    yAxis: { type: 'category' },
    series: [
        {
            type: 'bar',
            encode: {
                // Map the "amount" column to X axis.
                x: 'amount',
                // Map the "product" column to Y axis
                y: 'product',
            },
        },
    ],
};

export const option9 = {
    legend: {},
    tooltip: {
        trigger: 'axis',
        showContent: false,
    },
    dataset: {
        source: [
            ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
            ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
            ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1],
        ],
    },
    xAxis: { type: 'category' },
    yAxis: { gridIndex: 0 },
    grid: { top: '55%' },
    series: [
        { type: 'line', smooth: true, seriesLayoutBy: 'row' },
        { type: 'line', smooth: true, seriesLayoutBy: 'row' },
        { type: 'line', smooth: true, seriesLayoutBy: 'row' },
        { type: 'line', smooth: true, seriesLayoutBy: 'row' },
        {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            label: {
                formatter: '{b}: {@2012} ({d}%)',
            },
            encode: {
                itemName: 'product',
                value: '2012',
                tooltip: '2012',
            },
        },
    ],
};

export const option10 = {
    xAxis: {
        type: 'value',
    },
    yAxis: {
        type: 'value',
    },
    dataZoom: [
        {
            // 这个dataZoom组件，默认控制x轴。
            type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
            start: 10, // 左边在 10% 的位置。
            end: 60, // 右边在 60% 的位置。
        },
        {
            // 这个dataZoom组件，也控制x轴。
            type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
            start: 10, // 左边在 10% 的位置。
            end: 60, // 右边在 60% 的位置。
        },
        // {
        //     type: 'slider',
        //     yAxisIndex: 0,
        //     start: 30,
        //     end: 80
        // },
        // {
        //     type: 'inside',
        //     yAxisIndex: 0,
        //     start: 30,
        //     end: 80
        // }
    ],
    series: [
        {
            name: 'scatter',
            type: 'scatter',
            itemStyle: {
                normal: {
                    opacity: 0.8,
                },
            },
            symbolSize: function(val) {
                return val[2] * 40;
            },
            data: [
                ['14.616', '7.241', '0.896'],
                ['3.958', '5.701', '0.955'],
                ['2.768', '8.971', '0.669'],
                ['9.051', '9.710', '0.171'],
                ['14.046', '4.182', '0.536'],
                ['12.295', '1.429', '0.962'],
                ['4.417', '8.167', '0.113'],
                ['0.492', '4.771', '0.785'],
                ['7.632', '2.605', '0.645'],
                ['14.242', '5.042', '0.368'],
            ],
        },
    ],
};
