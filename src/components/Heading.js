import styled from "styled-components"
import React, { Component } from "react"
import Theme from "./Theme"

/* Heading section for a page
   Should be used for all headings. Currently, only supports h1 and h2.
   Example usage: <Heading type="h2">My heading</Heading>
*/



const theme = Theme

/* 
  Get appropriate heading
  Type: h1, h2, etc,
  Content: The child elements
  */
function getHeading(type, content, style, className) {
  const H1 = styled.h1`
    font-family: "Roboto", sans-serif;
    font-size: 50px;
    font-weight: bold;
    margin: 0 0 10px 0 @media (max-width: ${theme.mobile.cutOff}px) {
      margin: ${theme.mobile.colMargin};
    }
  `

  // H2 inherits and overrides styles from H1
  const H2 = styled(H1)`
    font-size: 40px;
  `

  if (type === "h1" || type === undefined) {
    return <H1 style={style} className={className}>{content}</H1>
  } else if (type === "h2") {
    return <H2 style={style} className={className}>{content}</H2>
  }
}

// Main Page component
class Heading extends Component {
  render() {
    return getHeading(this.props.type, this.props.children, this.props.style, this.props.className)
  }
}

export default Heading
