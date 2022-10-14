const mongoose = require('mongoose');
const product = require('../models/Product');


const findproducts = (req, res) => {
    product.find((err, product) => {
        if (err){
            res.status(500).send(err.message);
        }
        else {
            res.status(200).json(product);
        }
    })
}

function EncontrarId(req, res) {
    product.findById(req.params.id, (err, product) => {
        if (err){
            res.status(500).send(err.message);
        }
        else {
            res.status(200).json (product);
        }
    })
}

const adProduct = (req, res) => {
    let NewProduct = new product ({
        equipo: req.body.equipo,
        No_inventario: req.body.No_inventario,
        observacion: req.body.observacion,
        ubicacion: req.body.ubicacion,
        dependencia: req.body.dependencia,
        link: req.body.link
    });
    NewProduct.save((err, producto) => {
        if (err){
            res.status(500).send(err.message);
        }
        else {
            res.status(200).json(producto);
        }
    })
}

module.exports = { findproducts, EncontrarId, adProduct };
