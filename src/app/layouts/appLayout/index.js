import React from "react";
import {connect} from 'react-redux'
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import {getCurrentUserInfo, getCurrentSessionInfo} from '../../store/actions/auth'
import {withRouter} from 'react-router-dom'
import {redirect, pageLoaded} from '../../store/actions/utility'

class AppLayout extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      path: this.props.history.location.pathname.split('/')
    }
  }
  componentDidMount(){
    this.props.redirect(null)
    if(!this.props.auth.sessionData) this.props.getCurrentSessionInfo()
    if(!this.props.auth.userInfo) this.props.getCurrentUserInfo()
    const login = localStorage.getItem('__abagaussUser')
    if(login === 'false'){
      this.props.history.push('/login')
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.path[1] !== 'profile' && <Sidebar />}
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  getCurrentUserInfo: () => dispatch(getCurrentUserInfo()),
  getCurrentSessionInfo: () => dispatch(getCurrentSessionInfo()),
  redirect: (path) => dispatch(redirect(path)),
  pageLoaded: () => dispatch(pageLoaded())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppLayout));
