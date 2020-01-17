import React, { useEffect, useState } from 'react';
import { Checkbox, Form, Col } from 'antd';
import './FormCheckBox.less';

function FormCheckBox(props) {
    let {
        getFieldDecorator,
        label,
        field,
        options,
        labelCol = { span: 7 },
        wrapperCol = { span: 17 },
        pcheckAll = false,
        optionText,
        isAllCheck = true,
        setFieldsValue,
        initialValue,
        placeholder, //占位符
        onallChange,
        checkedstatic,
    } = props;
    let rules = [{ required: true, message: placeholder ? placeholder : `请选择${label}` }];
    let [plainOptions, setPlainOptions] = useState([]); //选择
    let [checkAll, setCheckALL] = useState(false); //全选择
    let [indeterminate, setIndeterminate] = useState(true); //样式控制

    useEffect(() => {
        setOptions();
    }, []);
    let onChange = checkedList => {
        if (checkedList.length === plainOptions.length) {
            setCheckALL(true);
        } else {
            setCheckALL(false);
        }
        if (!!checkedList.length && checkedList.length < plainOptions.length) {
            setIndeterminate(true);
        } else {
            setIndeterminate(false);
        }
    };
    //设置options
    let setOptions = () => {
        let optionsdom = options.map((v, i) => (
            <Col className="form_checkbox" key={i}>
                <Checkbox value={v.value || v.id} disabled={v.disabled}>
                    {optionText
                        ? optionText(v.label || v.name, v.value || v.id)
                        : v.label || v.name}
                </Checkbox>
            </Col>
        ));
        setPlainOptions(optionsdom);
    };
    //全选
    let onCheckAllChange = e => {
        onallChange && onallChange();
        setFieldsValue({
            [field]: e.target.checked ? options.map(v => v.value || v.id) : [...checkedstatic],
        });
        setCheckALL(e.target.checked);
        setIndeterminate(false);
    };
    return (
        <div>
            {pcheckAll && (
                <Checkbox
                    indeterminate={indeterminate}
                    onChange={onCheckAllChange}
                    checked={checkAll}
                >
                    全选
                </Checkbox>
            )}
            <Form.Item
                {...{
                    label: isAllCheck ? (
                        <Checkbox
                            onChange={onCheckAllChange}
                            checked={checkAll}
                            indeterminate={indeterminate}
                        >
                            {label}
                        </Checkbox>
                    ) : (
                        label
                    ),
                    labelCol,
                    wrapperCol,
                    className: 'FC__formitem',
                }}
            >
                {getFieldDecorator(field, { initialValue, rules })(
                    <Checkbox.Group onChange={onChange}>{plainOptions}</Checkbox.Group>
                )}
            </Form.Item>
        </div>
    );
}
export default FormCheckBox;
