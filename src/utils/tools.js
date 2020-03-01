/*
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-27 16:22:13
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-29 21:10:44
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
export const renderUi = ({ url = 'ui', status = 'info', row, key = 'id', showValue = 'name' }) => (
    <Link to={`/app/${url}/${status}/${row[key]}`}>{row[showValue]}</Link>
);

export const getJsType = obj => {
    if (typeof obj === 'function') {
        //是函数    其中 FunName 为函数名称
        return true;
    } else {
        //不是函数
        return false;
    }
};
//对链表数据进行拆分成递归数组
//1.将父数据相同的的数据进行筛选
export const dealData = (data, pid = 'pid') => {
    const newdata = [];
    data !== null &&
        data.length !== 0 &&
        data.forEach(v => {
            let flog = false;
            if (v[pid] || v[pid] === 0) {
                newdata.forEach(nv => {
                    if (v[pid] === nv[0][pid]) {
                        flog = true;
                        nv.push(v);
                    }
                });
                if (!flog) {
                    newdata.push([v]);
                }
            }
        });
    return filterData(newdata, data, pid);
};
//2. 筛选出有子数据的数据
export const filterData = (data, oldData, pid) => {
    let pdata = [];
    let cdata = [];
    data.forEach(v => {
        if ((!v[0][pid] && v[0][pid] !== 0) || !judgeParentExist(v[0], oldData, pid)) {
            pdata.push(...v); //root数据
        } else {
            cdata.push(v);
        }
    });
    return getTreeData(pdata, cdata, pid);
};
//判断pid是否在数组中，不在就是root
const judgeParentExist = (obj, list, pid) => {
    let flag = false;
    list.forEach((v, i) => {
        if (obj[pid] === v.id) {
            flag = true;
        }
    });
    return flag;
};
//从root遍历有子数据的的数组 并且把子数据递归给父数据
export const getTreeData = (pData, data, pid) => {
    pData.forEach(v => {
        data.forEach(cv => {
            if (cv[0][pid] === v.id) {
                v.children = cv;
            }
        });
        if (v.children && v.children.length !== 0) {
            return getTreeData(v.children, data, pid);
        }
    });
    return pData;
};
