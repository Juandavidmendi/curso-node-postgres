const { Sequelize } = require('sequelize');
const { config } = require('../config/config.js');
const setupModels = require('../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: false,
});

//corremos el setup
setupModels(sequelize);

//sincronice las tablas
// sequelize.sync();

module.exports = sequelize;
