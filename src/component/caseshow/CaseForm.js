import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { ModalContainer, DataEdit } from '../widget';
import { Form, Row } from 'antd';
const STATUS = [{ id: '1', name: '在线' }, { id: '2', name: '离线' }, { id: '3', name: '潜水' }];
const CaseForm = (props, ref) => {
    const modalRef = useRef();
    // 通过处理，父组件获取HOC子ref使用
    useImperativeHandle(ref, () => modalRef.current);
    const formItems = [
        {
            label: '案例名称',
            field: 'name',
            fieldType: 'input',
            required: true,
        },
        {
            label: '状态',
            field: 'status',
            fieldType: 'add',
            options: STATUS,
            required: true,
        },
    ];
    const onOk = () => {
        let data = props.form.getFieldsValue();
        console.log(data);
    };
    return (
        <ModalContainer ref={modalRef} title="新增事项" onOk={onOk}>
            <Row gutter={24}>
                <DataEdit items={formItems} form={props.form} />
            </Row>
        </ModalContainer>
    );
};
export default Form.create()(forwardRef(CaseForm));
