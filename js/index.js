import polyfill from './polyfill'
import hamburgerMenu from './handlers/hamburgerMenu'
import cardButton from './handlers/cardButton'

document.addEventListener('DOMContentLoaded', () => {
  polyfill()
  hamburgerMenu()
  cardButton()
})
