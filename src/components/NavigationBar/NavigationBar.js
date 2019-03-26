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
    this.navTextColor = '#dcd6ce'
    this.navTextHighlightColor = '#6385a9'
    this.navFont = '\'Roboto Slab\', sans-serif'
  }
}
let theme = new Theme()

/*
Styles for NavigationBar
*/
const NavWrapper = styled.div`
  & a {
    color: ${theme.navTextColor}!important;
    font-family: ${theme.navFont};
  }

  & a:hover {
    color: ${theme.navTextHighlightColor}!important;
  }
`;

class NavigationBar extends Component {
  render() {
    /* Navigation links passed through this.props.pages */
    return (
      <NavWrapper>
        <Navbar bg="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {
                /*    Generate the nav items (e.g. Home, etc.)
                 */
                generateNavItems(this.props.pages)
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </NavWrapper>
    );
  }
}

export default NavigationBar;