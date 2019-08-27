/**
 * desc:模块 FromInput
 * @author yangwenwu [<yangw5@163.com>]
 * @version 2015/07/09
 *
 */

import React, { useEffect } from 'react';
import { Form, Input } from 'antd';

/**
 * @function numberValidator - 输入数字验证
 *
 *@param {function}validator - 总定义验证方法
 *@param {string}ruleType - 输入类型
 *@param  {function}callback - 回调
 *@param {any}value - form的属性值
 *@param rule - 未定义
 *
 */
const numberValidator = (rule, value, callback, validator, ruleType) => {
    if (ruleType === 'number' && value && !Number.isInteger(Number(value))) callback('请输入数字');
    if (validator) validator(rule, value, callback);
    else callback();
};
/**
 * @module
 * @param {*} initialValue - 初始化
 */
export default ({
    getFieldDecorator,
    initialValue, //初始值
    label, //label
    max, //长度
    form, //表单
    valueFilter, //value校验限制
    placeholder, //占位符
    field, //表单属性名
    required = false, //是否必填
    readOnly, //只读还是编辑
    ruleType = 'number', //格式类型
    labelCol = { span: 5 }, //label长度
    wrapperCol = { span: 60 }, //input长度
    validator, //自定义验证格式
    addonAfter, //输入框后标签
    ...restProps //其他相关属性
}) => {
    // let { getFieldDecorator } = form;
    let rules = [
        {
            required,
            message: `请输入${label}`,
            transform: value => {
                if (value && value.trim) {
                    value = value.trim();
                }
                if ((value && !window._.isString(value)) || Number.isInteger(value))
                    // lodash的插件方法isString       Number.isInteger()方法用来判断给定的参数是否为整数。
                    return JSON.stringify(value);
                return value;
            },
        },
        {
            validator: (rule, value, callback) =>
                numberValidator(rule, value, callback, validator, ruleType),
        },
    ];
    if (max) rules.push({ max, message: `不能输入超过${max}个字符` });
    // 设置输入框额外的props
    const inputProps = {};
    addonAfter &&
        Object.assign(inputProps, {
            addonAfter: <div style={{ padding: '9px 0', cursor: 'pointer' }}>{addonAfter()}</div>,
        });
    useEffect(() => {});
    let clearinput = () => {
        form.setFieldsValue({
            field: '',
        });
        //value = value.trim();
    };
    return (
        <Form.Item
            className={'addonAfter='}
            {...{
                label,
                labelCol,
                wrapperCol,
            }}
        >
            {getFieldDecorator(field, {
                initialValue,
                rules,
                //  validateFirst: true, //当某一规则校验不通过时，是否停止剩下的规则的校验
                normalize: value => {
                    if (valueFilter) return valueFilter(value);
                    return value;
                },
            })(
                readOnly ? (
                    <span>{label}</span>
                ) : (
                    <Input placeholder={placeholder || `请输入${label}`} {...inputProps} />
                )
            )}
        </Form.Item>
    );
};
