/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-26 08:22:55
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-21 15:31:53
 * @FilePath: \react-web\src\component\ui\index.js
 */
import React, { Component } from 'react';
import { BreadcrumbCustom, FormSearch } from '../widget';

class Ui extends Component {
    render() {
        const breadItems = [{ title: 'UI汇总', icon: 'home' }];
        const searchItem = [
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
                // mode: 'multiple',
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
            {
                label: '爱好',
                field: 'like',
                type: 'check',
                options: [
                    { label: 'Apple', value: 'Apple' },
                    { label: 'Pear', value: 'Pear' },
                    // { label: 'Orange', value: 'Orange' },
                ],
            },
            {
                label: '时间',
                field: 'timer',
                type: 'data',
            },
            {
                label: '查询',
                field: 'search',
                type: 'complete',
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
                label: '编辑时间',
                field: 'edittimer',
                type: 'data',
                isrange: true,
            },
        ];
        return (
            <div>
                <BreadcrumbCustom {...{ breadItems }} />
                <FormSearch
                    wrappedComponentRef={form => (this.form = form)}
                    {...{
                        searchItem,
                    }}
                />
            </div>
        );
    }
}

export default Ui;
