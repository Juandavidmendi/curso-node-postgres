'use strict';

const { UserSchema, USER_TABLA} = require('./../models/user.model.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLA, UserSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(USER_TABLA);
  }
};
