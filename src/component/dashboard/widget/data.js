/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-02-26 16:18:36
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-02 14:55:00
 * @FilePath: \react-web\src\component\dashboard\widget\data.js
 */
// 指定图表的配置项和数据
export const dataItems = [
    {
        name: '本地组件库',
        number: 16,
    },
    {
        name: 'npm组件库',
        number: 16,
    },
    {
        name: '第三方组件',
        number: 16,
    },
    {
        name: '数据可视化',
        number: 2,
    },
    {
        name: '前端工具',
        number: 2,
    },
];
export const projectItem = [
    {
        id: 1,
        name: 'react-web',
        bg: '#00ff00',
        url: '',
    },
    {
        id: 2,
        name: 'antdup',
        url: '',
        bg: 'rgba(159, 40, 155, 1)',
    },
    {
        id: 3,
        name: 'react-antd-ts',
        url: '',
        bg: 'rgb(53, 56, 250)',
    },
    {
        id: 4,
        name: 'docusaurus',
        url: '',
        bg: 'rgb(231, 84, 104)',
    },
    {
        id: 5,
        name: 'react-project-cli',
        url: '',
        bg: '#FFC107',
    },
    {
        id: 6,
        name: 'github',
        url: '',
        bg: '#FFC377',
    },
    {
        id: 7,
        name: 'blogs',
        url: '',
        bg: '#Fff367',
    },
    {
        id: 8,
        name: 'QQ',
        url: '',
        bg: '#FF0377',
    },
];
export const option = {
    legend: {},
    tooltip: {
        trigger: 'axis',
        showContent: false,
    },
    toolbox: {
        left: 20,
        top: 0,
        itemSize: 20,
        feature: {
            myDrag: {
                show: true,
                title: '时间切换',
                option: {},
                icon:
                    'path://M990.55 380.08 q11.69 0 19.88 8.19 q7.02 7.01 7.02 18.71 l0 480.65 q-1.17 43.27 -29.83 71.93 q-28.65 28.65 -71.92 29.82 l-813.96 0 q-43.27 -1.17 -72.5 -30.41 q-28.07 -28.07 -29.24 -71.34 l0 -785.89 q1.17 -43.27 29.24 -72.5 q29.23 -29.24 72.5 -29.24 l522.76 0 q11.7 0 18.71 7.02 q8.19 8.18 8.19 18.71 q0 11.69 -7.6 19.29 q-7.6 7.61 -19.3 7.61 l-518.08 0 q-22.22 1.17 -37.42 16.37 q-15.2 15.2 -15.2 37.42 l0 775.37 q0 23.39 15.2 38.59 q15.2 15.2 37.42 15.2 l804.6 0 q22.22 0 37.43 -15.2 q15.2 -15.2 16.37 -38.59 l0 -474.81 q0 -11.7 7.02 -18.71 q8.18 -8.19 18.71 -8.19 l0 0 ZM493.52 723.91 l-170.74 -170.75 l509.89 -509.89 q23.39 -23.39 56.13 -21.05 q32.75 1.17 59.65 26.9 l47.94 47.95 q25.73 26.89 27.49 59.64 q1.75 32.75 -21.64 57.3 l-508.72 509.9 l0 0 ZM870.09 80.69 l-56.13 56.14 l94.72 95.9 l56.14 -57.31 q8.19 -9.35 8.19 -21.05 q-1.17 -12.86 -10.53 -22.22 l-47.95 -49.12 q-10.52 -9.35 -23.39 -9.35 q-11.69 -1.17 -21.05 7.01 l0 0 ZM867.75 272.49 l-93.56 -95.9 l-380.08 380.08 l94.73 94.73 l378.91 -378.91 l0 0 ZM322.78 553.16 l38.59 39.77 l-33.92 125.13 l125.14 -33.92 l38.59 38.6 l-191.79 52.62 q-5.85 1.17 -12.28 0 q-6.44 -1.17 -11.11 -5.84 q-4.68 -4.68 -5.85 -11.7 q-2.34 -5.85 0 -11.69 l52.63 -192.97 l0 0 Z',
                onclick: () => {
                    alert('切换');
                },
            },
        },
    },
    dataset: {
        source: [
            ['product', '一月', '二月', '三月', '四月', '五月', '六月'],
            ['本地组件库', 4, 3, 6, 5, 8, 9],
            ['npm组件库', 8, 9, 8, 8, 7, 5],
            ['数据可视化', 2, 6, 7, 8, 6, 8],
            ['第三方组件', 1, 0, 0, 0, 0, 1],
            ['前端工具', 5, 6, 6, 7, 5, 3],
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
        { type: 'line', smooth: true, seriesLayoutBy: 'row' },
        {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            label: {
                formatter: '{b}: {@一月} ({d}%)',
            },
            encode: {
                itemName: 'product',
                value: '一月',
                tooltip: '一月',
            },
        },
    ],
};
