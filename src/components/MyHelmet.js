// Metadata for each page

import React from "react"
import { Helmet } from "react-helmet"

class MyHelmet extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" /> 
          <title>Robbie Cook</title>
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        </Helmet>
      </div>
    )
  }
}

export default MyHelmet


