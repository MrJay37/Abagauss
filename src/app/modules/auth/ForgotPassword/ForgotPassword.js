import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { forgotPassword } from '../../../store/actions/auth'

const ForgotPasswordPage = (props) => {
    const { register, handleSubmit, errors } = useForm()
    
    const  onSubmit = (data) => {
        props.forgotPasswordRequest(data.username)
    }
    
    useEffect(() => {
        if(!props.forgotPassword.requested){
            props.history.push('/login')
            }
        }
    )

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {!props.forgotPassword.codeSent 
            ? <>
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
                <div className="SubmitButton">
                    <button type="submit">Submit code</button>
                </div>
            </>
            : <>
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
                <div className="SubmitButton">
                    <button type="submit">Submit code</button>
                </div>
            </>}
        </form>
    )
}

const mapStateToProps = (state) => ({
    forgotPassword: state.auth.forgotPassword
})

const mapDispatchToProps = (dispatch) => ({
    forgotPasswordRequest: (username) => dispatch(forgotPassword(username))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordPage))