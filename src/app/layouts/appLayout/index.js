import React from "react";
import {connect} from 'react-redux'
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import {withRouter, Redirect} from 'react-router-dom'

class AppLayout extends React.Component {
  render() {
    return (
      <div>
        {this.props.auth.length === 0 && <Redirect to="/login" />}
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

export default withRouter(connect(mapStateToProps)(AppLayout));
