import React, { Component } from "react"

/* Imports */
/* Stylesheets etc. */
import { Heading, Text } from "../components/Typography"
import WebPage from "../components/Page"
import { Container } from "../components/Wrappers"
import { Col, Row, LayoutWrapper } from "../components/Layout"
import styled from "styled-components"
import PropTypes from "prop-types"
import Globals from "../components/Globals"

import Song from "../components/music/Song"

class Playlist extends Component {
  render() {
    return (
      <BorderBox width="100%" height="423px">
        <BorderBox style={`maxWidth: 550px; height: 100%`}>
          <Heading type="h3" style={{ marginTop: "-10px" }}>
            Very important and very pretentious
          </Heading>
          <Song
            name="Diane Young"
            artist="Vampire Weekend"
            spotifySongId="104pmtTQOlmW8Zt2BipGKH"
          />
        </BorderBox>
      </BorderBox>
    )
  }
}

export default Playlist