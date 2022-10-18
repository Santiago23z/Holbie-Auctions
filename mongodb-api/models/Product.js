  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  const ProductsSchema = new Schema({
    equipo: String,
    No_inventario: String,
    observacion: String ,
    ubicacion: String,
    dependencia: String,
    link: String
  }, { collection : 'inventario'});

  //const producto = new Schema({ url: String, text: String, id: Number}, 
  //  { collection : 'inventario' });
  
  const Producto = mongoose.model('inventario', ProductsSchema)

  module.exports = Producto
  

