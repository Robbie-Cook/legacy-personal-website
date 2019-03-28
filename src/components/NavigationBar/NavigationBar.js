/* 

Navigation Bar 

*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import styled from 'styled-components'
import Theme from '../../Theme.js'

import '../../css/bootstrap.min.css'
import './styles.css'

/*
Generate navigation items jsx array from given array of pages
*/
function generateNavItems(pages) {
  let pagesJSX = []
  pages.forEach(
    function (p) {
      // Mark the active page as active
      // Known issue -- works for mywebsite.com/about, but not mywebsite.com/about/
      let url = window.location.href
      let lastURL = url.substr(url.lastIndexOf("/"))
      let linkDetails = (lastURL === p.path) ? "nav-item active" : "nav-item";

      pagesJSX.push(
        <li class={linkDetails}>
          <Nav.Link>
            <Link class="nav-link" style={{ marginRight: 30 }} to={p.path}>{p.name}</Link>
          </Nav.Link>
        </li>
      )
    });
  return pagesJSX;
}

// Get theme
const theme = Theme.getTheme() 

/*
Styles for NavigationBar
*/
const NavWrapper = styled.div`

  // Mobile view 
  @media (max-width: ${theme.mobileSizeCutoff}) {
      height: auto!important;
      padding: 10px;
      border-bottom: 2px solid ${theme.navbar.borderColor}
  }
  
  height: ${theme.navbar.height}
  padding: ${theme.navbar.padding}

  & a:hover {
    color: ${theme.navbar.textColorHighlight}!important;
  }

  & .navbar-toggler-icon {
      background-image:none;
  }

  & .navbar-toggler {
    border-color ${theme.textColor}
  }


`;

// Code for responsive navbar
const NavItemsWrapper = styled.div`

    // Code for mobile styling
    @media (max-width: ${theme.mobileSizeCutoff}) {
      flex-direction: column;
      margin-left: 0;
    }

    display: flex;
    flex-direction: row;

    margin-left: ${theme.navbar.padding};

    & .nav-link {
      margin: 0;
      padding: 0;
      color: ${theme.navbar.textColor}!important;
      font-family: ${theme.navbar.font};
    }

    // Space between each navbar item
    & .nav-item {
      margin: 20px 0px 0 20px;
    }
`;

/* Replace the navigation bar logo with colored divs for more control */
function replaceNavIcon() {
  var navIconsWrapper = document.createElement("div");
  navIconsWrapper.className += "nav-icons-wrapper"
  for (let i = 0; i < 3; i++) {
    var navIcon = document.createElement("div")
    navIconsWrapper.appendChild(navIcon)
  }
  document.getElementsByClassName('navbar-toggler')[0].replaceChild(navIconsWrapper,
    document.getElementsByClassName('navbar-toggler-icon')[0])
}


class NavigationBar extends Component {
  componentDidMount() {
    replaceNavIcon()
  }
  render() {
    /* Navigation links passed through this.props.pages */
    return (
      <NavWrapper>
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavItemsWrapper>
                {
                  /*    Generate the nav items (e.g. Home, etc.)
                   */
                  generateNavItems(this.props.pages)
                }
              </NavItemsWrapper>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </NavWrapper>
    );
  }
}

export default NavigationBar;