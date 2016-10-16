import React from 'react'
import ReactDOM from 'react-dom'
import { VideoPlayer } from './lib/react/components/video_player'
import { VideoUploader } from './lib/react/components/video_uploader'

ReactDOM.render(
  <div>
    <VideoUploader />
    <VideoPlayer />
  </div>,
  document.getElementById('root')
)
