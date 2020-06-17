/* eslint-disable react/jsx-filename-extension */

import { Heading, Text } from '@robbie-cook/react-components';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { LayoutWrapper, Row } from '../components/Layout';
import { ProjectBox } from '../components/projects';
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
          <ProjectBox
            title="html-to-markdown.com"
            desc={
              'A website to convert HTML into Markdown'
            }
            githubLink="https://github.com/Robbie-Cook/markdown-converter"
            webLink={[
              'http://html-to-markdown.com',
              'html-to-markdown.com',
            ]}
          />
        </ProjectRow>
      </LayoutWrapper>
    );
  }
}

export default Projects;
