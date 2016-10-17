export function uploadVideo(uploadedFileDirectory = 'default') {
  console.log('gets to the action!!!');
  return {
    type: 'UPLOADED_VIDEO',
    uploadedFileDirectory
  }
}
