/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-27 16:26:04
 * @LastEditors: yangw5
 * @LastEditTime: 2020-01-21 15:32:04
 * @FilePath: \react-web\src\component\common\commonList.js
 */
import React from 'react';
import * as config from './config';
import { FormSearch } from '../widget';

class CommomList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        //获取configType
    }
    componentDidMount() {}
    shouldComponentUpdate(nextprops, nextstate) {}
    render() {
        let { query } = this.props;
        let { configType } = query;
        let { searchItem, formSearchProps } = config[configType];
        return (
            <div>
                <FormSearch
                    wrappedComponentRef={form => (this.form = form)}
                    {...{
                        searchItem,
                        ...formSearchProps,
                    }}
                />
            </div>
        );
    }
}

export default CommomList;
