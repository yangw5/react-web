import React, { Component } from "react";
import { Form } from "antd";
import FromInput from "./FromInput";

class FromSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }
  render() {
    return (
      <div>
        <Form>
          <FromInput />
        </Form>
      </div>
    );
  }
}

export default Form.create()(FromSearch);
