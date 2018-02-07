const express = require('express');
const session = require('express-session');
const hbs = require('express-handlebars');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require ('body-parser');
const passport = require('passport');
const passportConfig = require('./config/passport');


const MONGO_URL = 'mongodb://127.0.0.1:27017/auth';

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URL);


const app = express();

mongoose.connection.on('error',(err)=>{
	throw err;
	process.exit(1);
})


app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true,
	store: new MongoStore({
		url: MONGO_URL,
		autoReconnect: true
	})
}))
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

const controladorUser = require('./controls/user');
app.post('/signup',controladorUser.postSignup);
app.post('/login',controladorUser.postLogin);
app.get('/logout',passportConfig.estaAutenticado,controladorUser.logout);

app.get('/usuarioinfo',passportConfig.estaAutenticado,(req,res)=>{
	res.json(req.user);
})

app.listen(3000,()=>{
	console.log('sevidor corriendo');
})
