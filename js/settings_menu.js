const zoom = document.querySelector('div.zoom')
const blur = document.querySelector('div.blur')
const graph = document.querySelector('.div.graph')
const transit = document.querySelector('div.transit')
const navButtons = document.querySelectorAll('.settings__link')
const settingsBlocks = document.querySelectorAll('.settings__block')

for (navButton of navButtons) {
  navButton.addEventListener('click', openClose)
}
function openClose () {
  let activeLink = document.querySelector('.active__link')
  let activeItem = document.querySelector('.active__item')
  activeLink.classList.remove('active__link')
  activeItem.classList.remove('active__item')
  this.classList.add('active__link')
  this.parentNode.classList.add('active__item')
  for (settingsBlock of settingsBlocks) {
    if (!settingsBlock.classList.contains('hidden')) {
      settingsBlock.classList.add('hidden')
    }
    if (this.textContent == settingsBlock.dataset.name) {
      settingsBlock.classList.remove('hidden')
    }
  }
}



