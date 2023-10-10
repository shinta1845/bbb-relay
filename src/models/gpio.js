'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GPIO extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    toJSON(){
      return {...this.get(), id: undefined}
    }
  }
  GPIO.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
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
    createAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updateAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'gpio',
    modelName: 'GPIO',
  });
  return GPIO;
};