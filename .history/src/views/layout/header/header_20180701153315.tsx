import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
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

    return <Grid contaier={true} className={classes.root} />
  }
}
