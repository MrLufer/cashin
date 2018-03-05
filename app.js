'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const app = express()
const api = require('./routes')
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.engine('.hbs', hbs({
  defaultLayout: 'default',
  extname: '.hbs'
}))
app.set('view engine', '.hbs')

app.use('/api', api)



app.get('/', (req,res)=>{

	res.render('index');
})
app.get('/welcome', (req,res)=>{

	res.render('welcome',{
    css: 'welcome_styles'
  })
})

app.get('/olvide', (req,res)=>{

	res.render('olvide',{
    css: 'olvide_styles'
  })
})

app.get('/calendario',(req,res)=>{
  res.render('calendario',{
    css: 'calendario_styles'
  })
})

app.get('/cpagar',(req,res)=>{
  res.render('cpagar')
})

app.get('/consultaEmpresa',(req,res)=>{
  res.render('consultaE',{
    css: 'consultaE_styles'

  })

})

app.get('/consultaPersona',(req,res)=>{
  res.render('consultaP')
})

app.get('/index',(req,res)=>{
	res.render('index')
})

app.get('/registro',(req,res)=>{
	res.render('registro',{
    css: 'registro_styles',
    js: 'registro'
  })
})

app.get('/admuser',(req,res)=>{
	res.render('admuser',{
    css: 'admuser_styles'

  })
})

app.get('/ctscobrar',(req,res)=>{
  res.render('ctscobrar')
})

app.get('/master',(req,res)=>{
  res.render('master',{
    js: 'master'

  })
})


app.get('/flujos',(req,res)=>{
  res.render('chart',{
    js: 'main',
    jsx: 'Chart.bundle.min'

  })

})

module.exports = app
