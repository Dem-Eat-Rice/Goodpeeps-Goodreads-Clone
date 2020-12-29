'use strict';
module.exports = (sequelize, DataTypes) => {
  const MoviesShelf = sequelize.define('MoviesShelf', {
    shelfId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER
  }, {});
  MoviesShelf.associate = function(models) {
    // associations can be defined here
  };
  return MoviesShelf;
};