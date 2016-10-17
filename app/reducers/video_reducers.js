import { combineReducers } from 'redux'

const initialState = {
  uploadedFileDirectory: '',
  videoItems: []
}

export function videoActionReducers(state=initialState, action) {
  switch (action.type) {
    case 'UPLOADED_VIDEO':
      return Object.assign({}, state, action.uploadedFileDirectory)
    case 'GENERATE_SLICE':
      return { ...state, videoItems: [...state.videoItems, action.videoItem] }
    default:
      return state
  }
}
