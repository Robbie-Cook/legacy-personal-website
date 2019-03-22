import React, { Component } from 'react';


function getDimensions(height, width) {
  if( height === undefined ) {
    height = 40
  }
  if( width === undefined ) {
    width = 100
  }
  return <div style={{height: parseInt(height), width: parseInt(width)}}/>
}
// Main Page component
class Spacer extends Component {
  render() {
    return (
        getDimensions(this.props.height, this.props.width)
    );
  }
}

export default Spacer;
