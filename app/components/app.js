import React, { Component } from 'react'
import { VideoPlayer } from './video_player'
import { VideoUploader } from './video_uploader'

export default class App extends Component {
  render() {
    return (
      <div>
        <VideoUploader />
        <VideoPlayer />
      </div>
    )
  }
}
