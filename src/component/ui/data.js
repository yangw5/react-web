/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-02-21 20:15:00
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-25 10:13:14
 * @FilePath: \react-web\src\component\ui\data.js
 */
import { COP_TYPE } from '../../content';
import React from 'react';
import { renderUi } from '../../utils/tools';
export const searchItem = [
    {
        label: '组件名称',
        field: 'name',
        type: 'input',
        max: 5,
        validator: (rule, value, callback, max = 10) => {
            if (value && value.length > 10) {
                callback(`不能输入超过${max}个字符`);
            } else {
                callback();
            }
        },
    },
    {
        label: '组件分类',
        field: 'type',
        type: 'select',
        // mode: 'multiple',
        showSearch: true,
        allowClear: true,
        options: COP_TYPE,
    },
    // {
    //     label: '开发状态',
    //     field: 'status',
    //     type: 'check',
    //     options: [
    //         { label: '已完成', value: false },
    //         { label: '未完成', value: true },
    //         // { label: 'Orange', value: 'Orange' },
    //     ],
    // },
    {
        label: '开发时间',
        field: 'timer',
        type: 'data',
    },
    // {
    //     label: '查询',
    //     field: 'search',
    //     type: 'complete',
    //     max: 5,
    //     validator: (rule, value, callback, max = 10) => {
    //         if (value && value.length > 10) {
    //             callback(`不能输入超过${max}个字符`);
    //         } else {
    //             callback();
    //         }
    //     },
    // },
    {
        label: '编辑时间',
        field: 'edittimer',
        type: 'data',
        isrange: true,
    },
];

export const columnsItems = [
    {
        title: '序号',
        dataIndex: '',
    },
    {
        title: '编号',
        dataIndex: 'id',
    },
    {
        title: '组件名',
        dataIndex: 'name',
        render: (text, row) =>
            renderUi({
                row,
            }),
    },
    {
        title: '中文名',
        dataIndex: 'chinaName',
        render: text => text,
    },
    {
        title: '状态',
        dataIndex: 'status',
        render: text => (text ? '开发完成' : '开发中'),
    },
    {
        title: '开发者',
        dataIndex: 'autor',
        render: text => text,
    },
    {
        title: '类型',
        dataIndex: 'type',
        render: text => COP_TYPE.filter(v => v.id === text)[0].name,
    },
    {
        title: '开发时间',
        dataIndex: 'time',
        render: text => text,
    },
    {
        title: '操作',
        dataIndex: 'time',
        render: (value, row) => (
            <div>
                <a href="#/app/ui/info/1">查看</a>
                {'   '}
                <a href="#/app/ui/edit/1">编辑</a>
            </div>
        ),
    },
];

export const dataSource = [
    {
        id: '1',
        name: 'FormInput',
        chinaName: '文本框',
        status: true,
        autor: 'young5',
        type: '1',
        time: '2020-02-02',
    },
    {
        id: '1',
        name: 'FormSelect',
        chinaName: '选择框',
        status: true,
        autor: 'young5',
        type: '1',
        time: '2020-02-02',
    },
    {
        id: '3',
        name: 'FormDat',
        chinaName: '日期选择器',
        status: true,
        autor: 'young5',
        type: '1',
        time: '2020-02-02',
    },
    {
        id: '4',
        name: 'FormDTextArea',
        chinaName: '文本域',
        status: true,
        autor: 'young5',
        type: '1',
        time: '2020-02-02',
    },
    {
        id: '5',
        name: 'FormCheckBox',
        chinaName: '复选框',
        status: true,
        autor: 'young5',
        type: '1',
        time: '2020-02-02',
    },
    {
        id: '6',
        name: 'FormPointsRange',
        chinaName: '选择区',
        status: true,
        autor: 'young5',
        type: '1',
        time: '2020-02-02',
    },
    {
        id: '7',
        name: 'FormRadio',
        chinaName: '单选框',
        status: true,
        autor: 'young5',
        type: '1',
        time: '2020-02-02',
    },
    {
        id: '8',
        name: 'FormUpload',
        chinaName: '上传器',
        status: true,
        autor: 'young5',
        type: '1',
        time: '2020-02-02',
    },
    {
        id: '9',
        name: 'FormSwitch',
        chinaName: '滑块',
        status: true,
        autor: 'young5',
        type: '1',
        time: '2020-02-02',
    },
    {
        id: '10',
        name: 'FormSearch',
        chinaName: '搜索框',
        status: true,
        autor: 'young5',
        type: '1',
        time: '2020-02-02',
    },
    {
        id: '11',
        name: 'FormDRange',
        chinaName: '时间选择器',
        status: true,
        autor: 'young5',
        type: '1',
        time: '2020-02-02',
    },
    {
        id: '12',
        name: 'FormMultiple',
        chinaName: '组合器',
        status: true,
        autor: 'young5',
        type: '1',
        time: '2020-02-02',
    },
    {
        id: '13',
        name: 'FormComplete',
        chinaName: '搜索回填器',
        status: true,
        autor: 'young5',
        type: '1',
        time: '2020-02-02',
    },
    {
        id: '14',
        name: 'Formcombin',
        chinaName: '增加组件',
        status: true,
        autor: 'young5',
        type: '1',
        time: '2020-02-02',
    },
    {
        id: '15',
        name: 'FormRate',
        chinaName: '评分器',
        status: true,
        autor: 'young5',
        type: '1',
        time: '2020-02-02',
    },
];
