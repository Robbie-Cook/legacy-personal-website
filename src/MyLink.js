/* Defines a page link */
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";

class MyLink {
    constructor(name, path, component, exact=false) {
        this.name = name
        this.path = path
        this.component = component // the React component to link to a page
        this.exact = exact // whether or not the path has to be exact
    }

    // Convert navbar link to a Router element
    getRoute() {
        let route = <Route path={this.path} component={this.component} />;
        if (this.exact) {
          route = <Route exact path={this.path} component={this.component} />
        }
        return route
    }

    // Get link to page
    getLink() {
        
    }

}
export default MyLink;