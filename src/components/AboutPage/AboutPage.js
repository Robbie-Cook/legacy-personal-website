import React, { Component } from 'react';

/* Imports */
import Page from '../Page/Page'
import Heading from '../Heading'
import { Row, Col, Container } from '../Wrappers'
import Spacer from '../Spacer'
import Theme from '../../Theme.js'

/* Stylesheets etc. */
import './index.css'

/* Carousel */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const theme = Theme.getTheme()

/* Media */

// Import all photos from carousel folder
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../photos/carousel/', false, /\.(png|jpe?g|svg)$/));

/* Represents a photo */
class Photo {
  constructor(image, altText, legend = altText) {
    this.image = image;
    this.altText = altText;
    this.legend = legend;
  }
}

// Generate a single carousel element for a photo
function getCarouselPhotos() {
  let photoJsxArray = []
  for (let item of images) {
    photoJsxArray.push(<div>
      <img src={item} className="carouselImage" />
    </div>)
  }
  return photoJsxArray
}

let carouselStyles = {
  height: 200,
}

// Main Page component
class AboutPage extends Component {
  render() {
    return (

      <Page>
        <Container>
          <Heading type="h2">About</Heading>
          <Row>
            <Col>

              <p>
                Hi! I'm a 22-year-old developer, currently working in .NET :).
                  Check out my Github page <a href="https://github.com/Robbie-Cook">here</a> for a list of
                projects I am working on.
                  </p>
              <p>
                I studied at Otago University in Dunedin; where I got an Honours degree
                in Computer Science and worked as a lab demonstrator for Python and Java students.
                I also did some Disabilities tutoring for the University as well in my final year.
                  </p>
              <p>
                At the moment, I am learning about SQL, web apps, and React.
                  </p>
              <p>
                I have experience
                with Linux systems, LaTeX and Machine Learning (e.g. tensorflow).
                  </p>
              <p>
                In my spare time, I like to swim, gym, and play guitar and piano.
                  </p>
            </Col>
            <Col>
              <div className="carouselColumn">
                <Carousel style={carouselStyles} showThumbs={false}>
                  {getCarouselPhotos()}
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </Page>
    );
  }
}

export default AboutPage;
