import React, { Component } from 'react';
// 解耦
//import { Form } from 'antd';
import { Form, Select } from 'antd';
const { Option } = Select;

// function filterOption() {}

class FormSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            children: null,
        };
    }
    componentDidMount() {}
    //搜索查询
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
    fetchtext = () => {
        // this.setState({
        //     children: datachildren,
        // });
    };
    //自定义
    getOptions = type => {
        let children = [];
        let options = this.props.options;
        options &&
            options.length > 0 &&
            options.forEach((v, i) => {
                children.push(
                    <Option key={i} value={v.id.toString()}>
                        {v.name || v.id}
                    </Option>
                );
            });

        return children;
    };
    setOptions = children => {
        return this.state.children || this.getOptions();
    };
    render() {
        let {
            getFieldDecorator,
            defaultActiveFirstOption = true, //默认选择首项
            field,
            searchApi,
            showSearch,
            mode,
            message,
            filterOption,
            allowClear,
            disabled = false,
            label,
            loading = false,
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
                {getFieldDecorator(field, { rules })(
                    <Select
                        {...{
                            labelInValue: searchApi ? true : false,
                            allowClear,
                            defaultActiveFirstOption,
                            disabled,
                            filterOption,
                            loading,
                        }}
                        showSearch={showSearch}
                        optionFilterProp="children" //搜索过滤
                        getPopupContainer={() => document.getElementById('area')} //菜单渲染位置
                        mode={mode} //设置模式	'multiple' | 'tags'
                        placeholder={message || `请选择${label}`}
                        // style={}
                        onChange={(value, option) => this.fetchtext()}
                        // onSearch={e => this.fetchtext()}
                        // onDeselect={}
                    >
                        {this.setOptions()}
                    </Select>
                )}
            </Form.Item>
        );
    }
}

export default FormSelect;
