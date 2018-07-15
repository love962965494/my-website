import Page404 from 'components/errorPages/404';
import React, { Component } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './Login'

const redirectToDashboard = () => <Redirect to="app/dashboard" />

export default class Page extends Component {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" render={redirectToDashboard} />
          <Route path="/app" component={App} />
          <Route path="/login" component={Login} />
          <Route component={Page404} />
        </Switch>
      </BrowserRouter>
    )
  }
}
