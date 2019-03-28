import React, { Component } from 'react';

/* Imports */
import { Container, Row, Col } from 'react-bootstrap'
import Page from '../Page/Page'
import Spacer from '../Spacer'
import Heading from '../Heading'

/* Stylesheets etc. */
import './index.css'

/* Carousel */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

/* Media */
import photo1 from '../../photos/aboutImage.jpg'
import photo2 from '../../photos/aboutImage2.jpg'

/* Represents a photo */
class Photo {
  constructor(image, altText, legend = altText) {
    this.image = image;
    this.altText = altText;
    this.legend = legend;
  }
}

// Photo array
let photos = [
  new Photo(photo1, "Me in Christchurch"),
  new Photo(photo2, "My library desk in Dunedin")
]

// Generate a single carousel element for a photo
function getCarouselPhotos() {
    let photoJsxArray = []
    for(let item of photos) {
     photoJsxArray.push(<div>
        <img src={item.image} alt={item.altText} className="carouselImage"/>
        <p className="legend">{item.legend}</p>
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
            <Row>
              <Col>
                <Heading type="h2">
                  About me
                </Heading>
                <p>
                  Hi! I'm a 22-year-old developer currently living in Auckland.
                  I work in .NET for an Auckland software company.

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
