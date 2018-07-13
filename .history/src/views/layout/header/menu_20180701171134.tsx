import {
  createStyles,
  MenuItem,
  MenuList,
  Paper,
  WithStyles
} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import React, { Component } from 'react'
import { MenuList as MenuListConfig } from '../../../routes/config'

const styles = () =>
  createStyles({
    root: {
      display: 'flex'
    }
  })

interface InterfaceMenu extends WithStyles<typeof styles> {}

class Menu extends Component<InterfaceMenu> {
  public render() {
    const { classes } = this.props
    return (
      <Paper>
        <MenuList className={classes.root}>
          {MenuListConfig.map((value, index) => (
            <MenuItem key={index}>{value}</MenuItem>
          ))}
        </MenuList>
      </Paper>
    )
  }
}

export default withStyles(styles)(Menu)
