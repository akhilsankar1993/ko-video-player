import React, { Component } from 'react'
import ConnectedVideoPlayer from './video_player'
import ConnectedVideoUploader from './video_uploader'
import ConnectedVideoSliceInterface from './video_slice_interface'
import ConnectedVideoPlaylist from './video_playlist'
import { connect } from 'react-redux'
import { playNewVideoClip } from '../actions/video_actions'


export class App extends Component {
  render() {
    return (
      <div>
        <ConnectedVideoUploader />
        <ConnectedVideoPlayer />
        <ConnectedVideoSliceInterface />
        <ConnectedVideoPlaylist />
      </div>
    )
  }

  componentWillMount() {
    let UPLOADED_VIDEO_ITEM = [
      {
        videoSource: 'dravid_drive.mov',
        sliceName: '',
        startTime: '',
        endTime: ''
      }
    ]

    this.props.playNewVideoClip(UPLOADED_VIDEO_ITEM)

  }

}

const mapDispatchToProps = { playNewVideoClip }

const mapStateToProps = (state) => { return state }

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedApp

// videoSource={'dravid_drive.mov'}
// type={'video/mp4'}/>
