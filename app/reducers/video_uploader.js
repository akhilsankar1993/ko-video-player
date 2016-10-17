import { combineReducers } from 'redux'

const initialState = {
  uploadedFileDirectory: ''
}

export function uploadVideo(state=initialState, action) {
  switch (action.type) {
    case 'UPLOADED_VIDEO':
      // return {
      //   ...state,
      //   action.uploadedFileDirectory
      // }
      return Object.assign({}, state, action.uploadedFileDirectory)
    default:
      return state
  }
}
