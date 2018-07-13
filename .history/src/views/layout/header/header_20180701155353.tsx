import Grid from '@material-ui/core/Grid'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import React, { ClassicComponentClass, Component } from 'react'

const styles = theme => ({
  root: {
    flexGrow: 1
  }
})

interface InterfaceHeader  {
  classes: object;
}

class Header extends Component<WithStyles<keyof typeof styles> & InterfaceHeader> {
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
