import React, { Component } from "react"

/* Imports */
import Page from "../components/Page"
import { Heading } from "../components/Typography"
import { Container as LayoutWrapper } from "../components/Wrappers"
import { Col, Row } from "../components/Layout"
import Globals from "../components/Globals"
import styled from "styled-components"

// Styles
const StyledHeading = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 100px;
  font-family: "Roboto", sans-serif;
  @media (max-width: ${Globals.mobile.size}px) {
    font-size: 50px;
  }
`

const StyledContainer = styled.div`
  max-width: 600px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`

const Quote = styled.p`
  font-weight: bold;
  font-family: Roboto, sans-serif;
  font-size: 24px;
  font-style: italic;
`

const Author = styled.p`
  font-family: Roboto, sans-serif;
  margin-left: 25px !important;
  font-weight: 300;
  font-style: italic;
  color: #828282;
`

// Main Page component
class fourOhFour extends Component {
  render() {
    return (
      <Page>
        <LayoutWrapper>
          <StyledHeading type="h2">
            &#123;404: Page not found&#125;
          </StyledHeading>
          <Row>
            <Col>
              <StyledContainer>
                <Quote>
                  "Do do do do do do do DODODODODODODODODODO do do do do do do
                  do do do do do do do do"
                </Quote>
                <Author>- Darude, Sandstorm</Author>
              </StyledContainer>
            </Col>
          </Row>
        </LayoutWrapper>
      </Page>
    )
  }
}

export default fourOhFour
