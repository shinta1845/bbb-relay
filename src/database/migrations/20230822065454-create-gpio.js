'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('gpio', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1
      },
      pin: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      },
      active_low: {
        type: DataTypes.ENUM('0', '1'),
        allowNull: false,
        defaultValue: '0'
      },
      direction: {
        type: DataTypes.ENUM('in', 'out'),
        allowNull: false,
        defaultValue: 'in'
      },
      value: {
        type: DataTypes.ENUM('0', '1'),
        allowNull: false,
        defaultValue: '0'
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('gpio');
  }
};