import React, { Component } from 'react'
import ConnectedVideoPlayer from './video_player'
import ConnectedVideoUploader from './video_uploader'
import ConnectedVideoSliceInterface from './video_slice_interface'
import ConnectedVideoPlaylist from './video_playlist'


export default class App extends Component {
  render() {
    return (
      <div>
        <ConnectedVideoUploader />
        <ConnectedVideoPlayer
          videoSource={'dravid_drive.mov'}
          type={'video/mp4'}/>
        <ConnectedVideoSliceInterface />
        <ConnectedVideoPlaylist />
      </div>
    )
  }
}
