export default () => {
  const card = document.querySelector('.equipment-card')

  function toggleCardInfo() {
    card.classList.toggle('active')
  }

  card.addEventListener('click', toggleCardInfo)
}
