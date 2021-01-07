import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import cookie from '../../../lib/cookies'
import { pageLoaded} from '../../store/actions/utility'

class AuthenticationLayout extends React.Component{
    componentDidMount(){
        const login = cookie.getCookie()
        if(login){
            this.props.history.push('/')
        }
    }

    render() {
        return <>
            <div className="authPageWrapper">
                {/* <div className="backgroundImage">
                    <img src={require('../../../static/media/images/abagauss/background.JPG')} alt="background image" />
                </div> */}
        <Link to="/login">
            <div className="LogoGreeting">
                <img  className="authPageLogo" alt="Logo" src={require('../../../static/media/images/abagauss/AbagaussNoTitle.jpg')} />
                <div className="authPageGreeting">Welcome Back</div>
            </div>
        </Link>
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

const mapDispatchToProps = (dispatch) => ({
    pageLoaded: () => dispatch(pageLoaded())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthenticationLayout))