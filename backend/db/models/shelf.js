'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shelf = sequelize.define('Shelf', {
    name: DataTypes.ENUM,
    review: DataTypes.TEXT
  }, {});
  Shelf.associate = function(models) {
    // associations can be defined here
  };
  return Shelf;
};