import React, { Component } from 'react';
import { Form, Input, Col, Select, Icon } from 'antd';
import './Formcombin.less';

class FormCombin extends Component {
    setFields = callback => {
        let { getFieldsValue, setFieldsValue, field } = this.props;
        //获取field
        const values = callback(getFieldsValue([field])[field] || []);
        // console.log('start');
        // console.log(getFieldsValue());
        // console.log(getFieldsValue()[field]);
        // console.log(getFieldsValue([field]));
        // console.log(getFieldsValue([field])[field]);
        // console.log('end');
        setFieldsValue({ [field]: values });
    };
    render() {
        let { getFieldDecorator, field, rules, label, labelcol, warppercol } = this.props;
        let row = [];
        return (
            <div className="combin_containor">
                <Form.Item {...{ label, labelcol, warppercol }}>
                    {getFieldDecorator(field, {
                        rules,
                    })(<Input style={{ display: 'none' }} />)}
                </Form.Item>
                <Col span={20} style={{ marginTop: 4, marginLeft: -27 }}>
                    {row && row.length > 0 && (
                        <div className="combin__div">
                            <Select></Select>
                            <Input />
                        </div>
                    )}
                    {row.length === 0 && <Icon type="lus-circle" />}
                </Col>
            </div>
        );
    }
}
export default FormCombin;
