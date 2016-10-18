export function uploadVideo(uploadedFileDirectory = 'default') {
  return {
    type: 'UPLOADED_VIDEO',
    uploadedFileDirectory
  }
}

export function generateSlice(videoItem = {}) {
  return {
    type: 'GENERATE_SLICE',
    videoItem
  }
}

export function playNewVideoClip(videoItems, index=0) {
  return {
    type: 'PLAY_VIDEO',
    targetVideoItem: videoItems[index]
  }
}
