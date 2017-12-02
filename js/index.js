import polyfill from './polyfill'
import hamburgerMenu from './handlers/hamburgerMenu'

document.addEventListener('DOMContentLoaded', () => {
  polyfill()
  hamburgerMenu()
})
