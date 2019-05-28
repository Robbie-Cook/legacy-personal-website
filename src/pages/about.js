import React, { Component } from "react"

/* Imports */
import Page from "../components/Page"
import { Heading, Text } from "../components/Typography"
import { Container } from "../components/Wrappers"
import { Col, Row } from "../components/Layout"
import Spacer from "../components/Spacer"
import Globals from "../components/Globals"
import styled from "styled-components"
import Section from "../components/Section"

/* Carousel */
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

/* Media */

// Import all photos from carousel folder
function importAll(r) {
  return r.keys().map(r)
}

const images = importAll(
  require.context("../photos/carousel/", false, /\.(png|jpe?g|svg)$/)
)

// Generate a single carousel element for a photo
function getCarouselPhotos() {
  const StyledImg = styled.img`
    max-height: 300px;
    width: auto !important;
  `

  let photoJsxArray = []
  for (let item of images) {
    photoJsxArray.push(
      <div>
        <StyledImg src={item} />
      </div>
    )
  }
  return photoJsxArray
}

// Main Page component
class About extends Component {
  render() {
    const CarouselWrapper = styled.div`
      display: flex;
      height: 100%;
      align-items: center;
    `
    return (
      <Page>
        <Container>
          <Row>
            <Col width="50%">
              <Heading type="h2">About</Heading>
              <Text>
                Hi! I'm a 22-year-old .NET developer in Auckland. Check out my
                Github page <a href="https://github.com/Robbie-Cook">here</a>{" "}
                for a list of projects I am working on.
              </Text>
              <Text>
                My work is developing a product in C# and VB .NET. At home, I
                enjoy development in React and JavaScript libraries. I would
                like to learn about Angular in the near future.
              </Text>
              <Text>
                I have an Honours degree in Computer Science from Otago
                University, where I and worked as a lab demonstrator for Python
                and Java students. I also did some one-on-one tutoring for the
                disabilities department University as well in my final year.
              </Text>
              <Text>
                I also have experience with Linux systems, LaTeX and Machine
                Learning (e.g. tensorflow).
              </Text>
              <Text>
                In my spare time, I like to swim, gym, and play guitar and
                piano.
              </Text>
            </Col>
            <Col width="50%">
              <CarouselWrapper>
                <Carousel showThumbs={false}>{getCarouselPhotos()}</Carousel>
              </CarouselWrapper>
            </Col>
          </Row>
          <Spacer height="30px" />
          <Row>
            <Col>
              <Heading type="h2">Skills</Heading>
              <Heading type="h3">General Development</Heading>
              <Heading type="h3">Continuous Integration / Deployment</Heading>
            </Col>
          </Row>
        </Container>
      </Page>
    )
  }
}

export default About
