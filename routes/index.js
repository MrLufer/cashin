 const express = require('express')
 const auth = require('../middlewares/auth')
 const api = express.Router()

api.get('/private',auth, function(req,res){
  res.status(200).send({message: 'tienes acceso'})
})

 module.exports = api
