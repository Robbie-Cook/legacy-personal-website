// Metadata for each page

import React from "react"
import { Helmet } from "react-helmet"
import Theme from "./Theme"
import styled from "styled-components"

class MyHelmet extends React.Component {
  render() {
    const MyLoadingPage = styled.div`
      width: 100%;
      height: 100%;
      backgroundcolor: ${Theme.page.backgroundColor};
      position: fixed;
      zindex: 100;
      top: 0;
      display: flex;
      justifycontent: center;
      alignitems: center;
    `

    /* Styles for spinner */
    const MyI = styled.i`
      ::before {
        font-size: 7em;
      }
    `
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

          <MyLoadingPage className="loadingPage">
            <MyI class="spinner fas fa-circle-notch" />
          </MyLoadingPage>
        </Helmet>
      </div>
    )
  }
}

export default MyHelmet
