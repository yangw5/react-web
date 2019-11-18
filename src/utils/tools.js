/*
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-27 16:22:13
 * @LastEditors: yangw5
 * @LastEditTime: 2019-11-13 09:54:26
 */
/**
 * 转换对象的值为json对象值
 * @param {object} transObj 需要转换对象
 */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export const transformValueJson = transObj => {
    Object.keys(transObj).forEach((v, i) => {
        //处理数组
        if (
            window._.isString(transObj[v]) &&
            (transObj[v].match(/\[\S*\]/g) || transObj[v].match(/\{\S*\}/g))
        ) {
            transObj[v] = JSON.parse(transObj[v]);
        }
    });
    return transObj;
};

/**
 * 修改数组某一项的值
 */
export const setArryItem = (data, oldvalue, newvalue, newdata = []) => {
    data.forEach(v => {
        //遍历第一层
        if (v.key !== oldvalue.key) {
            //不是
            if (v.mumn) {
                //有嵌套
                let cv = { ...v, mumn: [] };
                cv.mumn = setArryItem(v.mumn, oldvalue, newvalue, []);
                newdata.push(cv);
            } else {
                newdata.push(v);
            }
        } else {
            //找到
            newdata.push(newvalue);
        }
    });
    return newdata;
};

/**
 * 链接跳转  /material/app/frontend/info/:id?
 */
export const renderName = row => (
    <Link to={`/app/material/frontend/info/${row.id}`}>{row['name']}</Link>
);
