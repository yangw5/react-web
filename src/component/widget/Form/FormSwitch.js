/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-17 15:32:46
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-17 15:44:55
 * @FilePath: \react-web\src\component\widget\Form\FormSwitch.js
 */
import React from 'react';
import { Form, Switch } from 'antd';

export default ({
    label,
    labelCol = { span: 5 },
    wrapperCol = { span: 60 },
    form,
    disabled,
    getFieldDecorator,
    field,
    initialValue = true,
    required,
    validator,
    checkedChildren = '开',
    unCheckedChildren = '关',
}) => {
    return (
        <Form.Item
            {...{
                labelCol,
                wrapperCol,
                label,
            }}
        >
            {getFieldDecorator(field, {
                rules: [
                    {
                        required,
                        message: `请输入${label}`,
                        transform: value => JSON.stringify(value),
                    }, //`
                    { validator },
                ],
                initialValue,
            })(<Switch {...{ unCheckedChildren, checkedChildren, disabled }} />)}
        </Form.Item>
    );
};
