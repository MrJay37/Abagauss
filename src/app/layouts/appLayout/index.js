import React from "react";
import {connect} from 'react-redux'
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import cookie from '../../../lib/cookies'
import { withRouter } from 'react-router-dom'
import { pageLoaded} from '../../store/actions/utility'

class AppLayout extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      path: this.props.history.location.pathname.split('/')
    }
  }
  componentDidMount(){
    const login = cookie.getCookie()
    if(!login){
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
  pageLoaded: () => dispatch(pageLoaded())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppLayout));
