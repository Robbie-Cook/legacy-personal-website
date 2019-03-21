import React, { Component } from 'react';

/* Imports */
/* Stylesheets etc. */
import { Container, Row, Col } from 'react-bootstrap'
import Page from './Page'
import Spacer from './Spacer'

/* Media */
import me from '../photos/aboutImage.jpg'

// Main Page component
class AboutPage extends Component {
  render() {
    return (

        <Page>

          <Container>
          <Spacer/>
            <Row>

              <Col>
                <h2>
                  About me
                </h2>
                <Spacer height="20" />
                <p>
                  Hi! I'm a 22-year-old developer currently living in Auckland.
                  I work in .NET for an Auckland software company.
                  I studied at Otago University in Dunedin; where I got an Honours degree
                  in Computer Science and worked as a lab demonstrator for Python and Java students.
                  I also did some Disabilities tutoring for the University as well in my final year.
                  </p>
                  <p>
                  At the moment, I am learning about SQL, web apps, and React. 
                  </p>
                  <p>
                  I have experience
                  with Linux systems, LaTeX and Machine Learning (e.g. tensorflow).
                  </p>
                  <p>
                  In my spare time, I like to swim, gym, and play guitar and piano. 
                  </p>
              </Col>
              <Col>
                <img src={me}/>
              </Col>
            </Row>
          </Container>
        </Page>
    );
  }
}

export default AboutPage;
