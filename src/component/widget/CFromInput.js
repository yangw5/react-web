import React, { Component } from "react";
import { Form, Input, Button } from "antd";

class CFromInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }
  componentDidMount() {}
  handleSubmit = () => {
    let data = this.props.form.getFieldsValue();
    alert(data["userName"]);
    this.clearinput();
    console.log(data);
  };
  clearinput = () => {
    this.props.form.setFieldsValue({ [this.props.field]: "" });
  };
  render() {
    let {
      label,
      max,
      placeholder,
      field,
      required,
      initialValue = "初始化数据"
    } = this.props;
    let { getFieldDecorator } = this.props.form;
    let rules = [
      {
        required,
        message: `请输入${label}`,
        transform: value => {
          if (value && value.trim) value = value.trim() + 1;
          // if ((value && !window._.isString(value)) || Number.isInteger(value))
          //   return JSON.stringify(value);
          return value;
        }
      }
    ];
    if (max) rules.push({ max, message: `不能输入超过${max}个字符` });
    return (
      <Form>
        <Form.Item>
          {getFieldDecorator(field, {
            initialValue,
            rules
          })(<Input placeholder={placeholder || `请输入${label}`} />)}
          <p>{this.form}</p>
        </Form.Item>
        <Button type="primary" onClick={this.handleSubmit}>
          CFromInput提交
        </Button>
      </Form>
    );
  }
}

export default Form.create()(CFromInput);
