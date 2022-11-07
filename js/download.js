const imageInput = document.querySelector('.input__file')
imageInput.onchange = showImage

function showImage () {
  let file = this.files[0]

  let reader = new FileReader()
  reader.readAsDataURL(file)

  reader.onload = function () {
    image.src = reader.result
  }
  reader.error = function () {
    alert('Ошибка при загрузке изображения')
  }
}