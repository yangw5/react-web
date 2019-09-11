import React from 'react';
import BreadcrumbCustom from '../../widget/BreadcrumbCustom';
import { Form, Button } from 'antd';
import FormGroup from './widget/FormGroup';
import { EXPENSE_TYPE, PAY_TYPE } from '../../../content/index';
function AccountBook(props) {
    const breadItems = [{ title: '生活工具' }, { title: '账本' }];
    let { form } = props;
    const multipleObj = [
        {
            key: 'palytype',
            name: '消费类型',
            select: true,
            options: EXPENSE_TYPE,
        },
        {
            key: 'paytype',
            name: '支付类型',
            select: true,
            options: PAY_TYPE,
        },
        {
            key: 'paymoney',
            name: '消费金额',
            input: true,
        },
        {
            key: 'other',
            name: '备注',
            other: true,
        },
    ];
    const formItems = {
        label: '账单明细',
        field: 'accountdata',
        multipleObj,
        // labelCol: { span: 0 },
    };
    let dataconfig = {
        ...formItems,
        ...form,
    };

    let _onsubmit = e => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    return (
        <div>
            <BreadcrumbCustom {...{ breadItems }} />
            <div style={{ padding: '20px' }}>
                <Form onSubmit={_onsubmit}>
                    <FormGroup {...dataconfig} />

                    <Button type="primary" htmlType="submit" style={{ marginTop: '50px' }}>
                        提交
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Form.create()(AccountBook);
