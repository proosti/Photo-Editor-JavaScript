const resetButton = document.querySelector('li.reset__button')
const saveButton = document.querySelector('li.save__button')
const downloadButton = document.querySelector('li.download__button')

//reset
resetButton.addEventListener('click', reset)
function reset () {
  image.style.transform = `matrix(1, 0, 0, 1, 0, 0)`
  image.style.filter = `blur(0px) brightness(1) contrast(1)`
  sideway = 0
  flipedHorizontal = false
  flipedVertical = false
  zoomRange.value = 0
  blurRange.value = 0
  brightnessRange.value = 1
  contrastRange.value = 1
   matrix = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    tx: 0,
    ty: 0
  }
  currentFilter = {
    blur: 0,
    brightness: 1,
    contrast: 1
  }
  downloadButton.classList.add('hidden')
  saveButton.classList.remove('hidden')
}

//save and download
document.getElementById("get_images").onclick = function() {
  const node = document.getElementById('content');
  downloadButton.classList.remove('hidden')
  saveButton.classList.add('hidden')

  domtoimage.toPng(node)
  .then(function (dataUrl) {
    let img = new Image();
    img.src = dataUrl;
    img.id = 'rendered__img'
    const downloadButton = document.getElementById('download')
    downloadButton.href = dataUrl
    console.log(downloadButton)  
  })
  .catch(function (error) {
    console.error('oops, something went wrong!', error);
  });  
};


