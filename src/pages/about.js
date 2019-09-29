/* eslint-disable react/jsx-filename-extension */

import { Heading, Text, Link } from '@robbie-cook/react-components';
import Carousel from "../components/Carousel"
import React, { PureComponent } from 'react';
import SkillsPage from '../components/about/SkillsPage';
import { Col, LayoutWrapper, Row } from '../components/Layout';
/* Imports */
import Spacer from '../components/Spacer';
/* Media */
import photo1 from '../photos/carousels/1.svg';
import photo2 from '../photos/carousels/2.jpg';
import photo3 from '../photos/carousels/3.jpg';

/**
 *  Main Page component
 */
class About extends PureComponent {
  render() {
    return (
      <LayoutWrapper>
        <Row>
          <Col width="50%">
            <Heading>About</Heading>
            <Text>
              Hi! I'm a 22-year-old developer in Auckland. Check out my Github
              page <Link href="https://github.com/Robbie-Cook">here</Link> for a list
              of projects I am working on.
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
              I also have experience with Linux systems. My postgraduate studies
              gave me skills in academic writing, LaTeX and Machine Learning
              (e.g. tensorflow).
            </Text>
            <Text>
              In my spare time, I like to swim, gym, and play guitar and piano.
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
    );
  }
}

export default About;
