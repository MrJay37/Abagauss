import React from "react";
import {connect} from 'react-redux'
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import {withRouter} from 'react-router-dom'

class AppLayout extends React.Component {
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

export default withRouter(connect(mapStateToProps)(AppLayout));
