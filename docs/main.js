const inputVideo = document.querySelector('#inputVideo');
const outputVideo = document.querySelector('#outputVideo');
const outputCanvas = document.querySelector('#outputCanvas');
const outputContext = outputCanvas.getContext('2d');
outputVideo.autoplay = true;

if (inputVideo.videoWidth) {
    prepareCanvas();
} else {
    inputVideo.onloadedmetadata = evt => {
        prepareCanvas();
    }
}

function prepareCanvas() {
    outputCanvas.width = inputVideo.videoWidth;
    outputCanvas.height = inputVideo.videoHeight;
    const stream = inputVideo.captureStream();
    outputVideo.srcObject = stream;
}

function render() {
    requestAnimationFrame(render);
    outputContext.drawImage(inputVideo, 0, 0);
}
render();