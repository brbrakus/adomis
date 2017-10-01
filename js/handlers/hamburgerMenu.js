export default () => {
  const hamburgerMenu = document.querySelector('header .hamburger-menu')
  const navbarItems = document.querySelector('header .navbar-items')
  const overlay = document.querySelector('.overlay')

  function toggleHamburger() {
    navbarItems.classList.toggle('active')
    hamburgerMenu.classList.toggle('active')
    overlay.classList.toggle('active')
  }

  hamburgerMenu.addEventListener('click', toggleHamburger)

  navbarItems.children.forEach(navbarItem => navbarItem.addEventListener('click', toggleHamburger))
}
