import React, { useState } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import { Link } from "gatsby"
import { withStyles } from "@material-ui/core/styles"
import Theme from "./Theme"
import styled from "styled-components"
import MobileNav from "./MobileNav"

const theme = Theme

class NavigationBar extends React.Component {
  constructor(props) {
    super(props)
  }

  // Generate the links to other pages in the normal menu
  generateNav() {
    let array = []
    const StyledTab = styled(Tab)`
      font-weight: bold;

      &.active {
        color: ${theme.navbar.activeLinkColor};
      }
    `

        this.props.pages.map((item) => {
      // If the current URL is the same as the item path, mark Tab as active
      array.push(
        <StyledTab label={item.name} to={item.path} component={Link}
         activeClassName={"active"}/>
      )
    })
    return array
  }

  render() {
    /* CSS */
    const StyledAppBar = withStyles({
      root: {
        backgroundColor: theme.backgroundColor,
      },
    })(AppBar)

    const StyledTabs = withStyles({
      root: {
        // Not ideal, should be done with breakpoints in theme
        // re: https://stackoverflow.com/questions/45847090/media-queries-in-material-ui-components
        [`@media (max-width:${theme.mobile.cutOff - 1}px)`]: {
          display: "none",
        },
      },
    })(Tabs)

    return (
      <StyledAppBar position="static" color="primary" colorPrimary>
        <Toolbar>
          <MobileNav pages={this.props.pages} />
          <StyledTabs>{this.generateNav()}</StyledTabs>
        </Toolbar>
      </StyledAppBar>
    )
  }
}

export default NavigationBar
