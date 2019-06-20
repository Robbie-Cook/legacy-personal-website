import Globals from "./Globals"
import React, { Component } from "react"
import PropTypes from "prop-types"

/**
 * Styles to apply when screen is mobile-sized
 */
class MobileView {
  constructor(style) {
    this.style = style
  }

  toString() {
    const mobileSize = "900"
    return (`
      @media (max-width: ${mobileSize}px) {
        ${this.style};
      }`
    )
  }
}

export { MobileView }
