import React, { Component } from 'react'
import { connect } from 'react-redux'

export class VideoUploader extends Component {
  render() {
    return (
      <div id="video-uploader-wrapper">
        <input id="video-uploader" ref="videoUploaderInput"
          placeholder="add your video here"
        />
        <button type="submit"
          onClick={this.uploadVideoClick.bind(this)}>
          Upload File
        </button>
      </div>
    )
  }

  uploadVideoClick () {
    console.log(this.refs.videoUploaderInput.value)
    console.log(this.props)
  }
}

const mapStateToProps = (state) => {
  return state
}

const ConnectedVideoUploader = connect(mapStateToProps)(VideoUploader)

export default ConnectedVideoUploader
