import React from "react";
import { Form, Icon, Input, Button } from "antd";

import "./signin-form.scss";

const SigninForm = props => {
  const { getFieldDecorator } = props.form;

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, data) => {
      if (!err) {
        props.signin(data);
      }
    });
  };

  return (
    <Form className="signin-form" onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator("email", {
          rules: [{ required: true, message: "Please input your email!" }]
        })(
          <Input
            prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Email"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("password", {
          rules: [{ required: true, message: "Please input your Password!" }]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="submit-button">
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
};

const WrappedSigninForm = Form.create({ name: "normal_login" })(SigninForm);

export default WrappedSigninForm;
