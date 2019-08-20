import React, { Component } from 'react';
// 解耦
//import { Form } from 'antd';
import { Form, Select,Input } from 'antd';
const { Option } = Select;
const InputGroup = Input.Group;

function filterOption() {}

class FormSelect extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {}
    fetchApi = () => {
        let { searchApi } = this.props;
        if (searchApi) {
            searchApi().then(res => {
                let datasurce = [];
                res.data.list &&
                    res.data.list.length > 0 &&
                    res.data.list.forEach((v, i) => {
                        datasurce.push(
                            <Option key={i} value={v.id.toString()}>
                                {v.name || v.id}
                            </Option>
                        );
                    });
            });
        }
    };
    getOptions = value => {
        const { options } = this.props;
        let childen = [];
        options &&
            options.length > 0 &&
            options.forEach((v, i) => {
                childen.push(
                    <Option key={i} value={v.id.toString()}>
                        {v.name || v.id}
                    </Option>
                );
            });
        return childen;
    };
    render() {
        let {
            getFieldDecorator,
            filter,
            searchApi,
            showSearch,
            mode,
            message,
            allowClear = true,
            disabled = false,
            label,
            labelCol = { span: 5 },
            wrapperCol = { span: 12 },
        } = this.props;
        let rules = [
            {
                required: true,
                message: `请选择${label}`,
            },
            {},
        ];
        return (
            <Form.Item
                {...{
                    label,
                    labelCol,
                    wrapperCol,
                }}
            >
                <InputGroup>
                {getFieldDecorator(filter, { rules })(
                    <Select
                        {...{
                            labelInValue:searchApi ? true : false,
                            allowClear,
                            defaultActiveFirstOption,
                            disabled,
                        }}
                        
                        showSearch={showSearch}
                        optionFilterProp="children"//搜索过滤
                        getPopupContainer={() => document.getElementById('area')}//菜单渲染位置
                        mode={mode}//设置模式	'multiple' | 'tags'
                        placeholder={message || `请选择${label}`}
                        style={}
                        onChange={}
                        onSearch={}
                        onSelect={}
                    >
                        {getOptions}
                    </Select>
                )}
                }
                </InputGroup>
            </Form.Item>
        );
    }
}

export default FormSelect;
