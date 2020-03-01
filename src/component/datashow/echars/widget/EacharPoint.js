/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-02-25 19:53:05
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-27 15:36:12
 * @FilePath: \react-web\src\component\datashow\echars\widget\EacharPoint.js
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
        console.log(props);
        let echarsref = document.getElementById(props.id || 'echarsref');
        let myecharts = echarts.init(echarsref);
        if (props.type === 'axios') {
            myecharts.showLoading();
            setTimeout(() => {
                myecharts.hideLoading();
                myecharts.setOption(props.option || option);
            }, 2000);
        } else myecharts.setOption(props.option || option);
        
        if (props.getoption) {
            props.getoption(myecharts);
        }
        props.action && props.action(myecharts);
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
