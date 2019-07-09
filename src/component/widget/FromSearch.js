import React, { Component } from "react";
import { Form, Button } from "antd";
import CFromInput from "./CFromInput";
import FromInput from "./FromInput";

class FromSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }
  onsumit = () => {
    let data = this.props.form.getFieldsValue();
    alert(data["password"]);
    alert(data["userName"]);
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
        <FromInput max={5} form={form} field="password" label={"密码"} />
        <Button onClick={this.onsumit} type="primary">
          FromSearch提交
        </Button>
      </div>
    );
  }
}

export default Form.create()(FromSearch);
