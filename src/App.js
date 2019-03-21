import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./components/HomePage"
import MusicPage from "./components/MusicPage"
import CVPage from "./components/CVPage"
import NavBar from "./components/NavBar"
import AboutPage from "./components/AboutPage"

import MyLink from './MyLink.js'
 
import './bootstrap/css/bootstrap.min.css' // TODO: Change this to react-bootstrap

import './css/global-styles.css'

// Generate routing JSX for page components

function AppRouter() {

  /* Setup navigation links here as objects*/
  let navigationLinks = [
    new MyLink("Home", "/", () => <HomePage />, true),
    new MyLink("Music", "/music",() =>  <MusicPage />),
    new MyLink("About", "/about", () => <AboutPage />),
  ]
  let navigationRoutes = []

  for(let item of navigationLinks) {
    let route = <Route path={item.path} component={item.component} />;
    if (item.exact) {
      route = <Route exact path={item.path} component={item.component} />
    }
    navigationRoutes.push(route)
  }

  
  return (
    <div>
    <Router>
      <div>
        <NavBar pages={navigationLinks}/>
        {navigationRoutes}
      </div>
    </Router>
    </div>
  );
}

export default AppRouter;