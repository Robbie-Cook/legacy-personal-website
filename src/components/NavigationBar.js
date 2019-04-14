import React, { useState } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import { Link } from "gatsby"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import Grow from "@material-ui/core/Grow"
import Paper from "@material-ui/core/Paper"
import Popper from "@material-ui/core/Popper"
import { withStyles } from "@material-ui/core/styles"
import Theme from "./Theme"

const theme = Theme.getTheme()

class NavigationBar extends React.Component {
  constructor(props) {
    super(props)
    this.anchorEl = React.createRef()
    this.state = { open: false }

    // Bind 'this' to functions so functions can use 'this' keyword
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  // Generate the links to other pages
  // passed in via props.pages
  generateNavItems() {
    let array = []
    this.props.pages.map((item) =>
     (array.push(<Tab label={item.name} to={item.path} component={Link} />)));
    return array
  }

  generateNavMenuItems() {
    let array = []
    for (let item of this.props.pages) {
      array.push(
        <MenuItem onClick={this.handleToggle} component={Link} to={item.path}>
          {item.name}
        </MenuItem>
      )
    }
    return array
  }

  // Toggle 'open' state of navmenu
  handleToggle() {
    this.setState(prevState => ({
      open: !prevState.open,
    }))
  }

  handleClose(event) {
    if (this.anchorEl.current.contains(event.target)) {
      return
    }
    this.setState({ open: false })
  }

  render() {
    // CSS Overrides for AppBar e.g. Change color
    const StyledAppBar = withStyles({
      root: {
        backgroundColor: theme.backgroundColor,
      },
    })(AppBar)

    const StyledIconButton = withStyles({
      root: {
        // Not ideal, should be done with breakpoints in theme
        // re: https://stackoverflow.com/questions/45847090/media-queries-in-material-ui-components
        [`@media (min-width:${theme.mobile.cutOff}px)`]: {
          display: "none",
        },
      },
    })(IconButton)

    const StyledTabs = withStyles({
      root: {
        // Not ideal, should be done with breakpoints in theme
        // re: https://stackoverflow.com/questions/45847090/media-queries-in-material-ui-components
        [`@media (max-width:${theme.mobile.cutOff - 1}px)`]: {
          display: "none",
        },
      },
    })(Tabs)

    const StyledMenuList = withStyles({
      root: {
        // Not ideal, should be done with breakpoints in theme
        // re: https://stackoverflow.com/questions/45847090/media-queries-in-material-ui-components
        [`@media (min-width:${theme.mobile.cutOff - 1}px)`]: {
          display: "none",
        },
      },
    })(MenuList)

    return (
      <StyledAppBar position="static" color="primary" colorPrimary>
        <Toolbar>
          <div>
            <div>
              <StyledIconButton
                buttonRef={this.anchorEl}
                aria-owns={this.state.open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                aria-label="Menu"
                color="inherit"
                onClick={this.handleToggle}
              >
                <MenuIcon />
              </StyledIconButton>
              <Popper
                open={this.state.open}
                anchorEl={this.anchorEl.current}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    id="menu-list-grow"
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={this.handleClose}>
                        <StyledMenuList>
                          {this.generateNavMenuItems()}
                        </StyledMenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </div>
          <StyledTabs>{this.generateNavItems()}</StyledTabs>
        </Toolbar>
      </StyledAppBar>
    )
  }
}

export default NavigationBar
