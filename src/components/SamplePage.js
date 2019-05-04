import React, { Component } from 'react';
import Heading from '../components/Heading'
import {Col, Row, Container} from '../components/Wrappers' 
import Page from '../components/Page'

// Main Page component
class Sample extends Component {
    render() {
      return (
  
        <Page>
          <Container>
            <Heading type="h2">Sample</Heading>
            <Row>
              <Col>
                
              </Col>
              <Col>

              </Col>
            </Row>
          </Container>
        </Page>
      );
    }
  }
  
  export default Sample;
  