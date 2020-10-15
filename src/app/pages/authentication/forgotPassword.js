import React from "react";
import AuthLayout from '../../layouts/authLayout'
import ForgotPasswordPage from "../../modules/auth/ForgotPassword";

class ForgotPassword extends React.Component {
  render() {
    return <AuthLayout><ForgotPasswordPage /></AuthLayout>;
  }
}

export default ForgotPassword;
