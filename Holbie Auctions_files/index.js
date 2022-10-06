const menu = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');


menu.addEventListener('click', clickMenu)

function clickMenu () {
    menuMobile.classList.toggle('inactive')
}