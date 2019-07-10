/*
 * 下拉选择通用组件
 * */
import React, { Component } from "react";
import { Form, Select, Input, Menu, Dropdown, Button, Icon, Tabs } from "antd";

const InputGroup = Input.Group;
class FormSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Form.Item>
        <InputGroup />
      </Form.Item>
    );
  }
}

export default FormSelect;
