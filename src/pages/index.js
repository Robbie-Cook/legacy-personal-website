/* eslint-disable react/jsx-filename-extension */

/* Imports */
/* Components */
import {
  Heading,
  Link,
  Text,
  ThemeContext,
} from '@robbie-cook/react-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled, { css } from 'styled-components';
import Codify from '../components/Codify';
import { Icon, IconsWrapper } from '../components/Icons';
import Section from '../components/Section';
import Spacer from '../components/Spacer';
import { MobileView } from '../components/Views';
import ImgWrapper from '../components/indexPage/ImgWrapper';
import MainInfo from '../components/indexPage/MainInfo';
import { Transition } from 'react-transition-group';
import '../css/main.scss';
/* Theme */
import Colors from '../data/Colors';
/* Stylesheets etc. */
import '../fontawesome/css/all.css';

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;

  ${new MobileView(`
    justify-content: center;
  `)}
`;

/**
 * Index page component
 */
export default function HomePage(props) {
  return (
    <>
      <Text>
        Hello! I'm a developer in New Zealand. I love coding, making stuff,
        learning, and teaching.
        <Spacer height="10px" />
        Check out my <Link to="/about">About</Link> page to find out more :)
      </Text>

      <ImgWrapper>
        <Img fluid={props.data.file.childImageSharp.fluid} />
      </ImgWrapper>
    </>
  );
}

export const query = graphql`
  query {
    file(relativePath: { eq: "meAtComputer.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

HomePage.contextType = ThemeContext;
