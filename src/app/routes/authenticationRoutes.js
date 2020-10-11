import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { Authentication } from '../pages'

export default function AuthenticationRoutes() {
    return (
        <Switch>
            <Route path="/login" exact component={Authentication.Login} />
            <Route path="/signup" exact component={Authentication.SignUp} />
        </Switch>
    )
}
