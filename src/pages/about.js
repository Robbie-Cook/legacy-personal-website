import React, { Component } from "react"

/* Imports */
import Page from "../components/Page"
import { Heading, Text } from "../components/Typography"
import { Container } from "../components/Wrappers"
import { Col, Row, LayoutWrapper } from "../components/Layout"
import Spacer from "../components/Spacer"
import Colors from "../components/Colors"
import styled from "styled-components"
import Section from "../components/Section"
import PropTypes from "prop-types"
import { Header } from "../components/Typography"
import Dimensions from "../components/Dimensions"
import { Button as GrommetButton, Grommet } from "grommet"
import { Button, ButtonGenerator, ButtonWrapper } from "../components/Button"
import Carousel from "../components/Carousel"
import SkillsPage from "../components/about/SkillsPage"

import { MobileView } from "../components/Views"

/* Media */
import photo1 from "../photos/carousels/1.svg"
import photo2 from "../photos/carousels/2.jpg"
import photo3 from "../photos/carousels/3.jpg"
import { graphql } from "gatsby"

// Main Page component
class About extends Component {
  render() {
    return (
      <Page>
        <LayoutWrapper>
          <Row>
            <Col width="50%">
              <Heading>About</Heading>
              <Text>
                Hi! I'm a 22-year-old developer in Auckland. Check out my Github
                page <a href="https://github.com/Robbie-Cook">here</a> for a
                list of projects I am working on.
              </Text>
              <Text>
                My work is developing C# and VB .NET. At home, I enjoy building
                stuff in React and JavaScript libraries. I would like to learn
                about Angular in the near future.
              </Text>
              <Text>
                I have an Honours degree in Computer Science from Otago
                University. I worked there as a lab demonstrator for Python and
                Java. I also did some one-on-one tutoring for the disabilities
                department University as well in my final year.
              </Text>
              <Text>
                I also have experience with Linux systems. My postgraduate
                studies gave me skills in academic writing, LaTeX and Machine
                Learning (e.g. tensorflow).
              </Text>
              <Text>
                In my spare time, I like to swim, gym, and play guitar and
                piano.
              </Text>
            </Col>
            <Col width="50%">
              <Carousel photos={[photo1, photo2, photo3]} />
            </Col>
          </Row>
          <Spacer height="30px" />
          <Heading type="h2">Skills</Heading>
          <Row>
            <Col width="100%">
              <SkillsPage />
            </Col>
          </Row>
        </LayoutWrapper>
      </Page>
    )
  }
}

export default About
