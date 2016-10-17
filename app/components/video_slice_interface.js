import React, { Component } from 'react'
import { connect } from 'react-redux'
import { generateSlice } from '../actions/video_slice_interface'

export class VideoSliceInterface extends Component {
  render() {
    return (
      <div>
        <h3> Create a Video Slice</h3>
        <div>
          <label htmlFor="slicename">Enter Video Slice Name: </label>
          <input id="slicename" ref="sliceName" type="text" />
        </div>
        <div>
          <label htmlFor="starttime">Enter Start Time: </label>
          <input id="starttime" ref="startTime" type="number" />
        </div>
        <div>
          <label htmlFor="endtime">Enter Start Time: </label>
          <input id="endtime" ref="endTime" type="number" />
        </div>
        <button onClick={this.runGenerateSliceAction.bind(this)}> Create Slice </button>
      </div>
    )
  }

  runGenerateSliceAction() {
    let videoItem = {
      sliceName: this.refs.sliceName.value,
      startTime: this.refs.startTime.value,
      endTime: this.refs.endTime.value
    }

    console.log(videoItem)

    this.props.generateSlice(videoItem)
  }
}

const mapDispatchToProps = { generateSlice }

const mapStateToProps = (state) => {
  return state
}

const ConnectedVideoSliceInterface =
  connect(mapStateToProps, mapDispatchToProps)(VideoSliceInterface)

export default ConnectedVideoSliceInterface
