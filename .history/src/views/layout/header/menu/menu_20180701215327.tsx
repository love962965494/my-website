import { createStyles, MenuList, Paper, WithStyles } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import React, { Component } from 'react'
import { MenuList as MenuListConfig } from 'routes/config'
import MenuItem from './menuItem'

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
            return (
              <div key={key}>
                <MenuItem />
              </div>
            )
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
