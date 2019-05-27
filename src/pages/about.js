import React, { Component } from "react"

/* Imports */
import Page from "../components/Page"
import { Heading, Text } from "../components/Typography"
import { Container } from "../components/Wrappers"
import { Col, Row } from "../components/Layout"
import Spacer from "../components/Spacer"
import Globals from "../components/Globals"
import styled from "styled-components"

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
            <Col>
              <Heading type="h2">About</Heading>
              <Text>
                Hi! I'm a 22-year-old developer, currently working in .NET :).
                Check out my Github page{" "}
                <a href="https://github.com/Robbie-Cook">here</a> for a list of
                projects I am working on.
              </Text>
              <Text>
                I studied at Otago University in Dunedin; where I got an Honours
                degree in Computer Science and worked as a lab demonstrator for
                Python and Java students. I also did some Disabilities tutoring
                for the University as well in my final year.
              </Text>
              <Text>
                At the moment, I am learning about SQL, web apps, and React.
              </Text>
              <Text>
                I have experience with Linux systems, LaTeX and Machine Learning
                (e.g. tensorflow).
              </Text>
              <Text>
                In my spare time, I like to swim, gym, and play guitar and
                piano.
              </Text>
            </Col>
            <Col>
              <CarouselWrapper>
                <Carousel showThumbs={false}>
                  {getCarouselPhotos()}
                </Carousel>
              </CarouselWrapper>
            </Col>
          </Row>
        </Container>
      </Page>
    )
  }
}

export default About
