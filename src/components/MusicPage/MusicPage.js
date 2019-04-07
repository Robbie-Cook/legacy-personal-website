import React, { Component } from 'react';

/* Imports */
/* Stylesheets etc. */
import Heading from '../Heading'
import Page from '../Page/Page'
import { Row, Col, Container } from '../Wrappers'
import Theme from '../../Theme.js'
import Spacer from '../Spacer.js'

const theme = Theme.getTheme()

// Main Page component
class MusicPage extends Component {
  render() {
    return (
      <Page>
        <Container>
          <Heading type="h2">Music</Heading>
          <Row>
            <Col class="subpage">

              <p>Music is one of my passions.
              My favourite bands at the
              moment are Vampire Weekend, The Killers, Brandon Flowers, and the White Stripes.</p>

              <p>I make some music at home, and my set up at home is an electric keyboard and a microphone at
              my parent's house. I also am trying to learn guitar -- I have a little acoustic guitar here in Auckland.</p>

            </Col>
            <Col class="subpage">
              <iframe width="100%" height="450" scrolling="yes" frameborder="no" allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/39548578&color=%23222121&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe>
            </Col>
          </Row>

        </Container>
      </Page>
    );
  }
}

export default MusicPage;
