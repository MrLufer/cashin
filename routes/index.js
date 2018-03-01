 const express = require('express')
 const auth = require('../middlewares/auth')
 const router = express.Router()




router.get('/', (req,res)=>{

	res.render('index');
})

router.get('/welcome', (req,res)=>{

	res.render('welcome',{
    css: 'welcome_styles'
  })
})

router.get('/olvide', (req,res)=>{

	res.render('olvide',{
    css: 'olvide_styles'
  })
})

router.get('/calendario',(req,res)=>{
  res.render('calendario',{
    css: 'calendario_styles'
  })
})

router.get('/cpagar',(req,res)=>{
  res.render('cpagar')
})

router.get('/consultaEmpresa',(req,res)=>{
  res.render('consultaE',{
    css: 'consultaE_styles'

  })

})

router.get('/consultaPersona',(req,res)=>{
  res.render('consultaP')
})

router.get('/index',(req,res)=>{
	res.render('index')
})

router.get('/registro',(req,res)=>{
	res.render('registro',{
    css: 'registro_styles',
    js: 'registro'
  })
})

router.get('/admuser',(req,res)=>{
	res.render('admuser',{
    css: 'admuser_styles'

  })
})

router.get('/ctscobrar',(req,res)=>{
  res.render('ctscobrar')
})

router.get('/master',(req,res)=>{
  res.render('master',{
    js: 'master'

  })
})


router.get('/flujos',(req,res)=>{
  res.render('chart',{
    js: 'main',
    jsx: 'Chart.bundle.min'

  })

})


 module.exports = router
