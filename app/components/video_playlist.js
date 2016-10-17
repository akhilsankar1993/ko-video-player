import React, { Component } from 'react'
import { connect } from 'react-redux'
import { playNewVideoClip } from '../actions/video_actions'

export class VideoPlaylist extends Component {
  render() {
    return (
      <div>
        <h3>this is the playlist div </h3>
        <ul>
          {this.props.videoItems.map((videoItem, index) =>
            <li key={index}>
              <button onClick={() => this.viewVideoSlice(index)}>
                {videoItem.sliceName}
              </button>
            </li>
          )}
        </ul>
      </div>
    )
  }

  viewVideoSlice(index) {
    this.props.playNewVideoClip(this.props.videoItems, index)
  }
}

const mapStateToProps = (state) => {
  return { videoItems: state.videoActionReducers.videoItems }
}

const mapDispatchToProps = { playNewVideoClip }

const ConnectedVideoPlaylist = connect(mapStateToProps, mapDispatchToProps)(VideoPlaylist)

export default ConnectedVideoPlaylist
