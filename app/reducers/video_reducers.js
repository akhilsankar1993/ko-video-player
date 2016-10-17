import { combineReducers } from 'redux'

const initialState = {
  uploadedFileDirectory: '',
  sliceData: {}
}

export function videoActionReducers(state=initialState, action) {
  switch (action.type) {
    case 'UPLOADED_VIDEO':
      return Object.assign({}, state, action.uploadedFileDirectory)
    case 'GENERATE_SLICE':
      console.log('gets to generate slice reducer');
      return Object.assign({}, state, action.sliceData)
    default:
      return state
  }
}
