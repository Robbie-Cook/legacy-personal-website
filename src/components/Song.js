import React, { Component, PureComponent } from "react"

/* Imports */
/* Stylesheets etc. */
import { Heading, Text as span } from "../components/Typography"
import WebPage from "../components/Page"
import { Container } from "../components/Wrappers"
import { Col, Row, LayoutWrapper } from "../components/Layout"
import styled from "styled-components"
import PropTypes from "prop-types"

// Music imports
import playIcon from "../photos/icons/musicPlay.svg"

/**
 * Used by Song to represent a spotify song
 */
class SpotifySong extends PureComponent {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <iframe
        src={`https://open.spotify.com/embed/track/${this.props.spotifySongId}`}
        width="300"
        height="80"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    )
  }
}
SpotifySong.propTypes = {
  spotifySongId: PropTypes.string,
}

/**
 * Represents a track UI on the page
 */
class Song extends Component {
  constructor(props) {
    super(props)
    this.state = { spotifyActive: false }
  }

  spotifyEmbed = <SpotifySong spotifySongId={this.props.spotifySongId} />

  render() {
    const SongWrapper = styled.div`
      display: flex;
      flex-direction: column;
    `

    const PlayButton = styled.img`
      width: 36px;
      margin-right: 15px;
    `

    const SongName = styled.span`
      display: flex;
      align-items: center;
      margin-right: 10px;
      font-size: 1.25em;
    `

    const ArtistName = styled.span`
      display: flex;
      align-items: center;
      color: #ff7b7b;
      font-size: 11pt;
    `

    const Line1 = styled.div`
      display: flex;
      flex-direction: row;
    `

    const SpotifyWrapper = styled.div`
      height: ${this.state.spotifyActive ? "80px" : "0"};
      overflow: hidden;

      & div:empty {
        background-color: orange;
      }
    `

    return (
      <SongWrapper
        onClick={() => {
          this.setState({ spotifyActive: !this.state.spotifyActive })
        }}
      >
        <Line1>
          <PlayButton src={playIcon} />
          <SongName>{this.props.name}</SongName>
          <ArtistName>{this.props.artist}</ArtistName>
        </Line1>
        <SpotifyWrapper>{this.spotifyEmbed}</SpotifyWrapper>
      </SongWrapper>
    )
  }
}
Song.propTypes = {
  name: PropTypes.string.isRequired,
  artist: PropTypes.string,
  spotifySongId: PropTypes.string,
}

export default Song
