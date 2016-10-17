import { combineReducers } from 'redux'
import { uploadVideo as uploadedVideoString } from './video_uploader'

export const videoApp = combineReducers({
  uploadedVideoString
})
