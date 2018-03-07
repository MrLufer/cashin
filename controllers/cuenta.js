'use strict'

const Cuenta = require('../models/cuenta')

function saveCuenta (req, res) {
  console.log('POST /api/cuenta')
  console.log(req.body)

  let cuenta = new Cuenta()
  cuenta.proeevedor = req.body.proeevedor
  cuenta.ruc = req.body.ruc
  cuenta.monto = req.body.monto
  cuenta.fechaemision = req.body.fechaemision
  cuenta.fechavencimiento = req.body.fechavencimiento
  cuenta.descripcion = req.body.descripcion
  cuenta.telefono = req.body.telefono
  cuenta.estado = req.body.estado

  cuenta.save((err, productStored) => {
    if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err} `})

    res.status(200).send({ cuenta: productStored })
  })
}


function obtenerCuenta (req, res){



}



module.exports = {
  saveCuenta
}
