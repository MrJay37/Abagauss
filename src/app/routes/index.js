import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import AuthenticationRoutes from './authenticationRoutes'
import AppRoutes from './appRoutes'

const Routes = (props) => {
    return (
        <Router>
            <AppRoutes />
            <AuthenticationRoutes />
        </Router>
    )
}

export default Routes