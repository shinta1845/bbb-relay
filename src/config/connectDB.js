const { Sequelize } = require('sequelize');
const sqlite3 = require('sqlite3').verbose();
// require('dotenv').config();

// const db_name = process.env.DB_NAME;
// const db_user = process.env.DB_USER;
// const db_pass = process.env.DB_PASS;
// from ./config/config.json ???

const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: '../database/db.sqlite',
    dialectOptions: {
        mode: sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE | sqlite3.OPEN_FULLMUTEX,
    },
    logging: console.log, // logger.debug.bind(logger), // Logger: Bunyan or Winston
});

module.exports = {
    sequelize
};