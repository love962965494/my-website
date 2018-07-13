import loginComponent from 'components/login'
import React, { Component } from 'react'

const { LoginForm } = loginComponent

export default class Login extends Component {
  public render() {
    return <LoginForm />
  }
}
