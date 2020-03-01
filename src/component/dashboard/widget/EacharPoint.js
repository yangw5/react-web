/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-02-25 19:53:05
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-25 21:23:51
 * @FilePath: \react-web\src\component\dashboard\widget\EacharPoint.js
 */
import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';
import 'echarts-gl'; //可直接使用echarts-for-react插件进行开发
import './EacharPoint.less';
// 指定图表的配置项和数据
const EacharPoint = props => {
    let option = {
        xAxis: {
            type: 'category',
            data: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: [1, 2, 4, 2, 4, 4, 2],
                type: 'line',
                smooth: false,
            },
        ],
    };

    useEffect(() => {
        let echarsref = document.getElementById(props.id || 'echarsref');
        let myecharts = echarts.init(echarsref);
        myecharts.setOption(props.option || option);
    }, []);
    return (
        <div className={'ea_root'}>
            <div
                id={props.id || 'echarsref'}
                style={{ width: props.width || '600px', height: props.height || '500px' }}
            />
        </div>
    );
};
export default EacharPoint;
