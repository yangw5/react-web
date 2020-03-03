/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-21 16:29:15
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-02 14:28:13
 * @FilePath: \react-web\src\component\y5tool\account\AccountBook.js
 */
import React from 'react';
import { BreadcrumbCustom } from '../../widget';
import { Form, Button } from 'antd';
import FormGroup from './widget/FormGroup';
import Stars from './widget/Stars';
import { EXPENSE_TYPE, PAY_TYPE } from '../../../content/index';
function AccountBook(props) {
    const breadItems = [{ title: '第三方组件' }, { title: '账本' }];
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
    let stars = {
        allowHalf: true,
        type: 'write',
    };
    return (
        <div>
            <BreadcrumbCustom {...{ breadItems }} />
            <div style={{ padding: '20px' }}>
                <Form onSubmit={_onsubmit}>
                    <FormGroup {...dataconfig} />
                    <Stars {...stars} />
                    <Button type="primary" htmlType="submit" style={{ marginTop: '50px' }}>
                        提交
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Form.create()(AccountBook);
