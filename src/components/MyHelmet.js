// Metadata for each page

import React from "react"
import { Helmet } from "react-helmet"
import Globals from "./Globals"

class MyHelmet extends React.Component {
  render() {
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

          <style>{`body { background-color: ${Globals.page.backgroundColor}; }`}</style>
        </Helmet>
      </div>
    )
  }
}

export default MyHelmet
