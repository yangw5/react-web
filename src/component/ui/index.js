/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-26 08:22:55
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-21 20:56:40
 * @FilePath: \react-web\src\component\ui\index.js
 */
import React, { Component } from 'react';
import { BreadcrumbCustom, FormSearch } from '../widget';
import { searchItem, columnsItems, dataSource } from './data';

class Ui extends Component {
    render() {
        const breadItems = [{ title: 'UI汇总', icon: 'home' }];
        return (
            <div>
                <BreadcrumbCustom {...{ breadItems }} />
                <FormSearch
                    wrappedComponentRef={form => (this.form = form)}
                    {...{
                        searchItem,
                        columnsItems,
                        dataSource,
                        defaultFetch: true,
                    }}
                />
            </div>
        );
    }
}

export default Ui;
