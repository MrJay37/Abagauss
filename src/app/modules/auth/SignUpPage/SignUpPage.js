import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {signup} from '../../../store/actions/auth'
import {useForm} from 'react-hook-form'

const SignUpPage = (props) => {
    const {register, handleSubmit, errors, setError} = useForm({mode: 'onSubmit'})

    const onSubmit= async (data) => {
        if(data.password !== data.confirm_password){
            setError('confirm_password', 'validate')
            return
        }
        props.signUp(data.username, data.password, data.email, data.firstName, data.lastName)
    }

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="authFormEntryComponent">
            <div className="label">
              <label htmlFor="username">Username</label>
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
              <label htmlFor="emal">Email</label>
              {errors.email && <div className="loginErrorMessage">Email required!</div>}
            </div>
            <input 
              ref={register({required: true})}
              type="email"
              name="email"
              id="email" />
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

          <div className="authFormEntryComponent">
            <div className="label">
              <label htmlFor="confirm_password">Confirm Password</label>
    {errors.confirm_password && <div className="loginErrorMessage">{errors.confirm_password.type === "required" ? "Confirm password!" : "Passwords don't match!"}</div>}
               
            </div>
            <input 
              ref={register({required: true})}
              type="password"
              name="confirm_password"
              id="confirm_password" />
          </div>

          <div className="authForgotPassword">
            <div>Forgot password?</div>
          </div>

          <div className="SubmitButton">
              <button type="submit">Sign Up</button>
          </div>
          <div className="signUpLink"><Link to="/login">Already have an account? Sign in here!</Link></div>
        </form>
        </>
    )
}

const mapDispatchToProps = (dispatch) => ({
  signUp: (user, password, email) => dispatch(signup(user, password, email))
})

export default connect(null, mapDispatchToProps)(SignUpPage)