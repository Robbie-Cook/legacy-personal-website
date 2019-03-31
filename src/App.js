import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage"
import MusicPage from "./components/MusicPage/MusicPage"
import CVPage from "./components/CVPage/CVPage"
import NavBar from "./components/NavigationBar/NavigationBar"
import AboutPage from "./components/AboutPage/AboutPage"

import MyLink from './MyLink.js'

import './css/global-styles.css'

// Generate routing JSX for page components

function AppRouter() {

  /* Setup navigation links here as objects*/
  let navigationLinks = [
    new MyLink("Home", "/", () => <HomePage />, true),
    new MyLink("About", "/about", () => <AboutPage />),
    new MyLink("Music", "/music", () => <MusicPage />),
  ]
  
  let navigationRoutes = []
  for (let item of navigationLinks) {
    navigationRoutes.push(item.getRoute())
  }

  return (
    <div>
      <Router>
        <div>
          <NavBar pages={navigationLinks} />
          <div>
            {navigationRoutes}
          </div>
        </div>
      </Router>
    </div>
  );
}

export default AppRouter;