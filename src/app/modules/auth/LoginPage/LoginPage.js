import React, { useEffect } from "react";
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { signIn, initiateForgotPassword, cancelForgotPassword } from '../../../store/actions/auth'
import {useForm} from 'react-hook-form'

const LoginPage = (props) => {
  useEffect(() => {
    if(props.forgotPassword.requested){
      props.cancelForgotPassword()
    }
  })

  const {register, handleSubmit, errors} = useForm()

  const handleForgotPasswordClick =() => {
    props.initiateForgotPassword()
    props.history.push('/forgotpassword')
  }

  const onSubmit = (data) => {
    props.signIn(data.username, data.password)
  }

  return (
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="authFormEntryComponent">
            <div className="label">
              <label htmlFor="username">Username or Email</label>
              {errors.username && <div className="loginErrorMessage">Username required!</div>}
            </div>
            <input 
              ref={register({required: true})}
              type="text"
              name="username"
              id="username" 
            />
          </div>

          <div className="authFormEntryComponent">
            <div className="label">
              <label htmlFor="password">Password</label>
              {errors.password && <div className="loginErrorMessage">Password required!</div>}
            </div>
            <input 
              ref={register({required: true})}
              type="password"
              name="password"
              id="password" />
          </div>

          <div className="authForgotPassword">
            <div onClick={handleForgotPasswordClick}>Forgot password?</div>
          </div>

          <div className="SubmitButton">
              <button type="submit">Sign In</button>
          </div>
          <div className="signUpLink"><Link to="/signup">Don't have an account? Sign up for one here!</Link></div>
        </form>
        
  );
};
const mapStatetoProps = (state) => ({
  forgotPassword: state.auth.forgotPassword
})
const mapDispatchToProps = dispatch => ({
  signIn: (username, password) => dispatch(signIn(username, password)),
  initiateForgotPassword: () => dispatch(initiateForgotPassword()),
  cancelForgotPassword: () => dispatch(cancelForgotPassword())
})

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(LoginPage))

