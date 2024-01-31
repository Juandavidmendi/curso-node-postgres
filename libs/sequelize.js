const { Sequelize } = require('sequelize');
const { config } = require('../config/config.js');
const setupModels = require('../db/models/index.js');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: false,
});

// async function probarConexion() {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }
//corremos el setup
setupModels(sequelize);

//sincronice las tablas
// sequelize.sync();
// probarConexion();
module.exports = sequelize;
