const xml = require('xmlhttprequest').XMLHttpRequest;
const url='http://localhost:4000/api/all';

const data = (apiurl, cb) => {
    let http = new xml()
    http.open('GET', apiurl, true)
    http.onreadystatechange = function(){
        if (http.readyState == 4){
            if (http.status == 200){
                cb(null, JSON.parse(http.responseText))
            }else {
                const err = new Error('Hubo un error el HP!' + apiurl)
                cb(err, null)
            }
        }
    }
    http.send()
}

data(`${url}`, function(err, products){
    if (err) return console.error(err)
    console.log(products)
})