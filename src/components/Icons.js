import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Globals from "../components/Globals"

/**
 * Wraps a set of Icons
 */
class IconsWrapper extends Component {
  render() {
    const IconsWrapperStyledComponent = styled.div`
      display: flex;
      margin-top: 17px;
    `
    return (
      <IconsWrapperStyledComponent>
        {this.props.children}
      </IconsWrapperStyledComponent>
    )
  }
}
IconsWrapper.propTypes = {}

/** Represents one icon on a page */
class Icon extends Component {
  render() {
    const diameter = 50

    const IconStyledComponent = styled.div`
      width: ${diameter}px;
      height: ${diameter}px;
      border-radius: ${diameter / 2}px;
      line-height: ${diameter}px;
      text-align: center;
      font-size: ${diameter - 15}px;
      cursor: pointer;
      background-color: ${Globals.textColor};
      margin-right: 18px;
      color: ${Globals.page.backgroundColor};
      transition: 0.1s;
      transition-timing-function: ease-out;

      &:hover {
        background-color: ${Globals.link.color};
        color: ${Globals.textColor};
      }

      &:active {
        background-color: ${Globals.link.color};
        color: ${Globals.textColor};
      }
    `
    return (
      <a href={this.props.href}>
        <IconStyledComponent>{this.props.children}</IconStyledComponent>
      </a>
    )
  }
}
Icon.propTypes = {}

export { Icon, IconsWrapper }
