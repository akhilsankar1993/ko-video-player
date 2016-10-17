export function generateSlice(videoItem = {}) {
  console.log("gets to generate slice action");
  return {
    type: 'GENERATE_SLICE',
    videoItem
  }
}
