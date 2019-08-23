import React, { Component } from 'react';
import { BreadcrumbCustom } from '../widget';
import FromSearch from '../widget/FromSearch';

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
        ];
        return (
            <div>
                <BreadcrumbCustom {...{ breadItems }} />
                <FromSearch
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
