import React from 'react'
import { HashRouter as Router, Redirect } from "react-router-dom";
import { Utility } from '../pages'
import AuthenticationRoutes from './authenticationRoutes'
import AppRoutes from './appRoutes'

const Routes = (props) => {
    
    return (
        <Router>
            {props.utility.loading && <Utility.Spinner />}
            {props.utility.redirect && <Redirect to={props.utility.redirect} />}
            <AppRoutes />
            <AuthenticationRoutes />
        </Router>
    )
}

export default Routes