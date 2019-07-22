import React, { Component } from 'react';
import FromSearch from '../widget/FromSearch';
import { numberFilter as valueFilter } from '../../utils';

class CaseShowList extends Component {
    render() {
        const searchItem = [
            {
                label: '案例ID',
                field: 'caseId',
                type: 'input',
                valueFilter,
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
