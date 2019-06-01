import React, { Component } from "react"

/* Imports */
import Page from "../components/Page"
import { Heading, Text } from "../components/Typography"
import { Container } from "../components/Wrappers"
import { Col, Row, LayoutWrapper } from "../components/Layout"
import Spacer from "../components/Spacer"
import Globals from "../components/Globals"
import styled from "styled-components"
import Section from "../components/Section"
import PropTypes from "prop-types"
import { Header } from "../components/Typography"
import Dimensions from "../components/Dimensions"
import { Button as GrommetButton, Grommet } from "grommet"
import {Button, ButtonGenerator} from "../components/Button"

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
        <LayoutWrapper>
          <Row>
            <Col width="50%">
              <Heading type="h2">About</Heading>
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
              <CarouselWrapper>
                <Carousel showThumbs={false}>{getCarouselPhotos()}</Carousel>
              </CarouselWrapper>
            </Col>
          </Row>
          <Spacer height="30px" />
          <Heading type="h2">Skills</Heading>
          <Row>
            <Col width="100%">
              <ButtonGenerator
                titles={["Development", "General"]}
                functions={[
                  () => {
                    console.log("Button1Pressed")
                  },
                  () => {
                    console.log("Button2Pressed")
                  },
                ]}
                buttonRow={true}
                buttonStyle="margin: 10px 0 10px 0;"
              />
              <SkillsBox
                title="Web Development"
                tags={[
                  "JavaScript",
                  "React",
                  "Gatsby",
                  "VS Code",
                  "UI Frameworks",
                ]}
                backgroundColor="#43DE49"
                titleColor="#0f0f0f"
              />

              <SkillsBox
                title="Microsoft Development"
                tags={["C#", "VB.NET", "MS-SQL & SSMS"]}
                backgroundColor="#43DE49"
                titleColor="#0f0f0f"
              />

              <SkillsBox
                title="Development Languages"
                tags={["JavaScript", "Python", "C#", "VB.NET", "Java"]}
                backgroundColor="#43DE49"
                titleColor="#0f0f0f"
              />

              <SkillsBox
                title="Other"
                tags={["bash", "Virtualisation (Hyper-V)", "LaTeX"]}
                backgroundColor="#43DE49"
                titleColor="#0f0f0f"
              />
            </Col>
          </Row>
        </LayoutWrapper>
      </Page>
    )
  }
}

/** The tags of the SkillsBox, which lives inside a SkillsBox */
class SkillsBoxInfo extends Component {
  render() {
    const SkillsBoxInfo = styled.div`
      height: ${this.props.height};
      line-height: ${this.props.height};
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      font-weight: bold;
      font: inherit;

      @media (max-width: ${Globals.mobile.size}px) {
        height: auto;
      }
    `

    const Tag = styled.span`
      margin: 0 14px 0 0;
      display: inline;
      height: ${this.props.height};
      font-weight: bold;
      font: inherit;
      line-height: ${this.props.height};
    `

    return (
      <SkillsBoxInfo>
        {this.props.tags.map((item, index) => {
          return (
            <Tag>
              {item}
              {/* Put a comma at the end, except for the last item */}
              {index !== this.props.tags.length - 1 ? "," : ""}
            </Tag>
          )
        })}
      </SkillsBoxInfo>
    )
  }
}
SkillsBoxInfo.propTypes = {
  tags: PropTypes.string,
  height: PropTypes.string,
}

/* A header which lives inside a SkillsBox */
class SkillsBoxHeader extends Component {
  render() {
    const SkillsBoxHead = styled.div`
      height: ${this.props.height};
      background-color: ${this.props.backgroundColor};
      color: ${this.props.titleColor}!important;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      line-height: ${this.props.height};
    `
    return (
      <SkillsBoxHead>
        <Heading type="h3" style={{ margin: "0px", fontWeight: "normal" }}>
          {this.props.title}
        </Heading>
      </SkillsBoxHead>
    )
  }
}
SkillsBoxHeader.propTypes = {
  titleColor: PropTypes.string,
  backgroundColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
}

/** Container for skills info */
class SkillsBox extends Component {
  render() {
    let height = this.props.height === undefined ? "50px" : this.props.height

    const SkillsBox = styled.div`
      border: 1px solid #656565;
      height: ${height};
      width: 100%;
      display: flex;
      ${this.props.styles};
      margin-bottom: 20px;

      @media (max-width: ${Globals.mobile.size}px) {
        height: auto;
        flex-direction: column;
      }
    `

    return (
      <SkillsBox>
        <SkillsBoxHeader {...this.props} height={height}>
          {this.props.children}
        </SkillsBoxHeader>
        <SkillsBoxInfo {...this.props} height={height} />
      </SkillsBox>
    )
  }
}
SkillsBox.propTypes = {
  styles: PropTypes.string,
  height: PropTypes.string,
  titleColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  backgroundColor: PropTypes.string.isRequired,
}

export default About
