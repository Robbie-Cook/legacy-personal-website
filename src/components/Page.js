// Root container for a page

/* Imports */
/* Stylesheets etc. */
import "../css/global-styles.css"
import React, { Component } from "react"
import styled from "styled-components"
import Colors from "./Colors"
import NavigationBar from "./NavigationBar"
import MyLink from "./MyLink"
import MyHelmet from "./MyHelmet"
import { MobileView } from "./Views"
import Dimensions from "./Dimensions"

// Styles for component
const StyledPage = styled.div`
  background-color: ${Colors.page.backgroundColor};

  display: flex;
  flex-direction: row;
  padding: ${new Dimensions(40, 90, 0, 90)};

  // Mobile styles
  ${new MobileView(`
    flex-direction: column;
    padding: ${new Dimensions(20, 30)}; 
  `)}
`

/* Navigation links, which are passed to navbar.js */
let navigationLinks = [
  new MyLink("Home", "/"),
  new MyLink("About", "/about"),
  new MyLink("Projects", "/projects"),
  new MyLink("Music", "/music"),
]

// Main Page component
class WebPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <MyHelmet /> {/* SEO Stuff */}
        <div>
          <NavigationBar pages={navigationLinks} />
          <div style={this.props.style}>
            <StyledPage style={this.props.style}>
              {this.props.children}
            </StyledPage>
          </div>
        </div>
      </>
    )
  }
}

export default WebPage
