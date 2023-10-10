// require("babel-register");
const sqlite3 = require('sqlite3').verbose();

module.exports = {
  development: {
    storage: process.env.DEV_DB_STORAGE,
    dialect: 'sqlite',
    dialectOptions: {
      mode: sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE | sqlite3.OPEN_FULLMUTEX,
    },
    logging: console.log, // logger.debug.bind(logger), // Logger: Bunyan or Winston
  },
  test: {
    storage: process.env.CI_DB_STORAGE,
    dialect: 'sqlite',
    dialectOptions: {
      mode: sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE | sqlite3.OPEN_FULLMUTEX,
    },
    logging: console.log, // logger.debug.bind(logger), // Logger: Bunyan or Winston
  },
  production: {
    storage: process.env.PROD_DB_STORAGE,
    dialect: 'sqlite',
    dialectOptions: {
      mode: sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE | sqlite3.OPEN_FULLMUTEX,
    },
    logging: console.log, // logger.debug.bind(logger), // Logger: Bunyan or Winston
  }
};