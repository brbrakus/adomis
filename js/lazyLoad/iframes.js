function loadGMaps() {
  const iframe = document.querySelector('.gmaps-iframe')
  iframe.src = iframe.dataset.src
}

export default function loadIframes() {
  loadGMaps()
}
