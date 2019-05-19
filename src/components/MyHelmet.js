// Metadata for each page

import React from "react"
import { Helmet } from "react-helmet"
import Theme from "./Theme"

class MyHelmet extends React.Component {
  render() {
    const loadingPageStyles = `width: 100%;
      height: 100%;
      background-color: ${Theme.page.backgroundColor};
      position: fixed;
      z-index: 100;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;`

    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Robbie Cook</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
          {/* Styles for loading page */}

          <div className="loadingPage" styles={loadingPageStyles}>
            <i class="spinner fas fa-circle-notch" />
          </div>
        </Helmet>
      </div>
    )
  }
}

export default MyHelmet
