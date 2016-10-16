import React, {Component} from 'react'

export class VideoPlayer extends Component {
  render() {
    return (
      <div id="video-player-wrapper">
        <video id="video-player"
        autoPlay="true"
        width="640"
        height="360"
        preload controls>
          <source src="dravid_drive.mov" type="video/mp4" />
        </video>
      </div>
    )
  }
}
