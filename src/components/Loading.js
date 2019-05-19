import React, { Component } from "react"
import styled from "styled-components"
/**
 * Component for rendering the loading screen.
 * Should be the first thing rendered on a page.
 */

// Sample component
class LoadingScreen extends Component {
  render() {
    const LoadingScreen = styled.div`
        background-color: red;
        height: 100px;
        width: 100px;
    `
    return(
        <LoadingScreen />
    )
  }
}

export default LoadingScreen
