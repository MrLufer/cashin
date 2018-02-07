const passport = require('passport');
const User = require('../models/user');

exports.postSignup = (req,res,next)=>{
  const nuevoUsuario = new User({
    ruc: req.body.ruc,
    name: req.body.name,
    password: req.body.password
  });
  User.findOne({ruc: req.body.ruc}, (err,usuarioExistente)=>{
    if(usuarioExistente){
      return res.status(400).send('Ya esta registrado');
    }

    nuevoUsuario.save((err)=>{
      if(err){
        next(err);
      }
      req.logIn(nuevoUsuario,(err)=>{
        if(err){
          next(err);
        }
        res.send('Usuario creado exitosamente');
      })
    })
  })
}

exports.postLogin = (req,res,next)=>{
  passport.authenticate('local',(err,user,info)=>{
    if(err){
      next(err);
    }
    if(!user){
      return res.status(400).send('Ruc o contraseña invalidos');
    }
    req.logIn(user,(err)=>{
      if(err){
        next(err);
      }
      res.send('Login exitoso');
    })
  })(req,res,next);
}

exports.logout = (req,res)=>{
  req.logout();
  res.send('Logout exitoso');
}
