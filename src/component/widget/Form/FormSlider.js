/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-17 15:32:19
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-17 16:05:21
 * @FilePath: \react-web\src\component\widget\Form\FormSlider.js
 */
import React from 'react';
import { Form, Slider } from 'antd';

export default ({
    label,
    labelCol = { span: 5 },
    wrapperCol = { span: 60 },
    form,
    disabled,
    getFieldDecorator,
    field,
    initialValue = 25,
    required,
    validator,
    max = 100,
    min = 0,
    icon,
    tooltipVisible,
    step = 5,
    range,
    marks = {
        0: '开始',
        10: '1',
        20: '2',
        33: '3',
        40: '4',
        50: '5',
        60: '6',
        70: '7',
        80: '8',
        90: {
            style: {
                color: '#f50',
            },
            label: <strong>9</strong>,
        },
        100: '结束',
    },
    dots,
    vertical = false,
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
                <Slider
                    getTooltipPopupContaine={() => document.body}
                    {...{ vertical, disabled, tooltipVisible, range, marks, dots, max, min, step }}
                />
            )}
        </Form.Item>
    );
};
