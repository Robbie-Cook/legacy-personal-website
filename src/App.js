import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage"
import MusicPage from "./components/MusicPage"
import CVPage from "./components/CVPage"
import NavBar from "./components/NavBar"
 
import './bootstrap/css/bootstrap.min.css' // TODO: Change this to react-bootstrap

import './css/global-styles.css'


function Navbar() {
  return <NavBar />;
}

function Index() {
  return <HomePage />;
}

function Music() {
  return <MusicPage />;
}

function CV() {
  return <CVPage />;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={Music} />
        <Route path="/users/" component={CV} />
      </div>
    </Router>
  );
}

export default AppRouter;