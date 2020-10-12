import React from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import {redirect, pageLoaded} from '../../store/actions/utility'

class AuthenticationLayout extends React.Component{
    componentDidMount(){
        this.props.redirect(null)
        
    }

    componentDidUpdate(){
        if(Object.values(this.props.auth[0].sessionData).length !== 0 ){
            this.props.history.push('/')
        }
    }

    render() {
        return <>
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

const mapDispatchToProps = (dispatch) => ({
    redirect: (path) => dispatch(redirect(path)),
    pageLoaded: () => dispatch(pageLoaded())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthenticationLayout))