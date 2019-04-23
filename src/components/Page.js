// Container that takes a whole page

import React, { Component } from "react"
import styled from "styled-components"
import Theme from "./Theme"
import "../css/global-styles.css"
import NavigationBar from "./NavigationBar"
import MyLink from './MyLink'
/* Imports */
/* Stylesheets etc. */

// Get theme
const theme = Theme.getTheme()

// Styles for component
const StyledPage = styled.div`
  //  Overwrite bootstrap for containers
  background-color: ${theme.backgroundColor};

  & .container {
    max-width: none;
    padding: 0;
    margin: 0;
  }

  & p {
    margin: 10px 0;
  }

  display: flex;
  flex-direction: row;
  padding: ${theme.page.padding};

  // Mobile styles
  @media (max-width: ${theme.mobile.cutOff}px) {
    flex-direction: column;
    padding: ${theme.mobile.padding};
  }
`

// Links
let navigationLinks = [
  new MyLink("Home", "/"),
  new MyLink("About", "/about"),
  new MyLink("Music", "/music"),
]

// Main Page component
class Page extends Component {
  render() {
    return (
      <div>
        <NavigationBar pages={navigationLinks}></NavigationBar>
        <div style={this.props.style}>
          <StyledPage>{this.props.children}</StyledPage>
        </div>
      </div>
    )
  }
}

export default Page;
