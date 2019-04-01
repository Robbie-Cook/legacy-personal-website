// Container that takes a whole page

import React, { Component } from 'react';
import styled from 'styled-components'
import Theme from '../../Theme.js'
import Spacer from '../Spacer.js'

/* Imports */
/* Stylesheets etc. */

// Get theme
const theme = Theme.getTheme()

// Styles for component
const StyledPage = styled.div`

  //  Overwrite bootstrap for containers
  & .container {
    max-width: none;
    padding: 0;
    margin: 0;
  }

  & p {
    margin: 10px 0;
  }

  display: flex;
  flex-direction: row;
  padding: ${theme.page.padding};

  // Mobile styles
  @media (max-width: ${theme.mobile.cutOff}px) {
    flex-direction: column;
    padding: ${theme.mobile.padding}
  }

`
// Spaces the content if required
function getSpacer(spacer) {
  // Add a spacer by default
  if( spacer === true || spacer === undefined) {
    return <Spacer />
  } else {
    return
  }
}

// Main Page component
class Page extends Component {
  render() {
    return (
      <div style={this.props.style}>
        {getSpacer(this.props.spacer)}
        <StyledPage>
            {this.props.children}
        </StyledPage>
      </div>
    );
  }
}

export default Page;
