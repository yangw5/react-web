/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-27 16:26:04
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-15 17:51:07
 * @FilePath: \react-web\src\component\widget\Form\FormComplete.js
 */
import React, { useState } from 'react';
import { Form, AutoComplete } from 'antd';
const { Option } = AutoComplete;
function FormComplete({
    label,
    getFieldDecorator,
    field,
    rules,
    initialValue,
    defaultActiveFirstOption,
    disabled = false,
    labelCol = { span: 4 },
    wrapperCol = { span: 12 },
    dataSource,
    optionLabelProp,
    allowClear = false,
    filterOption = false,
    ChildrenCustom,
}) {
    let [Children, setChildren] = useState([]);
    let [childrendata, setChildrendata] = useState(dataSource || []);
    let handleSearch = () => {
        setChildrendata(['数据1', '数据2', '数据3', '数据4', '数据5']);
        let childrendata = ['数据1', '数据2', '数据3', '数据4', '数据5'].map(v => (
            <Option key={v}>{v}</Option>
        ));
        setChildren(childrendata);
    };
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
                    <AutoComplete
                        style={{ width: '100%' }}
                        placeholder={`请输入${label}`}
                        initialValue={initialValue}
                        filterOption={(inputValue, option) =>
                            filterOption &&
                            option.props.children
                                .toUpperCase()
                                .indexOf(inputValue.toUpperCase()) !== -1
                        }
                        allowClear={allowClear}
                        dataSource={ChildrenCustom ? childrendata : dataSource}
                        disabled={disabled}
                        onSearch={handleSearch} //搜索补全项的时候调用
                        optionLabelProp={optionLabelProp} //回填属性
                        defaultActiveFirstOption={defaultActiveFirstOption} //是否默认高亮第一个选项。
                    >
                        {/* 自定义输入组件 */}
                        {ChildrenCustom ? ChildrenCustom() : Children}
                    </AutoComplete>
                )}
            </Form.Item>
        </div>
    );
}
export default FormComplete;
