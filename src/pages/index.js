/* Imports */
import React, { Component } from 'react';
import styled from 'styled-components'


/* Components */
import Heading from '../components/Heading.js'
import Page from '../components/Page'

/* Stylesheets etc. */
import '../fontawesome/css/all.css'


import { Link } from "gatsby"

/* Media */
import me from '../photos/me_irl3_cropped.jpg'

/* Theme */
import Theme from '../components/Theme'

let theme = Theme.getTheme()

const MainInfo = styled.div`
  margin: 100px 0 100px 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 600px;

  @media (max-width: ${theme.mobile.cutOff}px) {
    justify-content: center;
    text-align: center;
    margin: 50px 20px 70px 20px;
    min-width: auto;
  }

  & .iconWrapper {
    @media (max-width: ${theme.mobile.cutOff}px) {
      justify-content: center
    }
  }

`;

const MainImage = styled.div`

  position: relative;
  left: -200px;
  // Code for mobile displays

  @media (max-width: ${theme.mobile.cutOff}px) {
    width: 100%;
    right: 0;
    left: 0;
  }

  & img {
    // Mobile mode
    @media (max-width: ${theme.mobile.cutOff}px) {
      width: 100%;
    }
  }

  & .fadingElement {
    // Mobile mode
    @media (max-width: ${theme.mobile.cutOff}px) {
      opacity: 0
    }
  }
`;

const IconWrapper = styled.div`
display: flex;
flex-direction: row;
margin-top: 10px;


& .icon {
  font-size: 33px;
  padding: 0 4px;
  height: 100%;
}

& .iconWrapper2 {
    background-color: #2a2a2a;
    height: 100%;
    border-radius: 5px;
    padding: 0 5px 0 0;
}

& .iconWrapper2 a{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  }
  

@media (max-width: ${theme.mobile.cutOff}px) {
  justify-content: center
}

`


// Main Page component
class HomePage extends Component {
  render() {
    return (
      <Page style={{overflowX: 'hidden', paddingTop: '0'}}>
          <div class="padder" />
          <MainInfo>
            <Heading style={{margin: 0}}>Robbie Cook</Heading>
            <p>
              Hello! I'm a developer living in Auckland, New Zealand.
              I love swimming, Netflix, music, and creating.
          </p>
            <p>
              Check out my <Link to="/about">About</Link> page to find out more :)
            </p>
            <IconWrapper>
              <a href="https://github.com/Robbie-Cook"><i class="icon fab fa-github-square"></i></a>
              <a href="https://www.linkedin.com/in/robbie-cook/"><i class="icon fab fa-linkedin"></i></a>
              <div class="iconWrapper2">
                <a href="mailto:robbie@robbie.pw">
                  <i class="icon fas fa-envelope-square"></i>
                  <span>robbie@robbie.pw</span>
                </a>
              </div>
            </IconWrapper>
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
