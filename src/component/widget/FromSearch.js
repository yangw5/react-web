import React, { Component } from 'react';
import { Form, Button, Col } from 'antd';
import CFromInput from './CFromInput';
import FromInput from './FromInput';

const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 18,
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
    onsumit = () => {
        // this.props.form.getFieldsValue();
        alert(this.props.form.getFieldsValue()['password']);
        this.props.form.setFieldsValue({ password: '' });
    };
    render() {
        let { form, searchItem } = this.props;
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
                {searchItem.map(v => (
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
                ))}

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
