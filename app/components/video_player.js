import React, { Component } from 'react'
import { connect } from 'react-redux'

export class VideoPlayer extends Component {
  render() {
    return (
      <div id="video-player-wrapper">
        <video id="video-player"
        ref="videoPlayer"
        autoPlay="true"
        width="640"
        height="360"
        preload controls>
          <source
            src={this.props.videoSource}
            type={this.props.type}
          />
        </video>
        <button onClick={this.viewState.bind(this)} />
      </div>
    )
  }

  viewState() {
    console.log(this.props);
  }

}

const mapStateToProps = (state) => {
  return state.videoActionReducers.targetVideoItem
}

const ConnectedVideoPlayer = connect(mapStateToProps)(VideoPlayer)

export default ConnectedVideoPlayer
