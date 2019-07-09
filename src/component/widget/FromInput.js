import React from "react";
import { Form, Input } from "antd";

export default ({ initialValue, label, max, form, placeholder, field }) => {
  let { getFieldDecorator } = form;
  let rules = [
    {
      message: `请输入${label}`,
      transform: value => {
        if (value && value.trim) value = value.trim();
        // if ((value && !window._.isString(value)) || Number.isInteger(value))
        //   return JSON.stringify(value);
        return value;
      }
    }
  ];
  if (max) rules.push({ max, message: `不能输入超过${max}个字符` });
  return (
    <Form.Item>
      {getFieldDecorator(field, {
        initialValue,
        rules
      })(<Input placeholder={placeholder || `请输入${label}`} />)}
    </Form.Item>
  );
};
