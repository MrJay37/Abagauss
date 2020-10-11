import React from 'react'
import AuthLayout from '../../layouts/authLayout'
import SignUpPage from "../../modules/auth/SignUpPage";

class SignUp extends React.Component {
  render() {
    return <AuthLayout><SignUpPage /></AuthLayout>;
  }
}

export default SignUp;
