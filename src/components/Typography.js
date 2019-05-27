import styled from "styled-components"
import React, { Component } from "react"
import Globals from "./Globals"

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

    if (type === "h1" || type === undefined) {
      return (
        <H1 style={style} className={className}>
          {content}
        </H1>
      )
    } else if (type === "h2") {
      return (
        <H2 style={style} className={className}>
          {content}
        </H2>
      )
    }
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

    return(
        <Text>{this.props.children}</Text>
    );
  }
}

export { Heading,Text }
