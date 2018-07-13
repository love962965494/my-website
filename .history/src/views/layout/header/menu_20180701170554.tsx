import { createStyles, MenuItem, MenuList, Paper } from '@material-ui/core'
import React, { Component } from 'react'
import { MenuList as MenuListConfig } from '../../../routes/config'

const styles = () => createStyles({
  root: {}
})

export default class Menu extends Component {
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
