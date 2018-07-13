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
    menuList: {
      display: 'flex'
    },
    paper: {
      display: 'flex',
      justify: 'center',
      width: '100%',
      height: '100%'
    }
  })

interface InterfaceMenu extends WithStyles<typeof styles> {}

class Menu extends Component<InterfaceMenu> {
  public render() {
    const { classes } = this.props
    return (
      <Paper className={classes.paper}>
        <MenuList className={classes.menuList}>
          {MenuListConfig.map((value, index) => (
            <MenuItem key={index}>{value}</MenuItem>
          ))}
        </MenuList>
      </Paper>
    )
  }
}

export default withStyles(styles)(Menu)
