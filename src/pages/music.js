import React, { Component } from "react";
import { BorderBox } from "../components/Boxes";
import { Col, LayoutWrapper, Row } from "../components/Layout";
import MusicPlayer from "../components/music/Player";
import Playlist from "../components/music/Playlist";
import Song from "../components/music/Song";
import WebPage from "../components/Page";
/* Imports */
/* Stylesheets etc. */
import { Heading, Text } from "../components/Typography";
import playlistTwoJson from "../data/spotify/playlists/opera.json";
import playlistOneJson from "../data/spotify/playlists/veryImportantAndVeryPretentious.json";
/** Media */
import meOnGuitar from "../photos/music/meOnGuitar.png";

// Main Page component
class MusicPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSong: {
        type: "spotify",
        id: "6h4lC9aNr6NuQzZkbw5Lqm",
      },
    }
  }
  render() {
    return (
      <WebPage>
        <LayoutWrapper>
          <Heading>Music</Heading>
          <Row>
            <Col width="100%">
              <Text>
                I love music. I'm always listening to something. I have put a
                bunch of my favourite songs below.
              </Text>
              <Text>
                I play a little piano and guitar myself in my spare time.
              </Text>
            </Col>
          </Row>
          <Heading type="h2">Favourite Songs</Heading>
          <Row>
            <Col width="50%">
              <Song
                name="Diplomat's Son"
                artist="Vampire Weekend"
                spotifySongId="6h4lC9aNr6NuQzZkbw5Lqm"
              />

              <Song
                name="Was It Something I Said?"
                artist="The Killers"
                spotifySongId="30QDlhm7KPJIgQIvptJcsg"
              />

              <Song
                name="You Shook Me All Night Long"
                artist="AC/DC"
                spotifySongId="30QDlhm7KPJIgQIvptJcsg"
              />

              <Song
                name="Just Another Girl"
                artist="The Killers"
                spotifySongId="3aVyHFxRkf8lSjhWdJ68AW"
              />
            </Col>
            <Col width="50%">
              <Song
                name="Tidal Wave"
                artist="The Killers"
                spotifySongId="2SiXAy7TuUkycRVbbWDEpo"
              />

              <Song
                name="Mr. Jones"
                artist="Counting Crows"
                spotifySongId="7n3REqDfZBpkd0bEpGu2H3"
              />

              <Song
                name="Diane Young"
                artist="Vampire Weekend"
                spotifySongId="104pmtTQOlmW8Zt2BipGKH"
              />
            </Col>
          </Row>

          <Heading type="h2">Playlists</Heading>
          <Row>
            <Col width="100%">
              <BorderBox
                width="100%"
                height="423px"
                horizontalScroll={true}
                style={""}
              >
                <Playlist jsonData={playlistOneJson} />
                <Playlist jsonData={playlistTwoJson} />
              </BorderBox>
            </Col>
          </Row>

          <Heading type="h2">My Music</Heading>
          <Row>
            <Col width="50%">
              <iframe
                width="100%"
                height="450"
                scrolling="yes"
                frameborder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/39548578&color=%23222121&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false"
              />
            </Col>
            <Col width="50%">
              {/* Photo of me. Needs to be converted to carousel*/}
              <img
                src={meOnGuitar}
                style={{ width: "100%", alignItems: "flex-start" }}
                alt="Photo of me playing guitar"
              />
            </Col>
          </Row>
        </LayoutWrapper>
        {/* Music player at the bottom of the screen */}
        <MusicPlayer currentSong={this.state.currentSong} />
      </WebPage>
    )
  }
}

export default MusicPage
