'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shelf = sequelize.define('Shelf', {
    name: DataTypes.ENUM,
    review: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER
  }, {});
  Shelf.associate = function(models) {
    // associations can be defined here
  };
  return Shelf;
};