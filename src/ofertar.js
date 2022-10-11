var priceUpdate = []

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
}
