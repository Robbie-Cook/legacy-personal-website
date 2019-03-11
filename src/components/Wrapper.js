import React, { Component } from 'react';

// Template Page component
// A component designed to be used with every page
class Wrapper extends Component {
  render() {
    return (

        <body>
          {/* Begin page content */}
          <main role="main">
            {this.props.children}
          </main>
      </body>
    );
  }
}

export default Wrapper;
