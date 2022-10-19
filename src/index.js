const menu = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');



menu.addEventListener('click', clickMenu)

function clickMenu() {
    menuMobile.classList.toggle('inactive')
}

function getProducts() {
    const Http = new XMLHttpRequest();
    const url='http://localhost:4000/all';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
}
}

getProducts();