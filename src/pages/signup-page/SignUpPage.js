import React from "react";
import { connect } from "react-redux";
import WrappedSignupForm from "../../components/signup-form/SignupForm";
import { Typography } from "antd";
import { signup } from "../../actions/auth-actions/actions";
import "./signup-page.scss";

const SignUpPage = props => {
  return (
    <div className="signup-page">
      <Typography.Title className="title">Sign up page</Typography.Title>
      <div className="content">
        <WrappedSignupForm signup={props.signup} />
      </div>
    </div>
  );
};

export default connect(
  null,
  { signup }
)(SignUpPage);
