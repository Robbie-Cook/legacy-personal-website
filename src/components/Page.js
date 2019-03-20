// Container that takes a whole page

import React, { Component } from 'react';

/* Imports */
/* Stylesheets etc. */

// Main Page component
class Page extends Component {
  render() {
    return (
        <div class="page">
            {this.props.children}
        </div>
    );
  }
}

export default Page;
