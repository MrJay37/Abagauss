import React from 'react'
import {connect } from 'react-redux'
import {withRouter } from 'react-router-dom'
import {changePassword} from '../../../store/actions/auth'

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.oldpw = React.createRef()
        this.newpw = React.createRef()
        this.confpw = React.createRef()
    }

    componentDidUpdate(){
        
    }
    render(){
        const userInfo = this.props.auth[0].userInfo 

        return <div className="profileWrapper">
            <h1 className="profileHeader">Profile</h1>

            <div className="profileForm">
                <form onSubmit={(evt) => {
                    evt.preventDefault()
                    console.log(this.oldpw.current.value.length)
                    console.log(this.newpw.current.value)
                    console.log(this.confpw.current.value)
                }}>
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
                            ref={this.oldpw}
                            className="profileInput"
                            type="password"
                            id="oldPassword"
                        />
                    </div>

                    <div className="profileFormItem">
                        <div className="profileFormLabel"><label  htmlFor="Password">New Password</label></div>
                        <input 
                            ref={this.newpw}
                            id="Password"
                            className="profileInput"
                            type="password"
                        />
                    </div>

                    <div className="profileFormItem">
                        <div className="profileFormLabel"><label  htmlFor="confirmPassword">Confirm Password</label></div>
                        <input 
                            ref={this.confpw}
                            id="confirmPassword"
                            className="profileInput"
                            type="password"
                        />
                    </div>

                    <div className="buttonGroup">
                        <button className="SubmitButton">Change password</button>
                    </div>
                </form>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
    changePassword: (username, oldPassword, password) => dispatch(changePassword(username, oldPassword, password))
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))