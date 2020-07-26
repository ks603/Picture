const videoElement = document.getElementById('video')
const button = document.getElementById('button')

// Prompt to select the media strea, pass to video element, then play

const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia()
    videoElement.srcObject = mediaStream
    videoElement.onloadedmetadata = () => {
      videoElement.onplay()
    }
  } catch (error) {
    console.log(error)
  }
}

button.addEventListener('click', async () => {
  button.disabled = true
  await videoElement.requestPictureInPicture()
  button.disabled = false
})

// On Load
selectMediaStream()
