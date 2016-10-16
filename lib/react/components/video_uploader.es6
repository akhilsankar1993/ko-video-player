import React, { Component } from 'react'

export class VideoUploader extends Component {
  render() {
    return (
      <div id="video-uploader-wrapper">
        <input id="video-uploader"
          placeholder="add your video here"
        />
        <button type="submit">
          Upload File
        </button>
      </div>
    )
  }
}
