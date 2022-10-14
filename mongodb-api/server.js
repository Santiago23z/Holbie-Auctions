const express = require('express');
const mongoose = require('mongoose');
//const bodyParser = require('body-Parser')
const Products = require ("./api/apiproducts");

const app = express();

app.use(express.json());

app.use("/api/apiproducts", Products);

mongoose.connect(
    "mongodb+srv://holbieauctions:holbieauctions@cluster0.dous5ey.mongodb.net/test",
    { UseNewUrlParser: true },
    (err, res) => {
        err && console.log("Error conectando la bd");
        app.listen(4000, () => {
            console.log("Servidor corriendo en http://localhost:4000");
        });
    }
);
