import React, { useEffect, useState } from 'react';
import { Form, AutoComplete } from 'antd';
const { Option } = AutoComplete;
function FormComplete({
    label,
    getFieldDecorator,
    field,
    rules,
    initialValue,
    defaultActiveFirstOption,
    labelCol = { span: 7 },
    wrapperCol = { span: 17 },
}) {
    let [dataSource, setdataSource] = useState(['Burns Bay Road', 'Downing Street', 'Wall Street']);
    let [Children, setChildren] = useState([]);
    let handleSearch = () => {
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
                        // dataSource={dataSource}
                        placeholder={`请输入${label}`}
                        // filterOption={(inputValue, option) =>
                        //     option.props.children
                        //         .toUpperCase()
                        //         .indexOf(inputValue.toUpperCase()) !== -1
                        // }
                        // initialValue={[]}
                        onSearch={handleSearch}
                        optionLabelProp="inputtext"
                        defaultActiveFirstOption={defaultActiveFirstOption}
                    >
                        {Children}
                    </AutoComplete>
                )}
            </Form.Item>
        </div>
    );
}
export default FormComplete;
