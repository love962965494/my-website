import { MenuItem, MenuList, Paper } from '@material-ui/core';
import React, { Component } from 'react'
import { Manager, Popper, Target } from 'react-popper';
import { InterfaceMenuItem } from 'routes/config';

interface InterfaceRenderMenuItem {
  menuItem: InterfaceMenuItem
}

export default class RenderMenuItem extends Component<InterfaceRenderMenuItem> {
  constructor(props: InterfaceRenderMenuItem) {
    super(props)
  }

  public render() {
    const { menuItem } = this.props

        if (menuItem.subs && menuItem.subs.length > 0) {
          return (
            <Manager>
              <Target>
                <MenuItem key={menuItem.id}>{menuItem.title}</MenuItem>
              </Target>
              <Popper>
                <Paper>
                  <MenuList>{menuItem.subs.map((subMenu) => (
                     <MenuItem key={subMenu.id}>{subMenu.title}</MenuItem>
                  ))}</MenuList>
                </Paper>
              </Popper>
            </Manager>
          )
        } else {
          return <MenuItem key={menuItem.id}>{menuItem.title}</MenuItem>
        }
      }
  }
}
