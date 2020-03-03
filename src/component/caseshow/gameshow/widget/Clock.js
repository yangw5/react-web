/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-03-01 16:36:59
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-01 20:50:18
 * @FilePath: \react-web\src\component\caseshow\gameshow\widget\Clock.js
 */

import React, { useState, useEffect } from 'react';
import './Clock.less';

export default () => {
    let [date, setDate] = useState(null);
    let [time, setTime] = useState(null);
    let [week, setWeek] = useState(null);
    useEffect(() => {
        setInterval(() => {
            initData();
        }, 1);
    }, []);
    let initData = () => {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth(); //获取当前月份(0-11,0代表1月)
        let day = date.getDate(); //获取当前日(1-31)
        setDate(
            `${year}-${month + 1 <= 9 ? `0${month + 1}` : month + 1}-${day <= 9 ? `0${day}` : day}`
        );
        let week = date.getDay();
        let weelItem = '';
        switch (week) {
            case 0:
                weelItem = '日';
                break;
            case 1:
                weelItem = '一';
                break;
            case 2:
                weelItem = '二';
                break;
            case 3:
                weelItem = '三';
                break;
            case 4:
                weelItem = '四';
                break;
            case 5:
                weelItem = '五';
                break;
            default:
                weelItem = '六';
                break;
        }
        setWeek(`星期${weelItem}`);
        setTime(date.toLocaleTimeString());
    };
    return (
        <div className={'clock_root'}>
            <div className={'clock_date'}>
                <div>{date}</div>
                <div>{week}</div>
            </div>
            <div className={'clock_time'}>{time}</div>
        </div>
    );
};
