import React from 'react'
import {withRouter, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

class AuthenticationLayout extends React.Component{
    render() {
        return <>
            {this.props.auth.length !== 0 && <Redirect to="/" />}
            <div className="authPageWrapper">
                {/* <div className="backgroundImage">
                    <img src={require('../../../static/media/images/abagauss/background.JPG')} alt="background image" />
                </div> */}
        <div className="LogoGreeting">
            <img  className="authPageLogo" alt="Logo" src={require('../../../static/media/images/abagauss/AbagaussNoTitle.jpg')} />
            <div className="authPageGreeting">Welcome Back</div>
        </div>
        <div className="authBox">  
            {this.props.children}
        </div>
        </div>
        </>
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default withRouter(connect(mapStateToProps)(AuthenticationLayout))