// Root container for a page

/* Imports */
/* Stylesheets etc. */
import "../css/global-styles.css"
import React, { Component } from "react"
import styled from "styled-components"
import Theme from "./Theme"
import NavigationBar from "./NavigationBar"
import MyLink from "./MyLink"
import MyHelmet from './MyHelmet'

// Styles for component
const StyledPage = styled.div`
  //  Overwrite bootstrap for containers

  background-color: ${Theme.page.backgroundColor};

  display: flex;
  flex-direction: row;
  padding: ${Theme.page.padding};

  // Mobile styles
  @media (max-width: ${Theme.mobile.size}px) {
    flex-direction: column;
    padding: ${Theme.mobile.padding};
  }
`

/* Navigation links, which are passed to navbar.js */
let navigationLinks = [
  new MyLink("Home", "/"),
  new MyLink("About", "/about"),
  new MyLink("Music", "/music"),
  new MyLink("Projects", "/projects"),
]

// Main Page component
class WebPage extends Component {
  render() {
    return (
      <div>
        <MyHelmet />  {/* SEO Stuff */}
        <div>
          <NavigationBar pages={navigationLinks} />
          <div style={this.props.style}>
            <StyledPage style={this.props.style}>{this.props.children}</StyledPage>
          </div>
        </div>
      </div>
    )
  }
}

export default WebPage
