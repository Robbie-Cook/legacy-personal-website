import Globals from "../components/Globals"
import React, { Component } from "react"
import PropTypes from 'prop-types';

class MobileView {
  render() {
    return(
      `@media (max-width: ${Globals.mobile.size}px) {
        ${this.props.style}
      }`
    )
  }
}

export {MobileView};