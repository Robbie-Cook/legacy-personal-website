/* Heading section for a page */
import styled from "styled-components";
import React, { Component } from 'react';

/* Get appropriate heading */
function getHeading(type, content) {
  const H1 = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 50px;
  font-weight: bold
  `
  
  // H2 inherits and overrides styles from H1
  const H2 = styled(H1)`
  font-size: 40px
  `
    if( type === 'h1' || type === undefined) {
      return <H1>{content}</H1> 
    } else if (type === 'h2') {
      return <H2>{content}</H2>
    }
}


// Main Page component
class Heading extends Component {
  render() {
    return (
        getHeading(this.props.type, this.props.children)
        // this.props.children
    );
  }
}

class H1 extends Component {
  render() {
    return (
       <h1>{this.props.children}</h1> 
    );
  }
}

class H2 extends Component {
  render() {
    return (
       <h2>{this.props.children}</h2> 
    );
  }
}
export default Heading;