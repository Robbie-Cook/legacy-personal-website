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
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: ${theme.pagePadding}

  // Mobile styles
  @media (max-width: ${theme.mobileSizeCutoff}) {
    flex-direction: column;
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
      <div>
        {getSpacer(this.props.spacer)}
        <StyledPage>
            {this.props.children}
        </StyledPage>
      </div>
    );
  }
}

export default Page;
