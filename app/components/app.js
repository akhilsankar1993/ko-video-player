import React, { Component } from 'react'
import { VideoPlayer } from './video_player'
import ConnectedVideoUploader from './video_uploader'
import ConnectedVideoSliceInterface from './video_slice_interface'
import ConnectedVideoPlaylist from './video_playlist'


export default class App extends Component {
  render() {
    return (
      <div>
        <ConnectedVideoUploader />
        <VideoPlayer />
        <ConnectedVideoSliceInterface />
        <ConnectedVideoPlaylist />
      </div>
    )
  }
}
