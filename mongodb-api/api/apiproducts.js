const productController = require('../controlers/products');
const express = require('express');

const router = express.Router();

router.get("/all", productController.findproducts);

router.get("/:id", productController.EncontrarId);

router.post("/add", productController.adProduct);

module.exports = router;
