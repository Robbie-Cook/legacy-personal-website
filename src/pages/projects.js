/* eslint-disable react/jsx-filename-extension */

import { Heading, Text } from '@robbie-cook/react-components';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { LayoutWrapper, Row } from '../components/Layout';
import { ProjectBox } from '../components/projects';
import machineLearningMini from '../photos/projects/machineLearningMini.png';
// Media
import personalWebsiteMini from '../photos/projects/personalWebsiteMini.png';
import yorkPlaceMini from '../photos/projects/yorkPlaceMini.png';

/**
 * Projects page
 */
class Projects extends PureComponent {
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
    `;

    return (
      <LayoutWrapper>
        <Heading>Work / Projects</Heading>
        <Text>
          Here is a showcase of the different projects I have been working on
          recently.
        </Text>
        <ProjectRow>
          {/* Personal Website */}
          <ProjectBox
            title="Personal Website"
            desc={
              'This is this website! It is a React application with \
                gatsbyjs'
            }
            image={personalWebsiteMini}
            githubLink="https://github.com/Robbie-Cook/Personal-Website"
            webLink={['http://robbie.pw', 'robbie.pw']}
          />
          {/* York Place Website */}
          <ProjectBox
            title="York Place"
            desc={
              'A website for a daycare company in Dunedin. Built this with a friend.'
            }
            image={yorkPlaceMini}
            webLink={['http://yorkplace.co.nz', 'yorkplace.co.nz']}
          />
          {/* Machine Learning Showcase */}
          <ProjectBox
            title="Machine Learning Showcase"
            desc={
              'A introduction to machine learning. Built in React, with a UI framework \
                called Grommet. '
            }
            image={machineLearningMini}
            githubLink="https://github.com/Robbie-Cook/Machine-Learning-Showcase"
            webLink={[
              'http://machinelearning.robbie.pw',
              'machinelearning.robbie.pw',
            ]}
          />
        </ProjectRow>
      </LayoutWrapper>
    );
  }
}

export default Projects;
