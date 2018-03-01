 const express = require('express')
 const auth = require('../middlewares/auth')
 const api = express.Router()
 const userCtrl = require('../controllers/auth')

api.get('/private',auth, function(req,res){
  res.status(200).send({message: 'tienes acceso'})
})


api.get('/', (req,res)=>{

	res.render('index');
})

api.get('/welcome', (req,res)=>{

	res.render('welcome',{
    css: 'welcome_styles'
  })
})

api.get('/olvide', (req,res)=>{

	res.render('olvide',{
    css: 'olvide_styles'
  })
})

api.get('/calendario',(req,res)=>{
  res.render('calendario',{
    css: 'calendario_styles'
  })
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
	res.render('registro',{
    css: 'registro_styles'
  })
})

api.get('/admuser',(req,res)=>{
	res.render('admuser',{
    css: 'admuser_styles'
  })
})

api.get('/ctscobrar',(req,res)=>{
  res.render('ctscobrar')
})

api.get('/master',(req,res)=>{
  res.render('master')
})


api.get('/flujos',(req,res)=>{
  res.render('flujos')
})

api.post('/signup', userCtrl.signUp)

api.post('/signin', userCtrl.signIn)

 module.exports = api
