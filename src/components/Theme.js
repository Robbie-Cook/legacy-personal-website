/*
Styling for entire website. All common variables are being migrated here from
css/global-styles.css. It is a work in progress.
*/
// Class converting css-style dimensions (padding etc.) to an object
class Dimensions {
  // e.g. padding: 0 5px;
  constructor(top, right, bottom = top, left = right) {
    // String values given
    if (typeof top === "string") {
      this.top = top
      this.right = right
      this.bottom = bottom
      this.left = left
    } else {
      // Numeric values given
      this.top = `${top}px`
      this.right = `${right}px`
      this.bottom = `${bottom}px`
      this.left = `${left}px`
    }
  }

  toString() {
    return `${this.top} ${this.right} ${this.bottom} ${this.left}`
  }
}

class Theme {
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
  }

  // Navbar styles
  static navbar = {
    height: "56px",
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
    cutOff: "900",
    padding: new Dimensions(20, 20),
    navbar: {
      padding: new Dimensions(20, 40),
    },
  }
}

export default Theme
