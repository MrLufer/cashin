

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

function decodeToken(token){
  const decoded = new Promise((resolve, reject)=>{
    try {
      const payload = jwt.decode(token, config.SECRET_TOKEN)
      if(payload.exp<=moment().unix()){
        reject({
          status: 401,
          message: 'El token a expirado'
        })
      }

      resolve(payload.sub)

    } catch (err) {
      reject ({
        status:500,
        message: 'invalid token'
      })
    }
  })

  return decoded
}

module.exports = {createToken,
  decodeToken}
