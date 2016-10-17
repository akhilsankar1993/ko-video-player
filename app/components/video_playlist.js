import React, { Component } from 'react'
import { connect } from 'react-redux'

export class VideoPlaylist extends Component {
  render() {
    return (
      <div>
        <h3>this is the playlist div </h3>
        <ul>
          {this.props.videoItems.map((videoItem, index) =>
            <li key={index}>
              {videoItem.sliceName}
            </li>
          )}
        </ul>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return { videoItems: state.videoActionReducers.videoItems }
}

const ConnectedVideoPlaylist = connect(mapStateToProps)(VideoPlaylist)

export default ConnectedVideoPlaylist
