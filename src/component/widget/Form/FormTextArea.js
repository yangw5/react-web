/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-15 08:44:08
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-15 14:21:38
 * @FilePath: \react-web\src\component\widget\Form\FormTextarea.js
 */
import React from 'react';
import { Form, Input } from 'antd';
let Textarea = Input.TextArea;
export default ({
    label,
    labelCol = { span: 4 },
    wrapperCol = { span: 12 },
    colon = true,
    labelAlign = 'right',
    form,
    field,
    getFieldValue,
    initialValue,
    getFieldDecorator,
    placeholder,
    readOnly,
    required = false,
    max,
    min,
    trim = true,
    valueFilter,
    transform,
    validator,
    ...restProps //其他相关属性
}) => {
    let rules = [
        {
            required,
            message: `请输入${label}`,
            transform: value => {
                if (value && trim && value.trim) {
                    value = value.trim();
                }
                if (transform) value = transform(value);
                return value;
            },
        },
        {
            min,
            message: `不能少于${min}个字`,
        },
        {
            max,
            message: `不能少于${max}个字`,
        },
        {
            validator: (rule, value, callback) => {
                if (validator) validator(rule, value, callback);
                else callback();
            },
        },
    ];
    return (
        <Form.Item
            {...{
                label,
                labelCol,
                wrapperCol,
                colon,
                labelAlign,
            }}
        >
            {getFieldDecorator(field, {
                initialValue,
                rules,
                validateFirst: true,
                normalize: value => {
                    if (value && trim && value.trim) value = value.trim();
                    if (valueFilter) return valueFilter(value);
                    return value;
                },
            })(
                readOnly ? (
                    <span>{getFieldValue(field)}</span>
                ) : (
                    <Textarea placeholder={placeholder || `请输入${label}`} />
                )
            )}
        </Form.Item>
    );
};
