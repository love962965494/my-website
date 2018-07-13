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

  public handlePopoverChange = (target: EventTarget | null): void => {
    this.setState({ anchorEl: target })
  }

  public handlePopperChange = (state: boolean) => {
    this.setState({ popperOpen: state })
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
                <MenuItem
                  menuItem={menuItem}
                  onPopoverChange={this.handlePopoverChange}
                  onPopperChange={this.handlePopperChange}
                />
              </div>
            )
          })}
        </MenuList>
      </Paper>
    )
  }
}

export default withStyles(stylesOfMenu)(Menu)
