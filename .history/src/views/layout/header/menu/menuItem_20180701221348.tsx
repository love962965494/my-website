import { MenuItem, MenuList, Paper  } from '@material-ui/core'
import React, { Component } from 'react'
import { Manager, Popper, Target } from 'react-popper'
import { InterfaceMenuItem } from 'routes/config'

interface InterfaceRenderMenuItem {
  menuItem: InterfaceMenuItem
  onPopoverChange: (event: EventTarget | null) => void
  onPopperChange: (state: boolean) => void
}

export default class RenderMenuItem extends Component<InterfaceRenderMenuItem> {
  constructor(props: InterfaceRenderMenuItem) {
    super(props)
  }

  public handlePopoverOpen = (event: MouseEvent<HTMLElement>): void => {
    this.props.onPopoverChange(event.target)
  }

  public handlePopoverClose = (): void => {
    this.props.onPopoverChange(null)
  }

  public handlePopperOpen = () => {
    this.props.onPopperChange(true)
  }

  public handlePopperClose = () => {
    this.props.onPopperChange(false)
  }

  public render() {
    const { menuItem } = this.props

    if (menuItem.subs && menuItem.subs.length > 0) {
      return (
        <Manager>
          <Target>
            <MenuItem onMouseOver={this.handlePopoverOpen} key={menuItem.id}>{menuItem.title}</MenuItem>
          </Target>
          <Popper>
            <Paper>
              <MenuList>
                {menuItem.subs.map(subMenu => (
                  <MenuItem key={subMenu.id}>{subMenu.title}</MenuItem>
                ))}
              </MenuList>
            </Paper>
          </Popper>
        </Manager>
      )
    } else {
      return <MenuItem key={menuItem.id}>{menuItem.title}</MenuItem>
    }
  }
}
