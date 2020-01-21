/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-17 16:09:17
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-17 16:16:10
 * @FilePath: \react-web\src\component\widget\Form\FormRate.js
 */
import React from 'react';
import { Form, Rate } from 'antd';

export default ({
    label,
    labelCol = { span: 4 },
    wrapperCol = { span: 12 },
    form,
    disabled,
    getFieldDecorator,
    field,
    initialValue = 2.5,
    required,
    validator,
    allowHalf = true,
    desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'],
    handleChange,
    character,
    style,
    allowClear,
    count,
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
            })(
                <Rate
                    character={character}
                    tooltips={desc}
                    style={style}
                    {...{ disabled, allowHalf, allowClear, count }}
                    onChange={handleChange}
                />
            )}
        </Form.Item>
    );
};
