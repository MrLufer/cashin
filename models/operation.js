const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const opSchema = new Schema({
  ruc: {type: Number ,unique: true, required:true},
  description: {type: String },
  total: {type: Number},
  mora: {type: Number},
  tipomora:
  aplicacionmora:
  eliminarMora: {type: Boolean},
  deudaInicial: {type: Number},
  fechaVencimiento: {type: Date},
  descripcion: {type: String},
  identificadorpagador: {type: String},
  nombrePagador: {type: String},
  identificadordelacreditador: {type: String},
  nombreAcreedor: {type: String},
  cuentadeAbono: {type: Number},
  bancoAbono: {type: String},
  codigoRecaudadora: {type: Number}

})
