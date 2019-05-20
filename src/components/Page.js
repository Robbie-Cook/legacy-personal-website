// Root container for a page

/* Imports */
/* Stylesheets etc. */
import "../css/global-styles.css"
import React, { Component } from "react"
import styled from "styled-components"
import Theme from "./Theme"
import NavigationBar from "./NavigationBar"
import MyLink from "./MyLink"
import MyHelmet from "./MyHelmet"

// Styles for component
const StyledPage = styled.div`
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
  constructor(props) {
    super(props);
    this.state = {loading: true};
  }

  getLoadingScreen() {
    const LoadingScreen = styled.div`
      background-color: red;
      position: absolute;
      top: 0;
      height: 100%;
      display: flex;
      width: 100%;
    `
    return <LoadingScreen/>
  }

  render() {
    return (
      <React.Fragment>
        {this.getLoadingScreen(this.state.loading)}
        <MyHelmet /> {/* SEO Stuff */}
        <div>
          <NavigationBar pages={navigationLinks} />
          <div style={this.props.style}>
            <StyledPage style={this.props.style}>
              {this.props.children}
            </StyledPage>
          </div>
        </div>
      </React.Fragment>
    )
  }
  componentDidMount() {
    // Hide loading screeen
    // Loading screen defined in index.html
  }
}

export default WebPage
