import React, { Component } from "react"

/* Imports */
/* Stylesheets etc. */
import { Heading, Text } from "../components/Typography"
import WebPage from "../components/Page"
import { Container } from "../components/Wrappers"
import { Col, Row } from "../components/Layout"

// Main Page component
class MusicPage extends Component {
  render() {
    return (
      <WebPage>
        <Container>
          <Row>
            <Col width="50%">
              <Heading type="h2">Music</Heading>
              <Text>
                Music is one of my passions. My favourite bands at the moment
                are Vampire Weekend, The Killers, Brandon Flowers, and the White
                Stripes.
              </Text>

              <Text>
                I make some music at home, and my set up at home is an electric
                keyboard and a microphone at my parent's house. I also am trying
                to learn guitar -- I have a little acoustic guitar here in
                Auckland.
              </Text>
            </Col>
            <Col width="50%">
              <iframe
                width="100%"
                height="450"
                scrolling="yes"
                frameborder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/39548578&color=%23222121&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false"
              />
            </Col>
          </Row>
        </Container>
      </WebPage>
    )
  }
}

export default MusicPage
