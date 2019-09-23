/* eslint-disable react/jsx-filename-extension */

/* Imports */
/* Components */
import { Heading, Text } from '@robbie-cook/react-components';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Animate from '../components/animation/Animate';
import Codify from '../components/Codify';
import { Icon, IconsWrapper } from '../components/Icons';
import Section from '../components/Section';
import Spacer from '../components/Spacer';
import { MobileView } from '../components/Views';
/* Theme */
import Colors from '../data/Colors';
/* Stylesheets etc. */
import '../fontawesome/css/all.css';
import avatarMe from '../photos/avatarMe.svg';
/* Media */
import me from '../photos/meAtComputer.jpg';
import '../css/main.scss';


const Icons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;

  ${new MobileView(`
    justify-content: center;
  `)}
`;
const MainInfo = styled.div`
  margin: auto 0 auto 20%;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  z-index: 2;
  ${new MobileView(`
        & * {
          align-self: center
        }
        align-self: center;
        
        justify-content: center;
        text-align: center;
        margin: 10px 20px 70px 20px;
        min-width: auto;
        background-color: ${Colors.page.backgroundColor};
        padding: 0 15px;
      `)}

  & .iconWrapper {
    ${new MobileView(`
          justify-content: center;
        `)}
  }
`;

const BackgroundImageWrapper = styled.div`
        background-image: url('${me}');
        ${
          // Don't display background image on mobile -- display mobile-specific image instead
          new MobileView(`
            background-image: none;
          `)
        }
        width: 100%;
        background-repeat: no-repeat;
        display: flex;
        background-position-x: 120%;
        background-position-y: 50%;
        background-size: contain;
    `;

const BackgroundGradientWrapper = styled.div`
  background: linear-gradient(
    to right,
    ${Colors.page.backgroundColor} 80%,
    rgba(255, 244, 244, 0) 100%
  );

  padding-right: 80px;
  display: flex;

  ${new MobileView(`
        padding: 0;
        background: none;
        width: 100%;
        justify-content: center;
        flex-direction: column;
       `)}
`;

// Only display in mobile view
const HeaderImage = styled.img`
  display: none;
  width: 200px;
  align-self: center;
  ${new MobileView(`
        display: flex;
      `)};
`;

/**
 * Index page component
 */
export default function HomePage(props) {
  return (
    <Section style="width: 100%;">
      <BackgroundImageWrapper>
        <BackgroundGradientWrapper>
          {/* HeaderImage only displayed on mobile */}
          <HeaderImage src={avatarMe} />
          <MainInfo>
            <Heading
              style={`
                    & h1 {
                      margin: 0px
                    }; 
                    ${new MobileView(`
                      margin: 10px 0;
                    `)}`}
              codify
            >
              Robbie Cook
            </Heading>
            <Text>
              Hello! I'm a developer in New Zealand. I love coding, making
              stuff, learning, and teaching.
              <Spacer height="10px" />
              Check out my <Link to="/about">About</Link> page to find out more
              :)
            </Text>
            <Animate>
              <IconsWrapper>
                <Codify
                  color={Colors.link.color}
                  fontSize="47px"
                  rightTagSpacing="0px"
                  opacity=".7"
                >
                  <Icon href="https://github.com/Robbie-Cook">
                    <i className="icon fab fa-github" />
                  </Icon>
                  <Icon href="https://www.linkedin.com/in/robbie-cook/">
                    <i className="icon fab fa-linkedin" />
                  </Icon>
                  <Icon href="mailto:robbie@robbie.pw">
                    {/* <div class="iconWrapper2"> */}
                    <i className="icon fas fa-envelope" />
                    {/* <span>robbie@robbie.pw</span> */}
                    {/* </div> */}
                  </Icon>
                </Codify>
              </IconsWrapper>
            </Animate>
          </MainInfo>
        </BackgroundGradientWrapper>
      </BackgroundImageWrapper>
    </Section>
  );
}