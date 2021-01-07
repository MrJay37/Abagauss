import React from "react";
import Routes from './routes'
import { connect } from 'react-redux'
import "../static/styles/index.scss";

class App extends React.Component {
  componentDidMount(){

  }
  
  render() {
    return (<Routes {...this.props}/>);
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  utility: state.utility
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App);
