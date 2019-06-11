import Globals from "../components/Globals"
import React, { Component } from "react"
import PropTypes from "prop-types"

/**
 * Media query for mobile 
 */
class MobileMediaQuery {
  constructor(style) {
    this.style = style;
  }

  toString() {
    return (
      `@media (max-width: ${Globals.mobile.size}px) {
          ${this.style};
        }`
    );
  }
}

export { MobileMediaQuery }
