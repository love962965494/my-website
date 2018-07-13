import {
  createStyles,
  MenuItem,
  MenuList,
  Paper,
  WithStyles
} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import React, { Component } from 'react'
import { Manager, Popper, Target } from 'react-popper'
import {
  InterfaceMenuItem,
  MenuList as MenuListConfig
} from '../../../../routes/config'

const stylesOfMenu = () =>
  createStyles({
    menuList: {
      display: 'flex'
    },
    paper: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: '100%'
    }
  })

interface InterfaceMenu extends WithStyles<typeof stylesOfMenu> {}

// const stylesOfMenuItem = () => createStyles({})

function renderMenuItem(menuItem: InterfaceMenuItem): any {
  if (menuItem.subs && menuItem.subs.length > 0) {
    return (
      <Manager>
        <Target>
          <MenuItem key={menuItem.id}>{menuItem.title}</MenuItem>
        </Target>
        <Popper>
          <Paper>
            <MenuList>{menuItem.subs.map(renderMenuItem)}</MenuList>
          </Paper>
        </Popper>
      </Manager>
    )
  } else {
    return <MenuItem key={menuItem.id}>{menuItem.title}</MenuItem>
  }
}

class Menu extends Component<InterfaceMenu> {
  public state = {
    anchorEl: null,
    popperOpen: false
  }

  public handlePopoverOpen = (event: Event): void => {
    this.setState({ anchorEl: event.target })
  }

  public handlePopoverClose = (): void => {
    this.setState({ anchorEl: null })
  }

  public handlePopperOpen = () => {
    this.setState({ popperOpen: true })
  }

  public handlePopperClose = () => {
    this.setState({ popperOpen: false })
  }

  public render() {
    const { classes } = this.props
    return (
      <Paper className={classes.paper}>
        <MenuList className={classes.menuList}>
          {Object.keys(MenuListConfig).map(key => {
            const menuItem = MenuListConfig[key]
            return <div key={key}>{renderMenuItem(menuItem)}</div>
          })}
        </MenuList>
      </Paper>
    )
  }
}

export default withStyles(stylesOfMenu)(Menu)

{
  /* <Manager>
<Target>
  <MenuItem key={key}>{menuItem.title}</MenuItem>
</Target>
<Popper>
  <Paper>
    {menuItem.subs &&
      menuItem.subs.length > 0 && (
        <MenuList>
          {menuItem.subs.map(subMenu => (
            <MenuItem key={subMenu.id}>
              {subMenu.title}
            </MenuItem>
          ))}
        </MenuList>
      )}
  </Paper>
</Popper>
</Manager> */
}
