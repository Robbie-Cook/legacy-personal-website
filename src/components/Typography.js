import styled from "styled-components"
import React, { Component } from "react"
import PropTypes from "prop-types"

/**
 *  Common components relating to text. This includes
 *  <Text> and <Heading>.
 */

/**
 * Heading section for a page
 * Should be used for all headings. Currently, only supports h1 and h2.
 * Example usage: <Heading type="h2">My heading</Heading>
 */
class Heading extends Component {
  propTypes = {
    type: PropTypes.string,
  }

  /**
   *  Get appropriate heading
   *  Type: h1, h2, etc,
   *  Content: The child elements
   */
  getHeading(type, content, style, className) {
    const H1 = styled.h1`
      font-family: "Roboto", sans-serif;
      font-size: 50px;
      font-weight: bold;
      margin: 0 0 10px 0;
    `

    // H2 inherits and overrides styles from H1
    const H2 = styled(H1)`
      font-size: 40px;
    `

    const H3 = styled(H2)`
      font-size: 30px;
    `

    let headingElementToUse

    // Probably should use TypeScript for this
    if (type === "h1" || type === undefined) {
      headingElementToUse = H1
    } else if (type === "h2") {
      headingElementToUse = H2
    } else {
      headingElementToUse = H3
    }

    return React.createElement(
      headingElementToUse,
      { style: style, className: className },
      this.props.children
    )
  }
  render() {
    return this.getHeading(
      this.props.type,
      this.props.children,
      this.props.style,
      this.props.className
    )
  }
}

/**
 * Text element for a page.
 * Should be used in place of <p>, because this
 * is a globally-styled version
 */

class Text extends Component {
  render() {
    Text = styled.p`
      margin: 7px 0;
    `

    return <Text>{this.props.children}</Text>
  }
}

export { Heading, Text }
