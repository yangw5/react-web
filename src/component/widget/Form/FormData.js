/*
 * @File:
 * @Description:时间组件
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-27 16:26:04
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-17 15:25:38
 * @FilePath: \react-web\src\component\widget\Form\FormData.js
 */
import React, { Component } from 'react';
import { Form, DatePicker } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const { RangePicker } = DatePicker;
//format('YYYY-MM-DD')    //格式转换
class FormData extends Component {
    onChange = () => {};
    onOk = () => {};
    render() {
        let {
            label,
            labelCol = { span: 5 },
            wrapperCol = { span: 12 },
            getFieldDecorator,
            field,
            isrange = false,
            dateFormat = 'YYYY/MM/DD', // 'YYYY-MM-DD HH:mm'
            initialValue,
            placeholder = '时间',
            validator,
            showTime = false,
            showToday = true,
            allowClear,
        } = this.props;
        return (
            <div>
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
                                validator: (rule, value, callback) =>
                                    validator ? validator(rule, value, callback) : callback(),
                            },
                            // ...rules,
                        ],
                        initialValue,
                        normalize: (value, prevValue, allValues) => {
                            // 转换moment类型给组件
                            if (value && value.length > 0) {
                                if (isrange && !moment.isMoment(value[0]))
                                    return [moment(value[0]), moment(value[1])];
                                if (!isrange && !moment.isMoment(value)) return moment(value);
                            }
                            return value;
                        },
                    })(
                        isrange ? (
                            <RangePicker
                                style={{ width: '100%' }}
                                getCalendarContainer={() =>
                                    document.getElementById('area') ||
                                    document.querySelector('body')
                                } //定义浮动容器
                                defaultValue={[
                                    moment('2015/01/01', dateFormat),
                                    moment('2015/01/01', dateFormat),
                                ]}
                                format={dateFormat || 'YYYY-MM-DD HH:mm'}
                                showTime={showTime}
                                showToday={showToday}
                                allowClear={allowClear}
                            />
                        ) : (
                            <DatePicker
                                style={{ width: '100%' }}
                                getCalendarContainer={() =>
                                    document.getElementById('area') ||
                                    document.querySelector('body')
                                }
                                onChange={this.onChange}
                                onOk={this.onOk}
                                placeholder={placeholder}
                                format={dateFormat}
                                showTime={showTime}
                                allowClear
                            />
                        )
                    )}
                </Form.Item>
            </div>
        );
    }
}
export default FormData;
