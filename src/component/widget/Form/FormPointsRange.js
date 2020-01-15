/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-15 08:44:08
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-15 14:37:39
 * @FilePath: \react-web\src\component\widget\Form\FormTextarea.js
 */
import React from 'react';
import { Form, Input, Row, Col } from 'antd';

const numberValidator = (rule, value, callback, validator, ruleType) => {
    if (ruleType === 'number' && value && !Number.isInteger(Number(value))) callback('请输入数字');
    if (validator) validator(rule, value, callback);
    else callback();
};

export default props => {
    let {
        label,
        labelCol = { span: 5 },
        wrapperCol = { span: 60 },
        colon = true,
        labelAlign = 'right',
        form,
        field, //数组
        getFieldValue,
        initialValue,
        getFieldDecorator,
        placeholder, //数组
        connector = '~',
        required = false,
        ruleType,
        max,
        min,
        trim = true,
        valueFilter,
        transform,
        validator,
        ...restProps //其他相关属性
    } = props;
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
            validator: (rule, value, callback) =>
                numberValidator(rule, value, callback, validator, ruleType),
        },
    ];
    let FormItemCustom = index => {
        return (
            <Form.Item>
                {getFieldDecorator(field[index], {
                    initialValue,
                    rules,
                    validateFirst: true,
                    normalize: value => {
                        if (value && trim && value.trim) value = value.trim();
                        if (valueFilter) return valueFilter(value);
                        return value;
                    },
                })(
                    <Input
                        style={{ width: '100%', textAlign: index === 0 ? 'left' : 'right' }}
                        placeholder={
                            (placeholder && placeholder[index]) || index === 0 ? `起始` : '截止'
                        }
                    />
                )}
            </Form.Item>
        );
    };
    let ConnectorCustom = () => {
        if (typeof connector === 'function') return connector();
        else
            return (
                <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                    {connector}
                </span>
            );
    };

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
            <Row>
                <Col span={11}>{FormItemCustom(0)} </Col>
                <Col span={2}>{ConnectorCustom()}</Col>
                <Col span={11}>{FormItemCustom(1)} </Col>
            </Row>
        </Form.Item>
    );
};
