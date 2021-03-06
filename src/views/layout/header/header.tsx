import { Grid } from '@material-ui/core'
import { GridProps } from '@material-ui/core/Grid'
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from '@material-ui/core/styles'
import React, { Component } from 'react'
import Menu from './menu/menu'

const styles = (theme: Theme) =>
  createStyles({
    demo: {
      height: 60
    },
    paper: {},
    root: {
      flexGrow: 1
    }
  })

interface InterfaceHeader extends WithStyles<typeof styles> {}

class Header extends Component<InterfaceHeader> {
  public state: GridProps = {
    alignItems: 'center',
    direction: 'row',
    justify: 'center'
  }

  public render() {
    const { classes } = this.props
    const { alignItems, direction, justify } = this.state

    return (
      <Grid container={true} className={classes.root}>
        <Grid item={true} xs={12}>
          <Grid
            container={true}
            spacing={16}
            className={classes.demo}
            alignItems={alignItems}
            direction={direction}
            justify={justify}
          >
            <Menu />
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Header)
