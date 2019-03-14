/* 

Navigation Bar 

*/
import React, { Component } from 'react';
import '../css/navbar-styles.css';
import {Link} from 'react-router-dom'
// TODO: Convert to react-bootstrap
//import '../bootstrap/jquery.min.js'
//import '../bootstrap/js/bootstrap.min.js'

class Navbar extends Component {  
    render() {
        /* Navigation links passed through props */
        let pages = this.props.pages
        return (
          <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <Link class="navbar-brand" to="/"></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav mr-auto">
              {
                /* 
                Generate the nav items (e.g. Home, etc.)
                */
                function() {
                  let pagesJSX = []
                  pages.forEach(
                    function(p) {
                      // Mark the active page as active
                      // Known issue -- works for mywebsite.com/about, but not mywebsite.com/about/
                      let url = window.location.href
                      let lastURL = url.substr(url.lastIndexOf("/"))
                      let linkDetails = (lastURL === p.path) ? "nav-item active" : "nav-item";

                      pagesJSX.push(
                        <li class={linkDetails}>
                          <Link class="nav-link" to={p.path}>{p.name}</Link>
                        </li>
                      )
                });
                  return pagesJSX
                }()
              }
                {/* <li class="nav-item active">
                  <Link class="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/music">Music<span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/cv">CV<span class="sr-only">(current)</span></Link>
                </li> */}
                {/*}<li class="nav-item">
                  <a class="nav-link" href="#">Projects</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
                </li>*/}
              </ul>
            </div>
          </nav>
        );
    }
}

export default Navbar;