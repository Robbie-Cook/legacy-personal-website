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
    this.state = {loading: true};
  }

  getLoadingScreen(loading) {
    const LoadingScreen = styled.div`
      background-color: ${Colors.page.backgroundColor};
      position: absolute;
      top: 0;
      z-index: 100;
      height: 100%;
      display: flex;
      width: 100%;
    `
    if(loading) {
      return <LoadingScreen/>
    } 
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
    // Hide loading screen
    this.setState({loading: false})
  }
}

export default WebPage
