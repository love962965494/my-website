import Grid from '@material-ui/core/Grid'
import { Theme, withStyles } from '@material-ui/core/styles'
import React, { Component } from 'react'

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1
  }
})

interface InterfaceHeader  {
  classes: object;
}

class Header extends Component<InterfaceHeader> {
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

export default withStyles(styles)(Header)