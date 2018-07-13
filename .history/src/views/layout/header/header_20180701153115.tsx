import Grid from '@material-ui/core/Grid'
import React, { Component } from 'react'

const styles = theme => ({})

export default class Header extends Component {
  public state = {
    direction: 'row',
    justify: 'center',
    alignItems: 'center'
  }

  public render() {
    const { classes } = this.props
    const { alignItems, direction, justify } = this.state
  }
}
