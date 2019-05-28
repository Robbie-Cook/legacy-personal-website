import React, { Component } from 'react';
import Heading from '../components/Heading'
import {Col, Row, Container as LayoutWrapper} from '../components/Wrappers' 
import Page from '../components/Page'

// Main Page component
class Sample extends Component {
    render() {
      return (
  
        <Page>
          <LayoutWrapper>
            <Heading type="h2">Sample</Heading>
            <Row>
              <Col>
                
              </Col>
              <Col>

              </Col>
            </Row>
          </LayoutWrapper>
        </Page>
      );
    }
  }
  
  export default Sample;
  