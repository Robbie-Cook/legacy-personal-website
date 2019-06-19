/*
Styling for entire website. All common variables are being migrated here from
css/global-styles.css. It is a work in progress.
*/
import Dimensions from "./Dimensions"

class Globals {
  static centralTextColor = "#dcd6ce"
  static textColor = this.centralTextColor
  static backgroundColor = "#0f0f0f"
  
  // Link color
  static link = {
      color: '#6385a9', // also defined in global-styles.css
      colorActive: '#1565c0',
      colorHighlight: '#6385a9'
  }

  static text = {
      color: '#dcd6ce' // also defined in global-styles.css
  }

  static page = {
    padding: new Dimensions(40, 90, 0, 90),
    item: {
      padding: new Dimensions(0, 20),
    },
    backgroundColor: '#0f0f0f',
    secondaryColor: '#EB6D6D', // reddish
  }

  // Navbar styles
  static navbar = {
    height: "64",
    textColor: this.centralTextColor,
    textColorHighlight: this.link.color,
    activeLinkColor: this.link.color,
    font: "'Roboto Slab', sans-serif",
    padding: new Dimensions(0, 90),
    // Navbar border styles
    border: {
      backgroundColor: super.textColor,
    },
  }

  static mobile = {
    colMargin: new Dimensions(0, 20, 20, 20),
    size: "900",
    padding: new Dimensions(20, 30),
    navbar: {
      padding: new Dimensions(20, 40),
    },
  }
}

export default Globals
