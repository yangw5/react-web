import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit() {
    alert(1);
  }
  render() {
    let { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <div className="login-form">
          <div className="login-logo">logo</div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator("userName", {
                rules: [
                  {
                    required: true,
                    message: "请输入用户名！"
                  },
                  {
                    max: 5,
                    message: "字符长度少于5！"
                  }
                ]
              })(<Input placeholder="管理员输入admin, 游客输入guest" />)}
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: "100%" }}>
              {" "}
              登录
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
export default Form.create()(Login);
