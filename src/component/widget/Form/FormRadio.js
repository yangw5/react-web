/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-17 10:48:03
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-17 14:15:29
 * @FilePath: \react-web\src\component\widget\Form\FormRadio.js
 */
import React from 'react';
import { Form, Radio } from 'antd';
const RButton = Radio.Button;

export default ({
    label,
    labelCol = { span: 4 },
    wrapperCol = { span: 12 },
    form,
    getFieldDecorator,
    field,
    initialValue = '1',
    required,
    transform,
    optype = 'radio',
    options = [
        { value: '1', label: '是' },
        { value: '0', label: '否' },
    ],
    radioClick, //对外暴露接口
}) => {
    let type = {
        button: RButton,
        radio: Radio,
    };
    let setOption = ComponentName => (
        <Radio.Group>
            {options &&
                options.map((v, i) => (
                    <ComponentName
                        onClick={e => radioClick && radioClick(e.target.value)}
                        value={v.value}
                        key={i}
                        disabled={v.disabled}
                    >
                        {v.label}
                    </ComponentName>
                ))}
        </Radio.Group>
    );

    return (
        <Form.Item
            {...{
                label,
                labelCol,
                wrapperCol,
            }}
        >
            {getFieldDecorator(field, {
                rules: [
                    {
                        required,
                        message: `请选择${label}`,
                        transform: value => {
                            if (transform) value = transform(value);
                            return value;
                        },
                    },
                ],
                initialValue,
                normalize: value => {
                    return value;
                },
            })(setOption(type[optype]))}
        </Form.Item>
    );
};
