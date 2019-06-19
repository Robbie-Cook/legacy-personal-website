import React, { Component } from "react"
import { Heading, Text } from "../components/Typography"
import { Container } from "../components/Wrappers"
import { Col, Row, LayoutWrapper } from "../components/Layout"
import Page from "../components/Page"
import styled from "styled-components"
import { ProjectBox } from "../components/projects"

// Media
import personalWebsiteMini from "../photos/projects/personalWebsiteMini.png"
import machineLearningMini from "../photos/projects/machineLearningMini.png"
import yorkPlaceMini from "../photos/projects/yorkPlaceMini.png"

// Main Page component
class Projects extends Component {
  render() {
    const ProjectRow = styled(Row)`
      flex-wrap: wrap;

      // Responsive design queries
      @media (max-width: 1200px) {
        flex-direction: column;
        & > div {
          margin-right: 0 !important;
        }
      }
    `

    return (
      <Page>
        <LayoutWrapper>
          <Heading type="h2">Work / Projects</Heading>
          <Text>
            Here is a showcase of the different projects I have been working on
            recently.
          </Text>
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
            />
            {/* Machine Learning Showcase */}
            <ProjectBox
              title="Machine Learning Showcase"
              desc={
                "A introduction to machine learning. Built in React, with a UI framework \
                called Grommet. "
              }
              image={machineLearningMini}
              githubLink="https://github.com/Robbie-Cook/Machine-Learning-Showcase"
              webLink={[
                "http://machinelearning.robbie.pw",
                "machinelearning.robbie.pw",
              ]}
            />
            {/* Machine Learning Showcase */}
            <ProjectBox
              title="York Place"
              desc={
                "A website for a daycare company in Dunedin. Helped build this with a friend."
              }
              image={yorkPlaceMini}
              webLink={["http://yorkplace.co.nz", "yorkplace.co.nz"]}
            />
          </ProjectRow>
        </LayoutWrapper>
      </Page>
    )
  }
}

export default Projects
