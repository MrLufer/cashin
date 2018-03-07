'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CuentaSchema = Schema({

  proeevedor: {type: String},
  ruc: {type: Number },
  factura: {type: String},
  monto: {type: Number},
  fechaemision: {type: String},
  fechavencimiento: {type: String},
  descripcion: {type: String},
  personacontacto: {type: String},
  telefono: {type: Number},
  estado: {type: String}


})

module.exports = mongoose.model('Cuenta', CuentaSchema)
