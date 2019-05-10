import React, { Component } from "react"
import Heading from "../components/Heading"
import { Col, Row, Container } from "../components/Wrappers"
import Page from "../components/Page"
import styled from "styled-components"
import {
  ProjectBox,
} from "../components/projects"
import Spacer from "../components/Spacer"
import Theme from "../components/Theme"
// Media
import personalWebsiteMini from "../photos/projects/personalWebsiteMini.png"

// Main Page component
class Projects extends Component {
  render() {

    const ProjectRow = styled(Row)`
        
        // Responsive design queries
        @media (max-width: 1200px) {
            flex-direction: column;
                    }
    `

    return (
      <Page>
        <Container>
          <Heading type="h2">Work / Project</Heading>
          <p>
            Here is a showcase of the different projects I have been working on
            recently.
          </p>
          <Spacer height="30" />
          <ProjectRow>
            {/* Personal Website */}
            <ProjectBox
              title="Personal Website"
              desc={
                "This is this website! It is a React application which features \
                Gatsby for Server-side rendering, Material-UI, and \
                styled-components for styling."
              }
              image={personalWebsiteMini}
              githubLink="https://github.com/Robbie-Cook/Personal-Website"
              webLink={["http://robbie.pw", "robbie.pw"]}
            >
            </ProjectBox>
            {/* Machine Learning Showcase */}
            <ProjectBox
              title="Machine Learning Showcase"
              desc={
                "A introduction to machine learning. Built in React, with a UI framework \
                called Grommet. "
              }
              image={personalWebsiteMini}
              githubLink="https://github.com/Robbie-Cook/Machine-Learning-Showcase"
              webLink={["http://machinelearning.robbie.pw", "machinelearning.robbie.pw"]}
            >
            </ProjectBox>
          </ProjectRow>
        </Container>
      </Page>
    )
  }
}

export default Projects