let burgerMenu = document.querySelector('.header__nav-burger');
let menuContainer = document.querySelector('.menu-container');
let navContainer = document.querySelector('.header__nav');

function BurgerClicked() {
  burgerMenu.classList.toggle('active');
  menuContainer.classList.toggle('active');
  navContainer.classList.toggle('active');
}
