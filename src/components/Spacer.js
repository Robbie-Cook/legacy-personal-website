import React, { Component } from 'react';


function getDimensions(givenHeight) {
    if( givenHeight !== undefined) {
        return <div style={{height: givenHeight, width: 100}}/>
    } else {
        return <div style={{height: 40, width: 100}}/>
    }
}
// Main Page component
class Spacer extends Component {
  render() {
    return (
        getDimensions(this.props.height)
    );
  }
}

export default Spacer;
