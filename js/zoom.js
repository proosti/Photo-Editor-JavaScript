const image = document.querySelector('img.image')
const frame = document.querySelector('.frame')
const rotateLeftButton = document.querySelector('.rotate__left')
const rotateRightButton = document.querySelector('.rotate__right')
const flipHorizontalButton = document.querySelector('.flip__horizontal')
const flipVerticalButton = document.querySelector('.flip__vertical')
const zoomRange = document.getElementById('zoom')
const zoomMinus = document.querySelector('.zoom__icon__minus')
const zoomPlus = document.querySelector('.zoom__icon__plus')
let x = 0
let sideway = 0
/*
  top: 0,
  right: 1,
  bottom: 2,
  left: 3
*/
let flipedHorizontal = false
let flipedVertical = false
let matrix = {
  a: 1,
  b: 0,
  c: 0,
  d: 1,
  tx: 0,
  ty: 0
}

//zoom
zoomMinus.onclick = function zoomingMinus () {
  zoomRange.value = Number(zoomRange.value) - 0.1
  zooming()
}

zoomPlus.onclick = function zoomingPlus () {
  zoomRange.value = Number(zoomRange.value) + 0.1
  zooming()
}

zoomRange.onchange = zooming
function zooming () {
  if (sideway == 0 && flipedHorizontal == false) {
    matrix.a = zoomRange.value
    matrix.d = zoomRange.value
  }
  if (sideway == 2 && flipedHorizontal == false) {
    matrix.a = - zoomRange.value
    matrix.d = - zoomRange.value
  }
  if (sideway == 3 && flipedHorizontal == false) {
    matrix.b = zoomRange.value
    matrix.c = zoomRange.value
  }
  if (sideway == 1 && flipedHorizontal == false) {
    matrix.b = zoomRange.value
    matrix.c = - zoomRange.value
  }

  if (sideway == 0 && flipedHorizontal == true) {
    matrix.a = - zoomRange.value
    matrix.d = zoomRange.value
  }
  if (sideway == 2 && flipedHorizontal == true) {
    matrix.a = zoomRange.value
    matrix.d = - zoomRange.value
  }
  if (sideway == 3 && flipedHorizontal == true) {
    matrix.b = - zoomRange.value
    matrix.c = - zoomRange.value
  }
  if (sideway == 1 && flipedHorizontal == true) {
    matrix.b = zoomRange.value
    matrix.c = zoomRange.value
  }

  if (sideway == 0 && flipedVertical == true && flipedHorizontal == false) {
    matrix.a = zoomRange.value
    matrix.d = - zoomRange.value
  }
  if (sideway == 2 && flipedVertical == true && flipedHorizontal == false) {
    matrix.a = - zoomRange.value
    matrix.d = zoomRange.value
  }
  if (sideway == 3 && flipedVertical == true && flipedHorizontal == false) {
    matrix.b = zoomRange.value
    matrix.c = zoomRange.value
  }
  if (sideway == 1 && flipedVertical == true && flipedHorizontal == false) {
    matrix.b = - zoomRange.value
    matrix.c = - zoomRange.value
  }

  if (sideway == 0 && flipedVertical == true && flipedHorizontal == true) {
    matrix.a = - zoomRange.value
    matrix.d = - zoomRange.value
  }
  if (sideway == 2 && flipedVertical == true && flipedHorizontal == true) {
    matrix.a = zoomRange.value
    matrix.d = zoomRange.value
  }
  if (sideway == 3 && flipedVertical == true && flipedHorizontal == true) {
    matrix.b = zoomRange.value
    matrix.c = - zoomRange.value
  }
  if (sideway == 1 && flipedVertical == true && flipedHorizontal == true) {
    matrix.b = - zoomRange.value
    matrix.c = zoomRange.value
  }
  
  image.style.transform = `matrix(${matrix.a}, ${matrix.b}, ${matrix.c}, ${matrix.d}, ${matrix.tx}, ${matrix.ty})`
}

//rotate left
rotateLeftButton.addEventListener('click', rotateLeft)
function rotateLeft () {
  x -= 90
  x = x * Math.PI / 180
  
  matrix = {
    a: Math.cos(x),
    b: Math.sin(x),
    c: -Math.sin(x),
    d: Math.cos(x),
    tx: 0,
    ty: 0
  }

  image.style.transform = `matrix(${matrix.a}, ${matrix.b}, ${matrix.c}, ${matrix.d}, ${matrix.tx}, ${matrix.ty})`
  x = x * 180 / Math.PI

  if (sideway == 0) sideway = 3
  else sideway -= 1
  flipedHorizontal = false
  flipedVertical = false
  zoomRange.value = 1
}

//rotate right
rotateRightButton.addEventListener('click', rotateRight)
function rotateRight () {
  x += 90
  x = x * Math.PI / 180
  
  matrix = {
    a: Math.cos(x),
    b: Math.sin(x),
    c: -Math.sin(x),
    d: Math.cos(x),
    tx: 0,
    ty: 0
  }

  image.style.transform = `matrix(${matrix.a}, ${matrix.b}, ${matrix.c}, ${matrix.d}, ${matrix.tx}, ${matrix.ty})`
  x = x * 180 / Math.PI

  if (sideway !== 3) sideway +=1
  else sideway = 0
  flipedHorizontal = false
  flipedVertical = false
  zoomRange.value = 1
}

//flip horizontal
flipHorizontalButton.addEventListener('click', flipHorizontal)
function flipHorizontal () {
  if (sideway === 0) {
    matrix.a = - matrix.a
  }
  if (sideway === 2) {
    matrix.a = - matrix.a
  }
  if (sideway === 1) {
    matrix.c = - matrix.c
  }
  if (sideway === 3) {
    matrix.c = - matrix.c
  }
  
  image.style.transform = `matrix(${matrix.a}, ${matrix.b}, ${matrix.c}, ${matrix.d}, ${matrix.tx}, ${matrix.ty})`
  flipedHorizontal = !flipedHorizontal
}

//flip vertical
flipVerticalButton.addEventListener('click', flipVertical)
function flipVertical () {
  if (sideway === 0) {
    matrix.d = - matrix.d
  }
  if (sideway === 2) {
    matrix.d = - matrix.d
  }
  if (sideway === 1) {
    matrix.b = - matrix.b
  }
  if (sideway === 3) {
    matrix.b = - matrix.b
  }
  
  image.style.transform = `matrix(${matrix.a}, ${matrix.b}, ${matrix.c}, ${matrix.d}, ${matrix.tx}, ${matrix.ty})`
  flipedVertical = !flipedVertical
}
