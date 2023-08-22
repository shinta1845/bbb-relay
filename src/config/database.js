// require("babel-register");

module.exports = {
  development: {
    // username: process.env.DEV_DB_USERNAME,
    // password: process.env.DEV_DB_PASSWORD,
    // database: process.env.DEV_DB_NAME,
    storage: process.env.DEV_DB_STORAGE,
    dialect: 'sqlite',
    // dialectOptions: {
    //   mode: sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE | sqlite3.OPEN_FULLMUTEX,
    // },
    // logging: console.log, // logger.debug.bind(logger), // Logger: Bunyan or Winston
  },
  test: {
    // username: process.env.CI_DB_USERNAME,
    // password: process.env.CI_DB_PASSWORD,
    // database: process.env.CI_DB_NAME,
    storage: process.env.CI_DB_STORAGE,
    dialect: 'sqlite',
    // dialectOptions: {
    //   mode: sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE | sqlite3.OPEN_FULLMUTEX,
    // },
    // logging: console.log, // logger.debug.bind(logger), // Logger: Bunyan or Winston
  },
  production: {
    // username: process.env.PROD_DB_USERNAME,
    // password: process.env.PROD_DB_PASSWORD,
    // database: process.env.PROD_DB_NAME,
    storage: process.env.PROD_DB_STORAGE,
    dialect: 'sqlite',
    // dialectOptions: {
    //   mode: sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE | sqlite3.OPEN_FULLMUTEX,
    //   // bigNumberStrings: true,
    //   // ssl: {
    //   //   ca: fs.readFileSync(__dirname + '/mysql-ca-main.crt')
    //   // }
    // },
    // logging: console.log, // logger.debug.bind(logger), // Logger: Bunyan or Winston
  }
};