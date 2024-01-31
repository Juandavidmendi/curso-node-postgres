'use strict';

const { UserSchema, USER_TABLA} = require('./../models/user.model.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(USER_TABLA, 'role', UserSchema.role);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(USER_TABLA, 'role')
  }
};
