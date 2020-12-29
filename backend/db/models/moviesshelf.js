'use strict';
module.exports = (sequelize, DataTypes) => {
  const MoviesShelf = sequelize.define('MoviesShelf', {
    id: DataTypes.INTEGER
  }, {});
  MoviesShelf.associate = function(models) {
    // associations can be defined here
  };
  return MoviesShelf;
};