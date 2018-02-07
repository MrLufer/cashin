const passport = require ('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require ('../models/user');

passport.serializeUser((user,done)=>{
  done(null,user._id);
})

passport.deserializeUser((id,done)=>{
  User.findById(id,(err,user)=>{
    done(err,user);
  })
})

passport.use(new LocalStrategy(
  {usernameField:'ruc'},
  (ruc,password,done)=>{
    User.findOne({ruc},(err,user)=>{
      if(!user){
        return done(null,false,{message:'Este ruc:  no esta registrado'});
      }
      else{
        user.compararpasword(password,(err,sonIguales)=>{
          if(sonIguales){
            return done(null,user);
          }
          else{
              return done(null,user,{message: 'La contraseña no es valida'});
          }
        })
      }
    })
  }
))


exports.estaAutenticado = (req,res,next)=>{
  if(req.isAuthenticated()){
    return next();
  }
  res.status(401).send('Tienes que hacer login para acceder');
}
