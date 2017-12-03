export default () => {
  const cards = document.querySelectorAll('.equipment-card')

  function toggleCardInfo() {
    this.classList.toggle('active')
  }

  cards.forEach(card => card.addEventListener('click', toggleCardInfo))
}
