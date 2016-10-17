export function uploadVideo(uploadedFileDirectory = 'default') {
  return {
    type: 'UPLOADED_VIDEO',
    uploadedFileDirectory
  }
}
