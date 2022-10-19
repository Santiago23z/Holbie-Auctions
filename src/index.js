const menu = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');



menu.addEventListener('click', clickMenu)

function clickMenu() {
    menuMobile.classList.toggle('inactive')
}

function getProducts() {
    const Http = new XMLHttpRequest();
    const url='http://localhost:4000/api/all';
    Http.open("GET", url);
    // Http.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:4000/api/all");
    Http.send();
    Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
    // document.querySelector('body').innerHTML = Http.responseText;
    // document.querySelector('body').innerHTML = `
    //     <h1>${Http.response[0]['DEPENDENCIA']}</h1>`
}
}

getProducts();