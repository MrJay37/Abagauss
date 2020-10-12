import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Home, Profile} from '../pages'

export default function AppRoutes () {
    return <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/profile" exact={true} component={Profile} />
    </Switch>
}