'use strict';

const crypto = require('crypto');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('user', [{
      id: 1,
      uuid: crypto.randomUUID(),
      username: 'admin',
      firstName: '',
      lastName: 'Admin',
      email: 'admin@admin.com',
      password: 'Admin@01',
      salt: '',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      uuid: crypto.randomUUID(),
      username: 'user',
      firstName: '',
      lastName: 'User',
      email: 'user@user.com',
      password: 'User@01',
      salt: '',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('user', null, {});
  }
};
