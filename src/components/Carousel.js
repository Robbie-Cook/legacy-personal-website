import React, { Component } from "react"
import PropTypes from "prop-types"
/* Carousel */
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel as ReactCarousel } from "react-responsive-carousel"
import styled from "styled-components"
import { MobileView } from "./Views"
import Colors from "./Colors"

/*
 * An image carousel
 */
class Carousel extends Component {

  // Generate a single carousel element for a photo
  getCarouselPhotoElement(photos) {
    // this.importAll(
    //   require.context(directory, false, /\.(png|jpe?g|svg)$/)
    // )

    const StyledImg = styled.img`
      max-height: 300px;
      width: auto !important;
    `

    let photoJsxArray = []
    for (let item of photos) {
      photoJsxArray.push(
        <div>
          <StyledImg src={item} />
        </div>
      )
    }
    return photoJsxArray
  }

  render() {
    const CarouselWrapper = styled.div`
      display: flex;
      height: 100%;
      align-items: center;
      & > div {
        overflow: hidden!important;
        width: 100%;
        border: 4px solid ${Colors.textColor};
      }
    `

    return (
      <CarouselWrapper>
        <ReactCarousel showThumbs={false}>
          {this.getCarouselPhotoElement(this.props.photos)}
        </ReactCarousel>
      </CarouselWrapper>
    )
  }
}
ReactCarousel.propTypes = {
  photos: PropTypes.any,
}

export default Carousel
