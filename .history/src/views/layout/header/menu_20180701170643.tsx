import { createStyles, MenuItem, MenuList, Paper, WithStyles } from '@material-ui/core'
import React, { Component } from 'react'
import { MenuList as MenuListConfig } from '../../../routes/config'

const styles = () => createStyles({
  root: {}
})

interface InterfaceMenu extends WithStyles<typeof styles> {}

class Menu extends Component<InterfaceMenu> {
  public render() {
    return (
      <Paper>
        <MenuList>
          {MenuListConfig.map((value, index) => (
            <MenuItem key={index}>{value}</MenuItem>
          ))}
        </MenuList>
      </Paper>
    )
  }
}

export default withStyles(styles)(Menu)