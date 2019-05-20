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
        color: ${Theme.link.color};
      }
    `

    this.props.pages.map(item => {
      // If the current URL is the same as the item path, mark Tab as active
      array.push(
        <StyledTab
          label={item.name}
          to={item.path}
          component={Link}
          activeClassName={"active"}
        />
      )
    })
    return array
  }

  render() {
    /* CSS */
    const StyledAppBar = withStyles({
      root: {
        backgroundColor: Theme.backgroundColor,
      },
    })(AppBar)

    const StyledTabs = withStyles({
      root: {
        // Not ideal, should be done with breakpoints in Theme
        // re: https://stackoverflow.com/questions/45847090/media-queries-in-material-ui-components
        [`@media (max-width:${Theme.mobile.size - 1}px)`]: {
          display: "none",
        },
      },
    })(Tabs)

    const StyledToolbar = styled(Toolbar)`
        z-index: 150
    `

    return (
      <StyledAppBar position="static" color="primary" colorPrimary>
        <StyledToolbar>
          <MobileNav pages={this.props.pages} />
          <StyledTabs>{this.generateNav()}</StyledTabs>
        </StyledToolbar>
      </StyledAppBar>
    )
  }
}

export default NavigationBar
