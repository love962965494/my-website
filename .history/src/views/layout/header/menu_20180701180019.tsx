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
import { MenuList as MenuListConfig } from '../../../routes/config'

const styles = () =>
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

interface InterfaceMenu extends WithStyles<typeof styles> {}

class Menu extends Component<InterfaceMenu> {
  public render() {
    const { classes } = this.props
    return (
      <Paper className={classes.paper}>
        <MenuList className={classes.menuList}>
          {Object.keys(MenuListConfig).map(key => {
            const menuItem = MenuListConfig[key]
            return (
              <div key={key}>
                <Manager>
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
                </Manager>
              </div>
            )
          })}
        </MenuList>
      </Paper>
    )
  }
}

export default withStyles(styles)(Menu)
