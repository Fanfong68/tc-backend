'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      // define association here
    }
  }
  Item.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Item'
  });
  return Item;
};
