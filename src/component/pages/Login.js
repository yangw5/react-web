import React from 'react';
import { toHtmlPage, setCookie } from '../../utils';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
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
                    toHtmlPage('index');
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
