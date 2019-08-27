import React, { Component } from 'react';
import { Form, Button, Col, Card, Row } from 'antd';
import CFromInput from './CFromInput';
import FromInput from './Form/FromInput';
import FormSelect from './Form/FormSelect';
import FormCheckBox from './Form/FormCheckBox';
import FormData from './Form/FormData';
import FormRange from './Form/FormRange';
import FormComplete from './Form/FormComplete';

import TableWidget from './TableWidget';
const formItemLayout = {
    labelCol: {
        span: 7,
    },
    wrapperCol: {
        span: 17,
    },
};
const length = 12;

class FromSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialValue: '密码',
            initialValue1: '性别',
        };
    }
    //提交
    onsumit = () => {
        // this.props.form.getFieldsValue();
        console.log('表单数据：');
        console.log(this.props.form.getFieldsValue());
        console.log(this.props.form.getFieldsValue()['edittimer'][0].format('YYYY-MM-DD'));
        this.props.form.setFieldsValue({ password: '' });
    };
    //重置
    handleReset = () => {
        this.props.form.resetFields();
    };
    //
    sliceArray = (array, size) => {
        var result = [];
        for (let i = 0; i <= array.length / size; i++) {
            let start = i * size;
            let end = start + size;
            result.push(array.slice(start, end));
        }
        return result;
    };
    //类型渲染
    _renderFromInput = parms => (
        <FromInput {...{ ...formItemLayout, ...parms, ...this.props.form }} />
    );
    _renderFormSelect = parms => (
        <FormSelect {...{ ...formItemLayout, ...parms, ...this.props.form }} />
    );
    _renderFormCheckBox = parms => (
        <FormCheckBox {...{ ...formItemLayout, ...parms, ...this.props.form }} />
    );
    _renderFormData = parms => (
        <FormData {...{ ...formItemLayout, ...parms, ...this.props.form }} />
    );
    _renderFormRange = parms => (
        <FormRange {...{ ...formItemLayout, ...parms, ...this.props.form }} />
    );
    _rederFormComplete = parms => (
        <FormComplete {...{ ...formItemLayout, ...parms, ...this.props.form }} />
    );
    //类型判断
    _renderFormItem = item => {
        switch (item.type) {
            case 'input':
                return this._renderFromInput(item);
            case 'select':
                return this._renderFormSelect(item);
            case 'check':
                return this._renderFormCheckBox(item);
            case 'data':
                return this._renderFormData(item);
            case 'range':
                return this._renderFormRange(item);
            case 'complete':
                return this._rederFormComplete(item);
            default:
        }
    };
    // fromItem jsx
    getFields = fromItems => {
        return fromItems.map((v, i) => (
            // <Row gutter={24} key={i}>
            //     v.map((m,n)=>(
            // <Row gutter={24} key={i}>
            <Col span={6} key={i}>
                {this._renderFormItem(v)}
            </Col>
            //  )
            //     )
            // </Row>
        ));
    };
    //提交
    handleSearch = () => {};
    render() {
        let { form, searchItem, title = '' } = this.props;
        return (
            <div
                className={'From_input'}
                style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    flexWrap: 'wrap',
                    paddingRight: '90px',
                }}
            >
                <Card
                    id="area"
                    title={title}
                    bordered={false}
                    style={{
                        width: '100%',
                    }}
                >
                    <Form onSubmit={this.handleSearch}>
                        {this.getFields(searchItem)}
                        {
                            <Col
                                span={24}
                                style={{
                                    textAlign: 'right',
                                }}
                            >
                                <Button onClick={this.onsumit} type="primary">
                                    FromSearch提交
                                </Button>
                                <Button
                                    style={{ marginLeft: 8 }}
                                    onClick={this.handleReset}
                                    type="primary"
                                >
                                    重置
                                </Button>
                            </Col>
                        }
                        {/* {searchItem.map(v => (
                    <Col span={6}>
                        <FromInput
                            {...{
                                ...this.props.form,
                                ...formItemLayout,
                                ...v,
                            }}
                            max={10}
                            form={form}
                            // field={v.field}
                            // label={v.label}
                            // valueFilter={v.valueFilter}
                            // initialValue={this.state.initialValue}
                            // addonAfter={(id, props) => (
                            //     <span
                            //         onClick={props => {
                            //             this.onsumit();
                            //         }}
                            //     >
                            //         清除
                            //     </span>
                            // )}
                        />
                    </Col>
                ))} */}

                        <div
                            className={'From_input'}
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                flexWrap: 'wrap',
                                paddingRight: '90px',
                            }}
                        >
                            {false &&
                                searchItem.map((v, i) => (
                                    <Col span={6} key={i}>
                                        <FromInput
                                            {...{
                                                ...this.props.form,
                                                ...formItemLayout,
                                                ...v,
                                            }}
                                            max={10}
                                            form={form}
                                            // field={v.field}
                                            // label={v.label}
                                            // valueFilter={v.valueFilter}
                                            // initialValue={this.state.initialValue}
                                            // addonAfter={(id, props) => (
                                            //     <span
                                            //         onClick={props => {
                                            //             this.onsumit();
                                            //         }}
                                            //     >
                                            //         清除
                                            //     </span>
                                            // )}
                                        />
                                    </Col>
                                ))}
                        </div>
                    </Form>
                </Card>
                {/* <div style={{ width: '100%' }}>
                    <Card bordered={false}>{<TableWidget />}</Card>
                </div> */}

                {false && (
                    <div>
                        <CFromInput label={'姓名'} field={'userName'} max={50} required={true} />
                        <p>----------------------</p>
                        <FromInput
                            max={5}
                            form={form}
                            field="password"
                            label={'密码'}
                            initialValue={this.state.initialValue}
                            required={true}
                            addonAfter={(id, props) => (
                                <span
                                    onClick={props => {
                                        this.onsumit();
                                    }}
                                >
                                    清除
                                </span>
                            )}
                        />
                        <FromInput
                            max={5}
                            form={form}
                            field="sex"
                            label={'性别'}
                            initialValue={this.state.initialValue1}
                            required={true}
                            addonAfter={(id, props) => (
                                <span
                                    onClick={props => {
                                        this.onsumit();
                                    }}
                                >
                                    清除
                                </span>
                            )}
                        />
                        <Button onClick={this.onsumit} type="primary">
                            FromSearch提交
                        </Button>
                    </div>
                )}
            </div>
        );
    }
}

export default Form.create()(FromSearch);
