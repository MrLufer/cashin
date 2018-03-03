const express = require('express');
const session = require('express-session');
const hbs = require('express-handlebars');
const mongoose = require('mongoose');
const path = require('path');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require ('body-parser');
//Cargando rutas

const index = require('./routes/index');
const api = require('./routes/api');

const MONGO_URL = 'mongodb://127.0.0.1:27017/auth';

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URL);


const app = express();

mongoose.connection.on('error',(err)=>{
	throw err;
	process.exit(1);
})


app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true,
	store: new MongoStore({
		url: MONGO_URL,
		autoReconnect: true
	})
}))

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.engine('.hbs',hbs({
	defaultLayout: 'default',
	extname: '.hbs'
}))

app.set('view engine','.hbs')


app.use('/api', api)
app.use('/', index)

app.listen(3000,()=>{
	console.log('sevidor corriendo');
})
