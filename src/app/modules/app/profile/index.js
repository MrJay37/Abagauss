import React from 'react'
import {connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import {withRouter } from 'react-router-dom'
import {changePassword} from '../../../store/actions/auth'
import { BiErrorCircle } from 'react-icons/bi'

const Profile = props => {
    const userInfo = props.auth.userInfo 
    const {register, handleSubmit, errors, setError, reset} = useForm()
    
    const onSubmit = (data) => {
        if(data.password !== data.confirmPassword){
            setError('confirmPassword', 'validate')
            return
        }
        props.changePassword(userInfo, data.oldPassword, data.password)
        reset()
    }

    return <div className="profileWrapper">
        <h1 className="profileHeader">Profile</h1>

        <div className="profileForm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="profileFormItem">
                    <div className="profileFormLabel"><label  htmlFor="userName">Username</label></div>
                    <input id="userName"
                        className="profileDisabledInput"
                        defaultValue={userInfo.username}
                        disabled
                    />
                </div>

                <div className="profileFormItem">
                    <div className="profileFormLabel"><label htmlFor="email">Email</label></div>
                    <input 
                        id="email"
                        className="profileDisabledInput"
                        defaultValue={userInfo.attributes && userInfo.attributes.email}
                        disabled
                    />
                </div>

                <div className="profileFormItem">
                    <div className="profileFormLabel"><label  htmlFor="oldPassword">Old Password</label></div>
                    <input
                        ref={register({required: true})}
                        name='oldPassword'
                        className="profileInput"
                        type="password"
                        id="oldPassword"
                    />
                    {errors.oldPassword && <BiErrorCircle className="errorIcon" />}
                </div>

                <div className="profileFormItem">
                    <div className="profileFormLabel"><label  htmlFor="Password">New Password</label></div>
                    <input 
                        ref={register({required: true})}
                        name="password"
                        id="Password"
                        className="profileInput"
                        type="password"
                    />
                    {errors.password && <BiErrorCircle className="errorIcon" />}
                </div>

                <div className="profileFormItem">
                    <div className="profileFormLabel"><label  htmlFor="confirmPassword">Confirm Password</label></div>
                    <input
                        ref={register({required: true})} 
                        name="confirmPassword"
                        id="confirmPassword"
                        className="profileInput"
                        type="password"
                    />
                    {errors.confirmPassword && <BiErrorCircle className="errorIcon" />}
                </div>

                <div className="buttonGroup">
                    <button className="SubmitButton">Change password</button>
                </div>
            </form>
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
    changePassword: (username, oldPassword, password) => dispatch(changePassword(username, oldPassword, password))
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))