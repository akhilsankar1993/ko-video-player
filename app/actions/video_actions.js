export function uploadVideo(uploadedFileDirectory = 'default') {
  return {
    type: 'UPLOADED_VIDEO',
    uploadedFileDirectory
  }
}

export function generateSlice(videoItem = {}) {
  console.log("gets to generate slice action");
  return {
    type: 'GENERATE_SLICE',
    videoItem
  }
}

export function playNewVideoClip(videoItems, index) {
  return {
    type: 'PLAY_VIDEO',
    targetVideoItem: videoItems[index]
  }
}
