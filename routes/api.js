const express = require('express')
const auth = require('../middlewares/auth')
const api = express.Router()
const userCtrl = require('../controllers/auth')

api.get('/private',auth, function(req,res){
 res.status(200).send({message: 'tienes acceso'})
})


api.post('/signup', userCtrl.signUp)

api.post('/signin', userCtrl.signIn)

module.exports = api
