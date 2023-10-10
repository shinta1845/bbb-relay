const { Sequelize, Op, Model, DataTypes } = require("sequelize");

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.DEV_DB_STORAGE,
    dialectOptions: {
      mode: sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE | sqlite3.OPEN_FULLMUTEX,
    },
    logging: console.log, // logger.debug.bind(logger), // Logger: Bunyan or Winston
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

