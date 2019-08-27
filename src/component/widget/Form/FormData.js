import React, { Component } from 'react';
import { Form, DatePicker } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const { MonthPicker, RangePicker } = DatePicker;
//format('YYYY-MM-DD')    //格式转换
class FormData extends Component {
    onChange = () => {};
    onOk = () => {};
    render() {
        let {
            label,
            labelCol = { span: 5 },
            wrapperCol = { span: 24 },
            getFieldDecorator,
            field,
            rules,
            isrange = false,
            dateFormat = 'YYYY/MM/DD',
            initialValue,
            placeholder = '时间',
            validator,
            showTime = true,
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
                                format={dateFormat}
                            />
                        ) : (
                            <DatePicker
                                style={{ width: '100%' }}
                                onChange={this.onChange}
                                onOk={this.onOk}
                                placeholder={placeholder}
                                format="YYYY-MM-DD HH:mm"
                                showTime={showTime}
                            />
                        )
                    )}
                </Form.Item>
            </div>
        );
    }
}
export default FormData;
