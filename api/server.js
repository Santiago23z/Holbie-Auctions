const express = require('express');
const bodyParser = require('body-Parser')
const Products = require ("./api/apiproducts");

const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/apiproducts", Products);

const usuario = 'holbieauctions'
const password = 'holbieauctions'
const db = 'holbieauctions'
const URI = `mongodb+srv://${usuario}:${password}@cluster0.dous5ey.mongodb.net/${db}?retryWrites=true&w=majority`

mongoose.connect(URI,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('conexión exitosa!!!'))
.catch(err => console.log('Se capturó el error', err))

app.listen(4000, () => {
    console.log('escuchando el maravilloso puerto 4000')
});
