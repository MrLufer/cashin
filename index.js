const express = require('express');
const session = require('express-session');
const hbs = require('express-handlebars');
const app = express();

app.engine('.hbs',hbs({
	defaultLayout: 'default',
	extname: '.hbs'
}))

app.set('view engine','.hbs')

app.get('/', (req,res)=>{
	res.send('Hola');
})

app.get('/index',(req,res)=>{
	res.render('index')
})

app.get('/registro',(req,res)=>{
	res.render('registro')
})

app.listen(3000,()=>{
	console.log('sevidor corriendo');
})