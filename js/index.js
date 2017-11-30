import polyfill from './polyfill'
import loadImages from './common/loadImages'
import loadIframes from './common/loadIframes'
import hamburgerMenu from './handlers/hamburgerMenu'

document.addEventListener('DOMContentLoaded', () => {
  polyfill()
  loadImages()
  loadIframes()
  hamburgerMenu()
})
