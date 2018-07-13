import Grid from '@material-ui/core/Grid'
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from '@material-ui/core/styles'
import React, { Component } from 'react'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    }
  })

interface InterfaceHeader extends WithStyles<typeof styles> {}

class Header extends Component<InterfaceHeader> {
  public state = {
    direction: 'row',
    justify: 'center',
    alignItems: 'center'
  }

  public render() {
    const { classes } = this.props
    const { alignItems, direction, justify } = this.state

    return (
      <Grid contaier={true} className={classes.root}>
        <Grid item={true} xs={12} />
      </Grid>
    )
  }
}

export default withStyles(styles)(Header)
