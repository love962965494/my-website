import React, { Component } from 'react'

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
