/*
 * 下拉选择通用组件
 * */
import React, { Component } from 'react';
import { Form, Select, Input, Menu, Dropdown, Button, Icon, Tabs } from 'antd';

const InputGroup = Input.Group;
const { Option } = Select;
class FormSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    //option渲染
    getOptions = () => {
        const { options } = this.props;
        let childen = [];
        options &&
            options.length > 0 &&
            options.forEach((element, i) => {
                childen.push(
                    <Option key={i} value={element.id.toString()}>
                        {element.name || element.id}
                    </Option>
                );
            });
        return childen;
    };
    //初始化
    getAsyncOptions = () => {};

    fetchApi = () => {};
    /**
     * 统一设置Option
     */
    setOptions = childen => {
        return this.getOptions();
    };
    render() {
        const {
            label,
            labelCol = { span: 6 },
            wrapperCol = { span: 18 },
            getFieldDecorator,
            field = '',
            message = '',
        } = this.props;
        return (
            <Form.Item {...{ label, labelCol, wrapperCol }} id="area" style={{ display: 'flex' }}>
                <InputGroup>
                    {getFieldDecorator(field, {})(
                        <Select
                            getPopupContainer={() =>
                                document.getElementById('area') || document.querySelector('body')
                            }
                            placeholder={message || `请选择${label}`}
                            style={{ width: '80%', marginRight: 2 }}
                        >
                            {this.setOptions({})}
                        </Select>
                    )}
                </InputGroup>
            </Form.Item>
        );
    }
}

export default FormSelect;
