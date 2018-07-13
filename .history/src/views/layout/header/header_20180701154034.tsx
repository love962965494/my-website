import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import React, { Component, StatelessComponent } from 'react'

const styles = theme => ({
  root: {
    flexGrow: 1
  }
})

interface InterfaceHeader extends StatelessComponent {
  classes: string;
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
