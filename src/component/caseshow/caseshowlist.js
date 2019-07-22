import React, { Component } from 'react';
import FromSearch from '../widget/FromSearch';
// import { numberFilter as valueFilter } from '../../utils';
const numberFilter = (value, regex = /\d+\.{0,1}\d*/g) => {
    if (!value) return value;
    // 正则表达式 匹配整数和小数
    const match = (window._.isString(value) ? value : JSON.stringify(value)).match(regex);
    return match ? match[0] : '';
};

class CaseShowList extends Component {
    render() {
        const searchItem = [
            {
                label: '案例ID',
                field: 'caseId',
                type: 'input',
                valueFilter: numberFilter,
                // valueFilter: value => valueFilter(value, REGEX_COPYRIGHTID),
            },
            {
                label: '案例名称',
                field: 'caseName',
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
                type: 'input',
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

export default CaseShowList;
