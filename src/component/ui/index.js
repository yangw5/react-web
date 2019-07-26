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
                validator: (rule, value, callback, max = 10) => {
                    if (value && value.length > 10) {
                        callback(`不能输入超过${max}个字符`);
                    } else {
                        callback();
                    }
                },
            },
            {
                label: '案例名称',
                field: 'caseName',
                max: 5,
                type: 'input',
            },
            {
                label: '技术名称',
                field: 'tnName',
                type: 'input',
            },
            {
                label: '作者',
                field: 'author',
                type: 'input',
            },
            {
                label: '状态',
                field: 'status',
                type: 'select',
            },
            {
                label: '时间',
                field: 'time',
                type: 'input',
            },
            {
                label: '标签',
                field: 'tags',
                type: 'input',
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
