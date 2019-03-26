// Container that takes a whole page

import React, { Component } from 'react';

/* Imports */
/* Stylesheets etc. */

// Styles for component
let pageStyles = {
  display: 'flex',
  height: '100vh',
}

// Creates an inner div with overflow hidden if requireds
class InnerDiv extends Component {
  render() {
    if( this.props.overflowHidden === 'true' ) {
      return (
        <div style={{display: 'flex', overflow: 'hidden', width: '100%'}}>
            {this.props.children}
        </div>
      );
    } else {
      return (
        <div style={{display: 'flex', width: '100%'}}>
          {this.props.children}
        </div>  
      )
    }
  }
}
// Main Page component
class Page extends Component {
  render() {
    return (
        <div class="page" style={pageStyles}>
          
          <InnerDiv overflowHidden={this.props.overflowHidden}>
            {this.props.children}
          </InnerDiv>
        </div>
    );
  }
}

export default Page;
