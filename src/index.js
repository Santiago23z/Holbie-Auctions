const menu = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const initDB = require('./img/db')
//var priceUpdate = []



//ej1: [25, 26, 27]
/*ej2: [
    {nombre: 'diana', precio: 20},
    {nombre: 'vivi', precio: 60},
] */

menu.addEventListener('click', clickMenu)

function clickMenu() {
    menuMobile.classList.toggle('inactive')
}

/*function priceDuplicate(list){
    const result = list.reduce((acc,item)=>{
        if(!acc.includes(item)){
            acc.push(item);
        }
        return acc;
      },[])
}
function agregarElementos() {
    var lista = document.getElementById("ulListado");
   // priceDuplicate(priceUpdate)
    priceUpdate.forEach(function (data, index) {
        var linew = document.createElement("li");
        var contenido = document.createTextNode(data);
        lista.appendChild(linew);
        linew.appendChild(contenido);
        info.reset();
    })
}

function updatePrice(price) {
    if (price.value) {
        priceUpdate.unshift(+price.value)
        console.log('arr', priceUpdate)
        agregarElementos();
    }
    info.reset();
}*/


initDB();