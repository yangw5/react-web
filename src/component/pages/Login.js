/*
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-27 16:26:04
 * @LastEditors: yangw5
 * @LastEditTime: 2019-10-11 15:15:33
 */
import React from 'react';
import { toHtmlPage, setCookie } from '../../utils';
import { Form, Input, Button } from 'antd';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, value) => {
            if (!err) {
                if (value.userName === 'admin') {
                    setCookie('y5Login', 1, 1);
                    toHtmlPage('index', 'app');
                    //debugge
                }
                if (value.userName === 'guest') {
                    alert(2);
                }
            }
        });
    };
    render() {
        let { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <div className={'elephant'}>
                    <div className={'elephant-body'}>
                        <div class="elephant-ear" />
                    </div>
                    <div className={'elephant-leg_1'}>
                        <div className="elephant-foot" />
                    </div>
                    <div className={'elephant-leg_2'}>
                        <div className="elephant-foot" />
                    </div>
                    <div className={'elephant-leg_3'}>
                        <div className="elephant-foot" />
                    </div>
                    <div className={'elephant-leg_4'}>
                        <div className="elephant-foot" />
                    </div>
                </div>
                <div className="login-form">
                    <div className="login-logo">logo</div>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item>
                            {getFieldDecorator('userName', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入用户名！',
                                    },
                                    {
                                        max: 5,
                                        message: '字符长度少于5！',
                                    },
                                ],
                            })(<Input placeholder="管理员输入admin, 游客输入guest" />)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入密码！',
                                    },
                                    {
                                        max: 5,
                                        message: '字符长度少于6！',
                                    },
                                ],
                            })(<Input placeholder="管理员输入admin, 游客输入guest" />)}
                        </Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            style={{ width: '100%' }}
                        >
                            {' '}
                            登录
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}
export default Form.create()(Login);
