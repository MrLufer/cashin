 const express = require('express')
 const auth = require('../middlewares/auth')
 const api = express.Router()

api.get('/private',auth, function(req,res){
  res.status(200).send({message: 'tienes acceso'})
})


api.get('/', (req,res)=>{

	res.render('index');
})

api.get('/cpagar',(req,res)=>{
  res.render('cpagar')
})

api.get('/consultaEmpresa',(req,res)=>{
  res.render('consultaE')
})

api.get('/consultaPersona',(req,res)=>{
  res.render('consultaP')
})

api.get('/index',(req,res)=>{
	res.render('index')
})

api.get('/registro',(req,res)=>{
	res.render('registro')
})

api.get('/admuser',(req,res)=>{
	res.render('admuser')
})

api.get('/ctscobrar',(req,res)=>{
  res.render('ctscobrar')
})

api.get('/master',(req,res)=>{
  res.render('master')
})


 module.exports = api
