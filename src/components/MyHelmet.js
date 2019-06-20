// Metadata for each page

import React from "react"
import { Helmet } from "react-helmet"
import Colors from "./Colors"

class MyHelmet extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          {/* Google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400,700&display=swap"
            rel="stylesheet"
          />

          <title>Robbie Cook</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}

          <style>{`body { background-color: ${
            Colors.page.backgroundColor
          }; }`}</style>
        </Helmet>
      </div>
    )
  }
}

export default MyHelmet
