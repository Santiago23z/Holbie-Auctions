  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  const ProductsSchema = new Schema({
    equipo: { type: String },
    No_inventario: { type: String },
    observacion: { type: String },
    ubicacion: { type: String },
    dependencia: { type: String },
    link: { type: String }
  });

  module.exports = Products = mongoose.model('Products', ProductsSchema);

