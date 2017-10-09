import polyfill from './polyfill'
import loadImages from './common/loadImages'
import hamburgerMenu from './handlers/hamburgerMenu'
import cardButton from './handlers/cardButton'

document.addEventListener('DOMContentLoaded', () => {
  polyfill()
  loadImages()
  hamburgerMenu()
  cardButton()
})
