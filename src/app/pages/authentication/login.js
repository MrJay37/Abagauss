import React from "react";
import AuthLayout from '../../layouts/authLayout'
import LoginPage from "../../modules/auth/LoginPage";

class Login extends React.Component {
  render() {
    return <AuthLayout><LoginPage /></AuthLayout>;
  }
}

export default Login;
