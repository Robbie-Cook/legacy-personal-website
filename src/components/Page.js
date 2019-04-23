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
  & .fadingElement {
    width: 300px;
    position: absolute;
    height: 100%;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#0f0f0f+0,000000+100&1+13,1+13,0.84+51,0.03+98 */
    background: -moz-linear-gradient(left, rgba(15,15,15,1) 0%, rgba(13,13,13,1) 13%, rgba(7,7,7,0.84) 51%, rgba(0,0,0,0.03) 98%, rgba(0,0,0,0.03) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, rgba(15,15,15,1) 0%,rgba(13,13,13,1) 13%,rgba(7,7,7,0.84) 51%,rgba(0,0,0,0.03) 98%,rgba(0,0,0,0.03) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, rgba(15,15,15,1) 0%,rgba(13,13,13,1) 13%,rgba(7,7,7,0.84) 51%,rgba(0,0,0,0.03) 98%,rgba(0,0,0,0.03) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0f0f0f', endColorstr='#08000000',GradientType=1 ); /* IE6-9 */
  }
  

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
