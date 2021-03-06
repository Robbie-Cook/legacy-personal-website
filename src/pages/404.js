/* eslint-disable react/jsx-filename-extension */

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Col, Row } from '../components/Layout';
import { MobileView } from '../components/Views';
import { Container as LayoutWrapper } from '../components/Wrappers';

// Styles
const StyledHeading = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 100px;
  font-family: 'Roboto', sans-serif;
  ${new MobileView(`
    font-size: 50px;
  `)}
`;

const StyledContainer = styled.div`
  max-width: 600px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;

const Quote = styled.p`
  font-weight: bold;
  font-family: Roboto, sans-serif;
  font-size: 24px;
  font-style: italic;
`;

const Author = styled.p`
  font-family: Roboto, sans-serif;
  margin-left: 25px !important;
  font-weight: 300;
  font-style: italic;
  color: #828282;
`;

// Main Page component
class fourOhFour extends PureComponent {
  render() {
    return (
      <LayoutWrapper>
        <StyledHeading type="h2">&#123;404: Page not found&#125;</StyledHeading>
        <Row>
          <Col>
            <StyledContainer>
              <Quote>
                &quot;Do do do do do do do DODODODODODODODODODO do do do do do do do
                do do do do do do do&quot;
              </Quote>
              <Author>- Darude, Sandstorm</Author>
            </StyledContainer>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}

export default fourOhFour;
