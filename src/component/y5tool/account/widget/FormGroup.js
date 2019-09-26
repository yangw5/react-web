import React, { useState, useEffect } from 'react';
import { Form, Input, Col, Select, Icon } from 'antd';
const { Option } = Select;
function FormGroup({
    getFieldDecorator,
    getFieldsValue,
    setFieldsValue,
    label,
    field,
    objKey,
    multipleObj,
}) {
    let _setoption = type => {
        return type.map((v, i) => (
            <Option value={v.key} key={v.key}>
                {v.value}
            </Option>
        ));
    };
    useEffect(() => {
        _addRow();
    }, []);
    let [dataarray, setDataarray] = useState([]);
    let [value, setValue] = useState([]);
    let _addRow = () => {
        let index = Math.random() * 100;
        let item = { key: index };
        let cd = [...dataarray];
        cd.push(item);
        setDataarray(cd);
    };
    let _deleteRow = i => {
        let cd = [...dataarray];
        cd.splice(i, 1);
        _setFieldsValue(values => {
            values.splice(i, 1);
            return [...values];
        });
        setDataarray(cd);
    };
    //保存数据
    let _handleChange = (e, key, i) => {
        _setFieldsValue(values => {
            if (e.target) {
                values[i] = { ...values[i], [key]: e.target.value };
            } else {
                values[i] = { ...values[i], [key]: e };
            }
            return [...values];
        });
    };
    let _setFieldsValue = callback => {
        // 通过回调统一设置form的值
        // const values = getFieldsValue([field])[field] || [];
        const values = callback(getFieldsValue([field])[field] || []);
        setFieldsValue({ [field]: values });
    };
    return (
        <div>
            <Form.Item label={label}>
                {getFieldDecorator(field, {
                    rules: [],
                })(<Input style={{ display: 'none' }} />)}
            </Form.Item>
            {dataarray.map((v, i) => (
                <Col
                    key={v.key}
                    span={24}
                    style={{
                        marginTop: '20px',
                    }}
                >
                    {multipleObj.map((obj, j) => (
                        <div>
                            {obj.select && (
                                <Col span={4}>
                                    <Select
                                        placeholder={`请选择${obj.name}`}
                                        // defaultValue={'1'}
                                        onChange={e => _handleChange(e, obj.key, i)}
                                    >
                                        {_setoption(obj.options)}
                                    </Select>
                                </Col>
                            )}
                            {obj.input && (
                                <Col span={4}>
                                    <Input
                                        prefix="￥"
                                        suffix="RMB"
                                        placeholder={`${obj.name}`}
                                        onChange={e => _handleChange(e, obj.key, i)}
                                        // value={money}
                                    />
                                </Col>
                            )}
                            {obj.other && (
                                <Col span={6}>
                                    <Input
                                        placeholder={`请填写${obj.name}`}
                                        onChange={e => _handleChange(e, obj.key, i)}
                                    />
                                </Col>
                            )}
                        </div>
                    ))}
                    <Col
                        span={2}
                        style={{ textAlign: 'center', height: '32px', lineHeight: '32px' }}
                    >
                        <Icon
                            type={'plus'}
                            onClick={() => {
                                _addRow();
                            }}
                        />
                    </Col>
                    {dataarray.length > 1 && (
                        <Col
                            span={2}
                            style={{
                                textAlign: 'center',
                                height: '32px',
                                lineHeight: '32px',
                            }}
                        >
                            <Icon
                                type={'close-circle'}
                                onClick={() => {
                                    _deleteRow(i);
                                }}
                            />
                        </Col>
                    )}
                </Col>
            ))}
        </div>
    );
}

export default FormGroup;
