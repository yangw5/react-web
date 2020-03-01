/*
 * @File:datapage\datashow\DataShow.js
 * @Description:数据显示组件
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-11-13 08:52:56
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-22 14:37:39
 * @FilePath: \react-web\src\component\widget\datapage\Forminfo\DataShow.js
 */
//基础模板
//可以自定义模板
import React from 'react';
import './DataShow.less';
const handleEnter = (data, field, callback) => {
    if (callback) {
        data = callback(data, field);
    }
    //处理字符串中的回车格式
    return (
        data && data
        //     data
        //         .toString()
        //         .split('\n')
        //         .map((m, n) => <div key={n}>{m}</div>)
    );
};

/**
 * 通用渲染value
 * @param {*} v
 */
const renderNormal = (v, data, callback) => {
    if (v.render) return v.render({ data });
    class Render {
        select = () => {
            const option = v.options.find(option => option.id === data[v.field]);
            return option ? option.name || option.id : '';
        };
        other = () => handleEnter(data[v.field], v.field, callback);
        radio = () => this.select();
    }
    const render = new Render();
    return (render[v.fieldType] || render.other)();
};
const DataShow = props => {
    let { data = [], items } = props;
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
                                {!v.type && (
                                    <div className={'dataShow_value'}> {renderNormal(v, data)}</div>
                                )}

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
