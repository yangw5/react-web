// let renderFilterType = ({ field, form, props }) => (
//     <div>
//         <span>{field === 'listTypesStr' ? '榜单类型' : '类型'}</span>

//         {/* <FilterType
//             field={field}
//             onSubmit={values => form.handleChangeType(null, values, null, field)}
//             query={props.query}
//             type={field}
//         /> */}
//     </div>
// );

import React from 'react';
import { Icon } from 'antd';
import { FRONTEND_TYPE } from '../../content';
import { renderName } from '../../utils/tools';

export const searchItem = [
    {
        label: '案例ID',
        field: 'caseId',
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
        label: '状态',
        field: 'status',
        type: 'select',
        showSearch: true,
        allowClear: true,
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
        ],
    },
];
const columnsItems = [
    {
        title: '序号',
        dataIndex: 'key',
        key: 'key',
        width: 80,
    },
    // {
    //     title: props => renderFilterType({ field: 'mvFlag', ...props }),
    //     dataIndex: 'vrbtFlags',
    //     render: text => getIconType(text),
    //     width: 100,
    // },
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        width: 200,
        render: (text, row, i, props) => renderName(row, props),
    },
    {
        title: '类型',
        dataIndex: 'type',
        key: 'type',
        width: 200,
        render: text => FRONTEND_TYPE.find(v => v.key / 1 === text / 1).value,
    },
    {
        title: '作者',
        dataIndex: 'autor',
        key: 'autor',
        width: 200,
    },
    {
        title: '操作',
        dataIndex: '',
        width: 50,
        render: () => <Icon type="tool" />,
    },
];
let dataSource = [
    {
        id: '111',
        key: '1',
        name: 'es6',
        type: 1,
        autor: '阮一峰',
    },
    {
        id: '112',
        key: '1',
        name: 'git',
        type: 2,
        autor: '阮一峰',
    },
    {
        id: '113',
        key: '1',
        name: 'react',
        type: 3,
        autor: 'facebook',
    },
];
export const formSearchProps = {
    title: '前端汇总',
    columnsItems,
    dataSource,
    showSelection: false,
    rowKey: 'key',
    btnsRequirement: {
        0: ['show'],
        1: ['show2'],
    },
};
