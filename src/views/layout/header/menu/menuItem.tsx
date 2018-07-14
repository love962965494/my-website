import { Grow, MenuItem, MenuList, Paper } from '@material-ui/core'
import React, { Component } from 'react'
import { Manager, Popper, Target } from 'react-popper'
import { IMenuItem } from 'routes/config'

interface InterfaceRenderMenuItem {
  popperOpen: boolean
  menuItem: IMenuItem
  onPopperChange: (state: boolean) => void
}

export default class RenderMenuItem extends Component<InterfaceRenderMenuItem> {
  constructor(props: InterfaceRenderMenuItem) {
    super(props)
  }

  public handlePopperOpen = () => {
    this.props.onPopperChange(true)
  }

  public handlePopperClose = () => {
    this.props.onPopperChange(false)
  }

  public render() {
    const { menuItem, popperOpen } = this.props

    if (menuItem.subs && menuItem.subs.length > 0) {
      return (
        <Manager>
          <Target>
            <MenuItem
              onMouseOver={this.handlePopperOpen}
              onMouseOut={this.handlePopperClose}
              key={menuItem.id}
            >
              {menuItem.title}
            </MenuItem>
          </Target>
          <Popper eventsEnabled={popperOpen}>
            <Grow in={popperOpen}>
              <Paper aria-hidden={!popperOpen}>
                <MenuList>
                  {menuItem.subs.map(subMenu => (
                    <MenuItem key={subMenu.id}>{subMenu.title}</MenuItem>
                  ))}
                </MenuList>
              </Paper>
            </Grow>
          </Popper>
        </Manager>
      )
    } else {
      return <MenuItem key={menuItem.id}>{menuItem.title}</MenuItem>
    }
  }
}
