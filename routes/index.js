'use strict'

const express = require('express')
const cuentaCtrl = require('../controllers/cuenta')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()


//api.get('/factura', cuentaCtrl.)
api.post('/cuenta', cuentaCtrl.saveCuenta)
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private', auth, (req, res) => {
  res.status(200).send({ message: 'Tienes acceso' })
})



module.exports = api
