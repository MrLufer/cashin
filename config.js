module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB_URI || 'mongodb://cashin:cashin@ds213229.mlab.com:13229/cashin',
  SECRET_TOKEN: 'miclavedetokens'
}
