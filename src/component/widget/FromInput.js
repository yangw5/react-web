import React from "react";
import { Form, Input } from "antd";

export default props => {
  return (
    <Form.Item {...props}>
      <Input placeholder="input with clear icon" allowClear />
    </Form.Item>
  );
};
