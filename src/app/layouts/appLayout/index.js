import React from "react";
import {connect} from 'react-redux'
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import {withRouter} from 'react-router-dom'
import {redirect, pageLoaded} from '../../store/actions/utility'

class AppLayout extends React.Component {
  componentDidMount(){
    this.props.redirect(null)
  }
  
  componentDidUpdate(){
    if(Object.values(this.props.auth[0].sessionData).length === 0 ){
      this.props.history.push('/login')
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  redirect: (path) => dispatch(redirect(path)),
  pageLoaded: () => dispatch(pageLoaded())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppLayout));
