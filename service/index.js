

const jwt = require('jwt-simple')
const config = require ('../config')
const moment = require('moment') 

function createToken(user){
  const payload = {
    sub: user._ruc,
    iat: moment().unix(),
    exp: moment().add(14,'days').unix(),
  }

  return  jwt.encode(payload, config.SECRET_TOKEN)
}

module.exports = createToken
