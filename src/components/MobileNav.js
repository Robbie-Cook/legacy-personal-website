import React from "react"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"
import { Link } from "gatsby"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import Grow from "@material-ui/core/Grow"
import Paper from "@material-ui/core/Paper"
import Popper from "@material-ui/core/Popper"
import { withStyles } from "@material-ui/core/styles"
import Globals from "./Globals"
import styled from "styled-components"
import { Sizes as ViewSizes} from "./Views"
import Sizes from "./Sizes"

class MobileNav extends React.Component {
  constructor(props) {
    super(props)
    this.anchorEl = React.createRef()
    this.state = { open: false }

    // Bind 'this' to functions so functions can use 'this' keyword
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  // Generates the mobile menu
  generateMobileNav() {
    let array = []
    const StyledMenuItem = styled(MenuItem)`
      font-weight: bold;
      &.active {
          color: ${Globals.link.color};
      }
    `
    this.props.pages.map(item =>
      array.push(
        <StyledMenuItem
          onClick={this.handleToggle}
          component={Link}
          to={item.path}
          activeClassName={"active"}
        >
          {item.name}
        </StyledMenuItem>
      )
    )
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
    /* CSS */
    const StyledIconButton = withStyles({
      root: {
        // Not ideal, should be done with breakpoints in theme
        // re: https://stackoverflow.com/questions/45847090/media-queries-in-material-ui-components
        [`@media (min-width:${ViewSizes.mobileSize}px)`]: {
          display: "none",
        },
      },
    })(IconButton)

    const StyledMenuList = withStyles({
      root: {
        // Not ideal, should be done with breakpoints in theme
        // re: https://stackoverflow.com/questions/45847090/media-queries-in-material-ui-components
        [`@media (min-width:${ViewSizes.mobileSize}px)`]: {
          display: "none",
        },
        marginTop: Sizes.navbar.height,
      },
    })(MenuList)

    return (
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
                    <StyledMenuList>{this.generateMobileNav()}</StyledMenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    )
  }
}

export default MobileNav
