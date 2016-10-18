import React, { Component } from 'react'
import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'

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

  componentDidMount() {
    this.refs.videoSourceRef.src = this.props.videoSource
  }

  componentDidUpdate() {

    const { videoSource, startTime, endTime } = this.props
    if(startTime === '') {
      this.refs.videoSourceRef.src = videoSource
      findDOMNode(this.refs.videoPlayer).load()
    } else {
      this.refs.videoSourceRef.src = `${videoSource}#t=${startTime},${endTime}`
      findDOMNode(this.refs.videoPlayer).load()
    }
  }

}

const mapStateToProps = (state) => {
  return state.videoActionReducers.targetVideoItem
}

const ConnectedVideoPlayer = connect(mapStateToProps)(VideoPlayer)

export default ConnectedVideoPlayer
