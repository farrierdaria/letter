let burgerMenu = document.querySelector('.header__nav-burger')
let navMenu= document.querySelector('.menu-container')
let navContainer= document.querySelector('.header__nav')

let ifClick;

function BurgerClicked() {

    if(burgerMenu.classList.contains('active')){
        burgerMenu.classList.remove('active')
        menucontainer.classList.remove('active')
        navContainer.classList.remove('active')     
    }
    else {
        burgerMenu.classList.add('active')
        menucontainer.classList.add('active')
        navContainer.classList.add('active')
    }
    

}
