/**
 * A component which defines Row and Col for layout
 */

import styled from "styled-components"
import Globals from "../components/Globals"
import React, { Component } from "react"
import PropTypes from "prop-types"

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  @media (max-width: ${Globals.mobile.size}px) {
    flex-direction: column;
  }
`

class Col extends Component {
  propTypes = {
    width: PropTypes.string, // Given as a string,
    // not as a number, e.g. 50%
  }

  render() {
    Col = styled.div`
      display: flex;
      flex-direction: column;
      margin: 0 40px 20px 0;
      width: ${this.props.width};

      @media (max-width: ${Globals.mobile.size}px) {
        margin: ${Globals.mobile.colMargin};
      }

      &:last-child {
        margin-right: 0px;
      }
    `

    return <Col>{this.props.children}</Col>
  }
}

export { Col, Row }
