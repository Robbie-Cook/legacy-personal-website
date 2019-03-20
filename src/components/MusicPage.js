import React, { Component } from 'react';

/* Imports */
/* Stylesheets etc. */
import { Container, Row, Col } from 'react-bootstrap'
import Page from './Page'

// Main Page component
class MusicPage extends Component {
  render() {
    return (
      <div>
        <Page>

          <Container>
            <h1>My tracks</h1>
            <Row>
              <Col class="subpage">
                <iframe width="100%" height="450" scrolling="yes" frameborder="no" allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/39548578&color=%23222121&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe></Col>
              <Col class="subpage">

                <p>Music is one of my passions.
                My favourite bands at the
              moment are Vampire Weekend, The Killers, Brandon Flowers, and the White Stripes.</p>

                <p>I make some music at home, and my set up at home is an electric keyboard and a microphone at
              my parent's house. I also am trying to learn guitar -- I have a little acoustic guitar here in Auckland.</p>

              </Col>
            </Row>
          </Container>
        </Page>
      </div>
    );
  }
}

export default MusicPage;
