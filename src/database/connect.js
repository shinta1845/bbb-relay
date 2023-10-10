const sqlite3 = require('sqlite3').verbose();
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.sqlite', // 'process.env.DB_STORAGE'
    dialectOptions: {
        mode: sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE | sqlite3.OPEN_FULLMUTEX,
    },
    logging: console.log,
});

sequelize
    .authenticate()
    .then(() => {
        console.log("Database connected successfully!");
    })
    .catch((error) => {
        console.log(error);
    });

module.exports = sequelize;
global.sequelize = sequelize;