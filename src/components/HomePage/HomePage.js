import React, { Component } from 'react';

/* Imports */

/* Components */
import Heading from '../Heading.js'
import Page from '../Page/Page'

/* Stylesheets etc. */
import '../../fontawesome/css/all.css'
import { Link } from "react-router-dom"

/* Media */
import me from '../../photos/me_irl3_cropped.jpg'

// Main Page component
class HomePage extends Component {
  render() {
    return (
      <Page overflowHidden='true'>
        <div class="padder">
        </div>
        <div class="mainInfo">
          <Heading>Robbie Cook</Heading>
          <p>
            Hello! I'm a developer living in Auckland, New Zealand.
            I love swimming, Netflix, and coding.
                </p>
          <p>
            Check out my <Link to="/about">About</Link> page to find out more :)
                  </p>
          <div class="iconWrapper">
            <a href="https://github.com/Robbie-Cook"><i class="icon fab fa-github-square"></i></a>
            <a href="https://www.linkedin.com/in/robbie-cook/"><i class="icon fab fa-linkedin"></i></a>
            <div class="iconWrapper2">
              <a href="mailto:robbie@robbie.pw">
                <i class="icon fas fa-envelope-square"></i>
                <span>robbie@robbie.pw</span>
              </a>
            </div>

          </div>
        </div>
        <div class="fader">
          <div class="fadingElement">
          </div>
          <img src={me} style={{ height: '100%' }} />
        </div>
      </Page>
    );
  }
}

export default HomePage;
