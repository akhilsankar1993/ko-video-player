import React, { Component } from 'react'
import { connect } from 'react-redux'
import { uploadVideo } from '../actions/video_uploader'

class VideoUploader extends Component {
  render() {
    return (
      <div id="video-uploader-wrapper">
        <input id="video-uploader" ref="videoUploaderInput"
          placeholder="upload your video here"
        />
        <button type="submit"
          onClick={this.uploadVideoClick.bind(this)}>
          Upload File
        </button>
      </div>
    )
  }

  uploadVideoClick () {
    let videoFileDirectory = this.refs.videoUploaderInput.value
    this.props.uploadVideo(videoFileDirectory)
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = { uploadVideo }

const ConnectedVideoUploader = connect(mapStateToProps, mapDispatchToProps)(VideoUploader)

export default ConnectedVideoUploader
