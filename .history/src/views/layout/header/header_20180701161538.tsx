import { Grid } from '@material-ui/core'
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
    },
    demo: {
      height: 100
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
      <Grid container={true} className={classes.root}>
        <Grid item={true} xs={12} >
          <Grid container={true} spacing={16} className={classes.demo}></Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Header)
