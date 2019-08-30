import React, { Component } from 'react';
import { Form, Input, Col, Select, Icon } from 'antd';

class FormCombin extends Component {
    render() {
        let { getFieldDecorator, field, rules, label, labelcol, warppercol } = this.props;
        let row = [];
        return (
            <div>
                <Form.Item {...{ label, labelcol, warppercol }}>
                    {getFieldDecorator(field, {
                        rules,
                    })(<Input style={{ display: 'none' }} />)}
                </Form.Item>
                <Col>
                    <div>
                        <Select>111g1</Select>
                        <Input />
                    </div>
                </Col>
                {row.length === 0 && <Icon type="lus-circle" />}
            </div>
        );
    }
}
export default FormCombin;
