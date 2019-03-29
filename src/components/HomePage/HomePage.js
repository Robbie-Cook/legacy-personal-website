/* Imports */
import React, { Component } from 'react';
import styled from 'styled-components'


/* Components */
import Heading from '../Heading.js'
import Page from '../Page/Page'

/* Stylesheets etc. */
import '../../fontawesome/css/all.css'
import { Link } from "react-router-dom"

/* Media */
import me from '../../photos/me_irl3_cropped.jpg'

/* Theme */
import Theme from '../../Theme.js'

let theme = Theme.getTheme()

const MainInfo = styled.div`
  margin: 100px 0 100px 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 600px;

  @media (max-width: ${theme.mobile.cutOff}) {
    justify-content: center;
    text-align: center;
    margin: 50px 20px 70px 20px;
    min-width: auto;
  }

  & .iconWrapper {
    @media (max-width: ${theme.mobile.cutOff}) {
      justify-content: center
    }
  }

`;

const MainImage = styled.div`

  position: relative;
  left: -200px;
  z-index: -1;
  // Code for mobile displays

  @media (max-width: ${theme.mobile.cutOff}) {
    width: 100%;
    right: 0;
    left: 0;
  }

  & img {
    // Mobile mode
    @media (max-width: ${theme.mobile.cutOff}) {
      width: 100%;
    }
  }

  & .fadingElement {
    // Mobile mode
    @media (max-width: ${theme.mobile.cutOff}) {
      opacity: 0
    }
  }
`;



// Main Page component
class HomePage extends Component {
  render() {
    return (
      <Page spacer={false} style={{overflowX: 'hidden'}}>
          <div class="padder" />
          <MainInfo>
            <Heading style={{marginLeft: 0}}>Robbie Cook</Heading>
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
          </MainInfo>
          <MainImage>
            <div class="fadingElement">
            </div>
            <img src={me} style={{ height: '100%' }} />
          </MainImage>
      </Page>
    );
  }
}

export default HomePage;
