import React from "react";
import { Form, Icon, Input, Button } from "antd";

import "./signup-form.scss";

const SignupForm = props => {
  const { getFieldDecorator } = props.form;
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, data) => {
      if (!err) {
        props.signup(data);
      }
    });
  };
  return (
    <Form className="signup-form" onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator("name", {
          rules: [{ required: true, message: "Please input your name!" }]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Name"
          />
        )}
      </Form.Item>

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
        {getFieldDecorator("password_confirmation", {
          rules: [
            {
              required: true,
              message: "Please input your Password confirmation!"
            }
          ]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password confirmation"
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="submit-button">
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
};

const WrappedSignupForm = Form.create({ name: "normal_login" })(SignupForm);

export default WrappedSignupForm;
