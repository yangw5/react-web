/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-14 15:38:16
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-15 17:13:54
 * @FilePath: \react-web\src\component\ui\FormCustom\widgets\config.js
 */
import React from 'react';
let searchItem = [
    {
        label: '文本框',
        field: 'input',
        type: 'input',
        clear: true,
    },
    {
        label: '文本域',
        field: 'textarea',
        type: 'textarea',
        max: 20,
        min: 5,
        required: true,
        // readOnly: true,
        // initialValue: '只读',
        // clear: true,
        // valueFilter: value => {
        //     //输入转换
        //     if (/^[0-9]*$/.test(value)) {
        //         return value;
        //     } else return value.replace(/[^0-9]/gi, '');
        // },
        validator: (rule, value, callback) => {
            //输入校验
            if (value === '55555') {
                return callback('5个555');
            }
        },
    },
    {
        label: '区间',
        field: ['min', 'max'],
        type: 'pointsrange',
        required: true,
        ruleType: 'number',
        // clear: true,
    },
    {
        label: '状态',
        field: 'status',
        type: 'select',
        // mode: 'multiple',
        showSearch: true,
        allowClear: true,
        filterOption: true,
        // searchOptionsApi:false,
        options: [
            {
                id: '1',
                name: '选项1',
                value: '数据1',
            },
            {
                id: '2',
                name: '选项2',
                value: '数据2',
            },
            {
                id: '3',
                name: '选项3',
                value: '数据3',
            },
            {
                id: '22',
                name: '选项22',
                value: '数据22',
            },
        ],
    },
];

export default {
    searchItem,
};
