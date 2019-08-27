/*
 * 文本输入框通用组件
 * */
import React from 'react';
import { Form, Input } from 'antd';
import { Button } from 'antd/lib/radio';

const numberValidator = (rule, value, callback, validator, ruleType) => {
    if (ruleType === 'number' && value && !Number.isInteger(Number(value))) callback('请输入数字');
    if (validator) validator(rule, value, callback);
    else callback();
};

export default ({
    getFieldDecorator,
    getFieldValue,
    setFieldsValue,
    initialValue,
    label,
    field,
    required,
    validator,
    disabled = false,
    deleteinput,
    labelCol = { span: 5 },
    wrapperCol = { span: 12 },
    max,
    ruleType = 'string',
    placeholder,
    valueFilter,
    ...restProps
}) => {
    const rules = [
        {
            required,
            message: `请输入${label}`,
            transform: value => {
                if (value && value.trim) value = value.trim();
                if ((value && !window._.isString(value)) || Number.isInteger(value))
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
    restProps.addonAfter &&
        Object.assign(inputProps, {
            addonAfter: (
                <div style={{ padding: '9px 0', cursor: 'pointer' }}>
                    {restProps.addonAfter(getFieldValue(field), restProps)}
                </div>
            ),
        });
    // 设置可读条件下删除
    // deleteinput &&
    //     Object.assign(inputProps, {
    //         addonAfter: (
    //             <div style={{ padding: '9px 0', cursor: 'pointer' }}>
    //                 <span
    //                     onClick={() => {
    //                         setFieldsValue({ [field]: '' });
    //                     }}
    //                 >
    //                     清除
    //                 </span>
    //             </div>
    //         ),
    //     });

    return (
        <Form.Item
            {...{
                label,
                labelCol,
                wrapperCol,
            }}
            className="form__input"
        >
            {getFieldDecorator(field, {
                initialValue,
                rules,
                validateFirst: true, //当某一规则校验不通过时，是否停止剩下的规则的校验
                normalize: value => {
                    if (valueFilter) return valueFilter(value);
                    return value;
                },
            })(
                restProps.readOnly ? (
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
                        <span
                            style={{
                                wordWrap: 'break-word',
                                padding: '0px 0px',
                                cursor: 'pointer',
                                wordBreak: ' break-all',
                            }}
                        >
                            {getFieldValue(field)}
                        </span>
                        {deleteinput && (
                            <span>
                                <Button
                                    style={{
                                        background: '#5f4280',
                                        color: '#fff',
                                        width: '60px',
                                        // marginLeft: '10px',
                                    }}
                                    onClick={() => {
                                        setFieldsValue({ [field]: '' });
                                    }}
                                >
                                    清除
                                </Button>
                            </span>
                        )}
                    </div>
                ) : (
                    <Input
                        placeholder={placeholder || `请输入${label}`}
                        {...inputProps}
                        disabled={disabled}
                    />
                )
            )}
        </Form.Item>
    );
};
