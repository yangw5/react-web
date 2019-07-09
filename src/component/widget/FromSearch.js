import React, { Component } from "react";
import { Form, Button } from "antd";
import CFromInput from "./CFromInput";
import FromInput from "./FromInput";

class FromSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValue: "密码",
      initialValue1: "性别"
    };
  }
  onsumit = () => {
    // this.props.form.getFieldsValue();
    alert(this.props.form.getFieldsValue()["password"]);
    this.props.form.setFieldsValue({ password: "" });
  };
  render() {
    let { form } = this.props;
    return (
      <div>
        <CFromInput
          label={"姓名"}
          field={"userName"}
          max={50}
          required={true}
        />
        <p>----------------------</p>
        <FromInput
          max={5}
          form={form}
          field="password"
          label={"密码"}
          initialValue={this.state.initialValue}
          required={true}
          addonAfter={(id, props) => (
            <span
              onClick={props => {
                this.onsumit();
              }}>
              清除
            </span>
          )}
        />
        <FromInput
          max={5}
          form={form}
          field="sex"
          label={"性别"}
          initialValue={this.state.initialValue1}
          required={true}
          addonAfter={(id, props) => (
            <span
              onClick={props => {
                this.onsumit();
              }}>
              清除
            </span>
          )}
        />
        <Button onClick={this.onsumit} type="primary">
          FromSearch提交
        </Button>
      </div>
    );
  }
}

export default Form.create()(FromSearch);
