/* Imports */
import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

/* Components */
import { Heading, Text } from "../components/Typography"
import WebPage from "../components/Page"
import Section from "../components/Section"
import Spacer from "../components/Spacer"
import { MobileView } from "../components/Views"
import {Icon, IconsWrapper} from "../components/Icons"

/* Stylesheets etc. */
import "../fontawesome/css/all.css"

/* Media */
import me from "../photos/me_irl3_cropped.jpg"
import avatarMe from "../photos/avatarMe.svg"

/* Theme */
import Globals from "../components/Globals"

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;

  @media (max-width: ${Globals.mobile.size}px) {
    justify-content: center;
  }
`

// Main Page component
class HomePage extends Component {
  render() {
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
        background-color: ${Globals.page.backgroundColor};
        padding: 0 15px;
      `)}

      & .iconWrapper {
        ${new MobileView(`
          justify-content: center;
        `)}
      }
    `

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
    `

    const BackgroundGradientWrapper = styled.div`
      background: linear-gradient(
        to right,
        ${Globals.page.backgroundColor} 80%,
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
    `

    // Only display in mobile view
    const HeaderImage = styled.img`
      display: none;
      width: 200px;
      align-self: center;
      ${new MobileView(`
        display: flex;
      `)};
    `

    return (
      <WebPage style={{ padding: "0" }}>
        <Section style={"width: 100%;"}>
          <BackgroundImageWrapper>
            <BackgroundGradientWrapper>
              {/* HeaderImage only displayed on mobile (defined in definition) */}
              <HeaderImage src={avatarMe} />
              <MainInfo>
                <Heading style={{ margin: 0 }} codify>
                  Robbie Cook
                </Heading>
                <Text>
                  Hello! I'm a developer in New Zealand. I love coding, making
                  stuff, learning, and teaching.
                  <Spacer height="10px" />
                  Check out my <Link to="/about">About</Link> page to find out
                  more :)
                </Text>
                <IconsWrapper>
                  <Icon href="https://github.com/Robbie-Cook">
                    <i class="icon fab fa-github" />
                  </Icon>
                  <Icon href="https://www.linkedin.com/in/robbie-cook/">
                    <i class="icon fab fa-linkedin" />
                  </Icon>
                  <Icon href="mailto:robbie@robbie.pw">
                  {/* <div class="iconWrapper2"> */}
                      <i class="icon fas fa-envelope" />
                      {/* <span>robbie@robbie.pw</span> */}
                  {/* </div> */}
                  </Icon>
                </IconsWrapper>
              </MainInfo>
            </BackgroundGradientWrapper>
          </BackgroundImageWrapper>
        </Section>
      </WebPage>
    )
  }
}

export default HomePage
