import React from "react";
import Routes from './routes'
import { connect } from 'react-redux'
import "../static/styles/index.scss";
import Amplify, { Auth } from 'aws-amplify'
import {AWSConfig} from '../lib/aws/awsconfig'
import {storeUser } from './store/actions/auth'

Amplify.configure(AWSConfig)

class App extends React.Component {
  async componentDidMount() {
    try {
      const response = await Auth.currentSession()
      this.props.storeSession(response)
    } catch(error) {
      
    }
  }
  render() {
    return (<Routes />);
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  storeSession: (session) => dispatch(storeUser(session))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
