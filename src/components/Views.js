import Globals from "./Globals"
import React, { Component } from "react"
import PropTypes from "prop-types"

/**
 * Media query for mobile 
 */
class MobileView {
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

export { MobileView }
