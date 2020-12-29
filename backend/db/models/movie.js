'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    synopsis: DataTypes.TEXT,
    actors: DataTypes.STRING,
    director: DataTypes.STRING,
    status: DataTypes.ENUM
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
  };
  return Movie;
};