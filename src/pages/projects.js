import React, { Component } from "react"
import Heading from "../components/Heading"
import { Col, Row, Container } from "../components/Wrappers"
import Page from "../components/Page"
import styled from "styled-components"
import { ProjectBox, ProjectLink } from "../components/projects"
import { Link } from "gatsby"
import { Github } from "grommet-icons"
import Spacer from "../components/Spacer"

// Media
import personalWebsiteMini from "../photos/projects/personalWebsiteMini.png"

// Main Page component
class Projects extends Component {
  render() {
    return (
      <Page>
        <Container>
          <Heading type="h2">Work / Projects</Heading>
          <p>
            Here is a showcase of the different projects I have been working on
            recently.
          </p>
          <Spacer height="30" />
          <Row>
            <Col>
              {/* Personal Website */}
              <ProjectBox
                title="Personal Website"
                desc="This is this website! It is a React application which features 
                Gatsby for Server-side rendering, Material-UI, and
                styled-components for styling."
                image={personalWebsiteMini}
              >
                <ProjectLink
                  to="https://github.com/Robbie-Cook/Personal-Website"
                  text="Code on GitHub"
                >
                  <Github />
                </ProjectLink>
              </ProjectBox>
            </Col>
            {/* <Col>
              <ProjectBox title="Machine Learning Showcase">
                <p>
                  A website to showcase Machine Learning. This website is also
                  built in React &amp; Gatsby, but it uses a new UI framework
                  called Grommet.
                </p>
                <ProjectLink
                  to="https://github.com/Robbie-Cook/Machine-Learning-Showcase"
                  text="Code on GitHub"
                >
                  <Github />
                </ProjectLink>
              </ProjectBox>
            </Col> */}
          </Row>
        </Container>
      </Page>
    )
  }
}

export default Projects
