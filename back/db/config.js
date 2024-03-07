const config = require('../config')

const USER = encodeURIComponent(config.dbUser)
const PASS = encodeURIComponent(config.dbPassword)
const URI = `${config.dbDialect}://${USER}:${PASS}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  development: {
    url: URI,
    dialect: config.dbDialect
  },
  production: {
    url: URI,
    dialect: config.dbDialect
  }
}

