/* 

Navigation Bar 

*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import styled from 'styled-components'

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

/*
 Temporary theme styles
 TODO: Move to context for whole site
*/
class Theme {
  constructor() {
    this.textColor = '#dcd6ce'

    // Navbar styles
    this.navbar = {
      height: '56px',
      textColor: this.textColor,
      textColorHighlight: '#6385a9',
      font: '\'Roboto Slab\', sans-serif',
      padding: '10px 0 0 30px'
    }
    this.mobileSizeCutoff = '992px' // Has to be the same as bootstrap's breakpoint
  }
}
let theme = new Theme()

/*
Styles for NavigationBar
*/
const NavWrapper = styled.div`

  // Media queries 
  @media (max-width: ${theme.mobileSizeCutoff}) {
      height: auto!important;
  }

  height: ${theme.navbar.height}
  padding: ${theme.navbar.padding}
  & a {
    color: ${theme.navbar.textColor}!important;
    font-family: ${theme.navbar.font};
  }

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

    @media (max-width: ${theme.mobileSizeCutoff}) {
      flex-direction: column;
    }

    display: flex;
    flex-direction: row;

    & .nav-link {
      margin-right: 10px!important
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