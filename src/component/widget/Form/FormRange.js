import React, { Component } from 'react';
import { Form, DatePicker } from 'antd';
const { RangePicker } = DatePicker;
class FormRange extends Component {
    onChange = () => {};
    onOk = () => {};
    render() {
        let {
            label,
            labelCol = { span: 4 },
            wrapperCol = { span: 12 },
            getFieldDecorator,
            field,
            rules,
            initialValue,
            placeholder = ['编辑前', '编辑后'],
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
                    {getFieldDecorator(field, { rules, initialValue })(
                        <RangePicker
                            onChange={this.onChange}
                            onOk={this.onOk}
                            placeholder={placeholder}
                            format="YYYY-MM-DD HH:mm"
                        />
                    )}
                </Form.Item>
            </div>
        );
    }
}
export default FormRange;
