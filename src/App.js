import React, { Component } from 'react';

/* Stylesheets etc. */
import './bootstrap/css/bootstrap.min.css'
import './fontawesome/css/all.css'
import './styles.css'
import me from './photos/me_irl3_cropped.jpg'

// Main App component
class App extends Component {
  render() {
    return (

        <body>

          <header>
            {/* Fixed navbar */}
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <a class="navbar-brand" href="#"></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                  </li>
                  {/*}<li class="nav-item">
                    <a class="nav-link" href="#">Projects</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                  </li>*/}
                </ul>
              </div>
            </nav>
          </header>

          {/* Begin page content */}
          <main role="main">
            <div class="page">
              <div class="padder">
              </div>
              <div class="mainInfo">
                <h1>Robbie Cook</h1>
                <p>
                  Hello! I'm a developer &amp; creator in Otago, New Zealand.
                  I love swimming, running, Spanish, and coding.
                </p>
                <div class="iconWrapper">
                  <a href="https://github.com/Robbie-Cook"><i class="icon fab fa-github-square"></i></a>
                  <a href="https://www.linkedin.com/in/robbie-cook/"><i class="icon fab fa-linkedin"></i></a>
                  <div class="iconWrapper2">
                    <a href="mailto:robbieck7@gmail.com">
                      <i class="icon fas fa-envelope-square"></i>
                       <span>robbieck7@gmail.com</span>
                     </a>
                  </div>

                </div>
              </div>
              <div class="fader">
                <div class="fadingElement">
                </div>
                <img src={me} style={{height:'100%'}}/>
              </div>
            </div>
          </main>

          <script src="jquery.min.js"></script>
          <script src="bootstrap/js/bootstrap.min.js"></script>
      </body>
    );
  }
}

export default App;
