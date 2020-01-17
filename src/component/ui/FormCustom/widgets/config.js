/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-14 15:38:16
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-17 16:27:58
 * @FilePath: \react-web\src\component\ui\FormCustom\widgets\config.js
 */
import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;
let searchItem = [
    {
        label: '文本框',
        field: 'input',
        type: 'input',
        clear: true,
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
        label: '选择器',
        field: 'select',
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
    {
        label: '查询器',
        field: 'search',
        type: 'complete',
        dataSource: ['Burns Bay Road', 'Downing Street', 'Wall Street'],
        max: 5,
        allowClear: true,
        // ChildrenCustom: () => {
        //     return <TextArea style={{ height: 50 }} />;
        // },
        validator: (rule, value, callback, max = 10) => {
            if (value && value.length > 10) {
                callback(`不能输入超过${max}个字符`);
            } else {
                callback();
            }
        },
    },
    {
        label: '单选框',
        field: 'radio',
        type: 'radio',
        // optype: 'button',
        required: true,
        options: [
            { value: '1', label: '男' },
            { value: '0', label: '女' },
            { value: '2', label: '人妖', disabled: true },
        ],
    },
    {
        label: '多选框',
        field: 'checkbox',
        type: 'check',
        pcheckAll: false,
        options: [
            { label: 'Apple', value: 'Apple' },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange', disabled: true },
        ],
        initialValue: ['Orange', 'Apple'],
        checkedstatic: ['Orange'],
    },
    {
        label: '日期选择框',
        field: 'edittimer',
        type: 'data',
        // isrange: true,
    },
    {
        label: '开关',
        field: 'switch',
        type: 'switch',
        unCheckedChildren: '修改关',
        // disabled: true,
    },
    {
        label: '滑块',
        field: 'slider',
        type: 'slider',
        classType: 'row',
        contentType: 'row3',
    },
    {
        label: '评分',
        field: 'rate',
        type: 'rate',
    },
    {
        label: '上传',
        field: 'upload',
        type: 'upload',
    },
    {
        label: '文本域',
        field: 'textarea',
        type: 'textarea',
        max: 20,
        min: 5,
        required: true,
        classType: 'row',
        contentType: 'row3',
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
        label: '自定义组合',
        field: 'multiple',
        type: 'multiple',
        classType: 'row',
        contentType: 'row3',
        initialValue: [{}],
        add: false,
        del: false,
        multipleObj: [
            {
                select: true,
                name: '选择器',
                key: 'ms',
                rowcol: 'row_item4',
                options: [
                    { id: 'd1', name: '数据1' },
                    { id: 'd2', name: '数据2' },
                    { id: 'd3', name: '数据3' },
                ],
            },
            {
                input: true,
                name: '文本框',
                key: 'mi',
                rowcol: 'row_item4',
            },
            {
                inputsearch: true,
                name: '搜索框',
                key: 'mis',
                rowcol: 'row_item2',
                inputStyle: {
                    itemStyle: { flexBasis: '15%' },
                    inputWhole: true,
                },
            },
        ],
    },
];

export default {
    searchItem,
};
