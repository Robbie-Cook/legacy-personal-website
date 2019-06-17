import React, { Component } from "react"

/* Imports */
/* Stylesheets etc. */
import { Heading, Text } from "../Typography"
import WebPage from "../Page"
import { Container } from "../Wrappers"
import { Col, Row, LayoutWrapper } from "../Layout"
import styled from "styled-components"
import PropTypes from "prop-types"
import Globals from "../Globals"
import { BorderBox } from "../Boxes"
import { MobileStyles } from "../Views"

class Playlist extends Component {
  render() {
    // Behaviour changes based on whether jsonData is passed
    const jsonData = this.props.jsonData
    const title = this.props.jsonData ? jsonData.name : this.props.title

    return (
      <BorderBox
        style={`
        width: 550px; 
        height: 100%;
        margin-right: 20px;
        flex-shrink: 0;
        
        ${new MobileStyles(`
          width: 377px;
          `)}
      `}
       verticalScroll
      >
        <Heading type="h3" style={{ marginTop: "-10px" }}>
          {title}
        </Heading>
        {this.props.children}
      </BorderBox>
    )
  }
}
Playlist.propTypes = {
  // Songs passed as this.props.children
  title: PropTypes.string,
  // If left undefined, json is not used
  jsonData: PropTypes.string,
}

export default Playlist
