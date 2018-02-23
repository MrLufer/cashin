const mongoose = required('mongoose')
const User = require('../models/user')
const service = require('../services')

function signUp (req,res){
 const User = new User({
   ruc: req.body.ruc,

 })

 user.save((err)=>{
   if(err) res.status(500).send({message:'Error al crear usuario'})
   return res.status(200).send({token: service.createToken(user)})
 })

}

function signIn (req,res){


}

module.exports = {
  signUp,
  signIn
}
