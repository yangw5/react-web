/*
 * @File:datapage\datashow\DataShow.js
 * @Description:数据显示组件
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-11-13 08:52:56
 * @LastEditors: yangw5
 * @LastEditTime: 2019-11-13 17:56:34
 * @FilePath: \react-web\src\component\widget\datapage\datashow\DataShow.js
 */
//基础模板
//可以自定义模板
import React from 'react';
import './DataShow.less';
const DataShow = props => {
    let { data=[],items } = props;
    return (
        <div className={'dataShow'}>
            {/* 基础信息显示模板 */}
            {items &&
                items.length &&
                items.map((v, i) => {
                    return (
                        !v.detailHide && //不显示
                        (v.noshow ? (
                            <div
                                className={`dataShow_item ${v.class ? v.class : 'average-3'} `}
                                key={i}
                            />
                        ) : (
                            <div
                                className={`dataShow_item ${v.class ? v.class : 'average-3'}`}
                                key={i}
                            >
                                {v.label && (
                                    <div className={'dataShow_lable'}>{`${v.label}  :`}</div>
                                )}
                                {!v.type && <div className={'dataShow_value'}>{data[v.field]}</div>}
                                {v.type === 'stars' && (
                                    <div className={'dataShow_value'}>{v.value}</div>
                                )}
                            </div>
                        ))
                    );
                })}
        </div>
    );
};

export default DataShow;
