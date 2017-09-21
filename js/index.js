import polyfill from './polyfill'
import loadImages from './common/loadImages'
import hamburgerMenu from './handlers/hamburgerMenu'

document.addEventListener('DOMContentLoaded', () => {
  polyfill()
  loadImages()
  hamburgerMenu()
})
