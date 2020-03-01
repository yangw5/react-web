/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-02-20 14:26:42
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-21 13:10:55
 * @FilePath: \react-web\src\component\widget\modal\DeleteItems.js
 */
import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react';
import { Radio, Input } from 'antd';

const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
};
//{xh,xz,ys,}
const DeleteItems = props => {
    let onChange = value => {
        props.setType(value);
    };
    let inputItem = () => (
        <Input.Group>
            <Input
                style={{ width: 100, textAlign: 'center' }}
                placeholder="起始"
                onChange={e => props.setInpitValue({ startNo: e.target.value })}
            />
            <Input
                style={{
                    width: 30,
                    borderLeft: 0,
                    pointerEvents: 'none',
                    backgroundColor: '#fff',
                    borderTop: 0,
                    borderBottom: 0,
                }}
                placeholder="~"
                disabled
            />
            <Input
                style={{ width: 100, textAlign: 'center', borderLeft: 0 }}
                placeholder="终止"
                onChange={e => props.setInpitValue({ endNo: e.target.value })}
            />
        </Input.Group>
    );
    return (
        <div
            style={{
                width: '100%',
            }}
        >
            <Radio.Group onChange={onChange} value={props.value}>
                <Radio style={radioStyle} key={1} value={1}>
                    按选择{props.title}
                </Radio>
                <div
                    className="ee__item"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '18px',
                    }}
                >
                    <Radio style={radioStyle} key={2} value={2}>
                        按序号{props.title}
                    </Radio>
                    {inputItem()}
                </div>
                <div
                    className="ee__item"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '18px',
                    }}
                >
                    <Radio style={radioStyle} key={3} value={3}>
                        按页数{props.title}
                    </Radio>
                    {inputItem()}
                </div>

                {props.customTtems &&
                    props.customTtems.map((v, i) => (
                        <div
                            className="ee__item"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginTop: '18px',
                            }}
                        >
                            <Radio style={radioStyle} value={v.value}>
                                {v.name}
                            </Radio>
                            {v.inputValue && v.inputValue}
                        </div>
                    ))}
            </Radio.Group>
        </div>
    );
};
export default DeleteItems;
