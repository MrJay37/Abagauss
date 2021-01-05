import React, { useState, useEffect } from 'react'
import {connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import {withRouter } from 'react-router-dom'
import {changePassword, getCurrentUserInfo} from '../../../store/actions/auth'
import { BiErrorCircle } from 'react-icons/bi'

const Profile = props => {
    const [ userInfo, setUserInfo ]  = useState({
        username: '',
        attributes: {
            email: ''
        }
    })

    useEffect(() => {
        if(props.auth.userInfo){
            setUserInfo(props.auth.userInfo)
        }
    }, [props.auth.userInfo])

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
        <div style={{display: 'flex'}}>
            <div className="profileForm">
                <h1 className="profileHeader">Profile</h1>
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

            <div className="profilePicture">
                <div className="profilePicBox">
                    <img src={require('../../../../static/media/images/utility/userAvatar.png')} alt="userAvatar" />
                </div>
                <div className="profilePicOptions">
                    <div className="menuOption" onClick={() => null}>
                        Change Picture
                    </div>
                    <div className="menuOption" onClick={() => null}>
                        Remove Picture
                    </div>
                </div>
            </div>
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
    getCurrentUserInfo: () => dispatch(getCurrentUserInfo()),
    changePassword: (username, oldPassword, password) => dispatch(changePassword(username, oldPassword, password))
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))