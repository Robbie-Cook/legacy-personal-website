/* 

Navigation Bar 

*/
import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import '../css/navbar-styles.css';
// TODO: Convert to react-bootstrap
//import '../bootstrap/jquery.min.js'
//import '../bootstrap/js/bootstrap.min.js'

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        {
            /*
                Using a tags because Link tags don't work outside a router
            */
        }
        <li class="nav-item active">
          <a class="nav-link" href="/music">Music<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="/cv">CV<span class="sr-only">(current)</span></a>
        </li>
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