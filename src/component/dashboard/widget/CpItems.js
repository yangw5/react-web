/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-02-25 16:29:11
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-25 16:40:01
 * @FilePath: \react-web\src\component\dashboard\widget\CpItems.js
 */
import React from 'react';
import './CpItems.less';
const CpItems = props => {
    return (
        <div className={'cpi_root'}>
            {props.items &&
                props.items.map((v, i) => (
                    <div className={'cpi_item'}>
                        <div className={'cpi_item_name'}>{v.name}</div>
                        <div className={'cpi_item_number'}>{v.number}</div>
                    </div>
                ))}
        </div>
    );
};
export default CpItems;
