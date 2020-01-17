/*
 * @File:
 * @Description:form自定义组合组件
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-16 14:02:26
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-17 13:50:03
 * @FilePath: \react-web\src\component\widget\Form\FormMultiple.js
 */
import React, { useState } from 'react';
import { Form, Input, Col, Select, Row, Icon } from 'antd';
import './FormMultiple.less';
const Option = Select.Option;

export default ({
    add = true,
    del = true,
    form,
    getFieldDecorator,
    getFieldsValue,
    setFieldsValue,
    field,
    multipleObj,
    initialValue,
    label,
    labelCol = { span: 5 },
    wrapperCol = { span: 12 },
    validator,
    required,
    onChange,
}) => {
    const rows = getFieldsValue([field])[field] || initialValue || [];
    let _addRow = () => {
        _setFieldsValue(values => [...values, {}]);
    };
    let _deleteRow = i => {
        _setFieldsValue(values => {
            values.splice(i, 1);
            return values;
        });
    };
    let _setFieldsValue = callback => {
        // 通过回调统一设置form的值
        // const values = getFieldsValue([field])[field] || [];
        //getFieldsValue 获取一组输入控件的值
        const values = callback(getFieldsValue([field])[field] || []);
        setFieldsValue({ [field]: values });
    };
    let _handleChange = (value, key, i) => {
        _setFieldsValue(values => {
            values[i] = { ...values[i], [key]: value };
            return [...values];
        });
        onChange && onChange(value, key, i);
    };
    return (
        <div>
            <Form.Item
                {...{
                    labelCol,
                    wrapperCol,
                    label,
                }}
            >
                {getFieldDecorator(field, {
                    initialValue,
                    rules: [
                        {
                            required,
                            message: `请输入${label}`,
                            transform: value => JSON.stringify(value),
                        }, //`
                        { validator },
                    ],
                })(<Input style={{ display: 'none' }} />)}
                <Col span={24}>
                    {rows.map((v, i) => (
                        <div
                            style={{
                                display: 'flex',
                            }}
                        >
                            {multipleObj.map((obj, j) => (
                                <div className={`row_item ${obj.rowcol}`}>
                                    {obj.select && (
                                        <Select className={'row_item_select'}>
                                            {obj.options &&
                                                obj.options.map(option => (
                                                    <Option key={option.id} value={option.id}>
                                                        {option.id}
                                                    </Option>
                                                ))}
                                        </Select>
                                    )}
                                    {obj.input && (
                                        <Input
                                            className={'row_item_input'}
                                            defaultValue={v[obj.key]}
                                            onChange={e =>
                                                _handleChange(e.target.value, obj.key, i)
                                            }
                                            placeholder={`请输入${obj.name}`}
                                        />
                                    )}
                                    {obj.inputsearch && (
                                        <Input
                                            className={'row_item_inputserch'}
                                            defaultValue={v[obj.key]}
                                            onChange={e =>
                                                _handleChange(e.target.value, obj.key, i)
                                            }
                                            placeholder={`请输入${obj.name}`}
                                        />
                                    )}

                                    {del && j === multipleObj.length - 1 && (
                                        // 删除
                                        <div className={'mutiple_icon'}>
                                            <Icon type="delete" onClick={_deleteRow} />
                                        </div>
                                    )}

                                    {add && i === rows.length - 1 && j === multipleObj.length - 1 && (
                                        //添加
                                        <div className={'mutiple_icon'}>
                                            <Icon type="plus-circle" onClick={_addRow} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                    {add && rows.length === 0 && (
                        <div className={'mutiple_icon'}>
                            <Icon type="plus-circle" onClick={_addRow} />
                        </div>
                    )}
                </Col>
            </Form.Item>
        </div>
    );
};
