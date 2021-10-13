import React from "react";
import YouTube from "react-youtube";

class AdYoutube extends React.Component {
  render() {
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return <YouTube videoId="KrABoQuG4oU" opts={opts} />;
  }
}

export default AdYoutube;
