export default () => {
  const hamburgerMenu = document.querySelector('header .hamburger-menu')
  const navbarItems = document.querySelector('header .navbar-items')

  hamburgerMenu.addEventListener('click', () => {
    navbarItems.classList.toggle('active')
    hamburgerMenu.classList.toggle('active')
  })

  navbarItems.children.forEach(navbarItem =>
    navbarItem.addEventListener('click', () => {
      navbarItems.classList.toggle('active')
      hamburgerMenu.classList.toggle('active')
    })
  )
}
