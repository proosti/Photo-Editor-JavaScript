const blurZeroButton = document.querySelector('.blur__0')
const blurOneButton = document.querySelector('.blur__1')
const blurTwoButton = document.querySelector('.blur__2')
const blurThreeButton = document.querySelector('.blur__3')
const blurRange = document.getElementById('blur')
const blurMinus = document.querySelector('.blur__icon__minus')
const blurPlus = document.querySelector('.blur__icon__plus')
const brightnessFiftyButton = document.querySelector('.brightness__50')
const brightnessHundredButton = document.querySelector('.brightness__100')
const brightnessHundredFiftyButton = document.querySelector('.brightness__150')
const brightnessTwoHundredButton = document.querySelector('.brightness__200')
const brightnessRange = document.getElementById('brightness')
const brightnessMinus = document.querySelector('.brightness__icon__minus')
const brightnessPlus = document.querySelector('.brightness__icon__plus')
const contrastEightyButton = document.querySelector('.contrast__80')
const contrastHundredButton = document.querySelector('.contrast__100')
const contrastHundredTwentyButton = document.querySelector('.contrast__120')
const contrastHundredFourtyButton = document.querySelector('.contrast__140')
const contrastRange = document.getElementById('contrast')
const contrastMinus = document.querySelector('.contrast__icon__minus')
const contrastPlus = document.querySelector('.contrast__icon__plus')
let currentFilter = {
  blur: 0,
  brightness: 1,
  contrast: 1
}

//blur
blurRange.onchange = bluring
function bluring () {
  currentFilter.blur = blurRange.value
  image.style.filter = `blur(${currentFilter.blur}px) brightness(${currentFilter.brightness}) contrast(${currentFilter.contrast})`
}

blurMinus.onclick = bluringMinus
function bluringMinus () {
  blurRange.value = Number(blurRange.value) - 0.1
  bluring()
}

blurPlus.onclick = bluringPlus
function bluringPlus () {
  blurRange.value = Number(blurRange.value) + 0.1
  bluring()
}

blurZeroButton.addEventListener ('click', () => getBlur(0))
blurOneButton.addEventListener ('click', () => getBlur(1))
blurTwoButton.addEventListener ('click', () => getBlur(2))
blurThreeButton.addEventListener ('click', () => getBlur(3))

function getBlur (changeNumber) {
  currentFilter.blur = changeNumber
  image.style.filter = `blur(${currentFilter.blur}px) brightness(${currentFilter.brightness}) contrast(${currentFilter.contrast})`
  blurRange.value = changeNumber
}

//brightness
brightnessRange.onchange = gettingBrightness
function gettingBrightness () {
  currentFilter.brightness = brightnessRange.value
  image.style.filter = `blur(${currentFilter.blur}px) brightness(${currentFilter.brightness}) contrast(${currentFilter.contrast})`
}

brightnessMinus.onclick = getBrightnessMinus
function getBrightnessMinus () {
  brightnessRange.value = Number(brightnessRange.value) - 0.1
  gettingBrightness()
}

brightnessPlus.onclick = getBrightnessPlus
function getBrightnessPlus () {
  brightnessRange.value = Number(brightnessRange.value) + 0.1
  gettingBrightness()
}

brightnessFiftyButton.addEventListener ('click', () => getBrightness(0.5))
brightnessHundredButton.addEventListener ('click', () => getBrightness(1))
brightnessHundredFiftyButton.addEventListener ('click', () => getBrightness(1.5))
brightnessTwoHundredButton.addEventListener ('click', () => getBrightness(2))

function getBrightness(changeNumber) {
  currentFilter.brightness = changeNumber
  image.style.filter = `blur(${currentFilter.blur}px) brightness(${currentFilter.brightness}) contrast(${currentFilter.contrast})`
  brightnessRange.value = changeNumber
}

//contrast
contrastEightyButton.addEventListener ('click', () => getContrast(0.8))
contrastHundredButton.addEventListener ('click', () => getContrast(1))
contrastHundredTwentyButton.addEventListener ('click', () => getContrast(1.2))
contrastHundredFourtyButton.addEventListener ('click', () => getContrast(1.5))

function getContrast(changeNumber) {
  currentFilter.contrast = changeNumber
  image.style.filter = `blur(${currentFilter.blur}px) brightness(${currentFilter.brightness}) contrast(${currentFilter.contrast})`
  contrastRange.value = changeNumber
}

contrastRange.onchange = gettingContrast
function gettingContrast () {
  currentFilter.contrast = contrastRange.value
  image.style.filter = `blur(${currentFilter.blur}px) brightness(${currentFilter.brightness}) contrast(${currentFilter.contrast})`
}

contrastMinus.onclick = getContrastMinus
function getContrastMinus () {
  contrastRange.value = Number(contrastRange.value) - 0.05
  gettingContrast()
}

contrastPlus.onclick = getContrastPlus
function getContrastPlus () {
  contrastRange.value = Number(contrastRange.value) + 0.05
  gettingContrast()
}