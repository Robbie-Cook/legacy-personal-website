import React, { Component } from 'react';

function getDimensions(height, width) {
  // Default values
  if( height === undefined ) {
    height = 40
  }
  if( width === undefined ) {
    width = 100
  }

  return <div style={{height: parseInt(height), width: parseInt(width)}}/>
}
// Component for providing space in a UI
class Spacer extends Component {

  render() {
    return (
        getDimensions(this.props.height, this.props.width)
    );
  }
}

export default Spacer;
