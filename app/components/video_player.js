import React, { Component } from 'react'
import { connect } from 'react-redux'

export class VideoPlayer extends Component {
  render() {

    console.log('reaches the render method');

    return (
      <div id="video-player-wrapper">
        <video id="video-player"
        ref="videoPlayer"
        autoPlay="true"
        width="640"
        height="360"
        preload controls>
          <source
            ref='videoSourceRef'
            type={this.props.type || 'video/mp4'}
          />
        </video>
        <button onClick={this.viewState.bind(this)} />
      </div>
    )
  }

  viewState() {
    console.log(this.props);
  }

  componentDidUpdate() {
    const { videoSource, startTime, endTime } = this.props
    if(startTime === '') {
      this.refs.videoSourceRef.src = videoSource
    } else {
      this.refs.videoSourceRef.src = `${videoSource}.mp4#t=${startTime},${endTime}`
    }
  }

}

const mapStateToProps = (state) => {
  return state.videoActionReducers.targetVideoItem
}

const ConnectedVideoPlayer = connect(mapStateToProps)(VideoPlayer)

export default ConnectedVideoPlayer
