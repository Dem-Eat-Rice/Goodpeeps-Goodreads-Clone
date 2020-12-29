'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    synopsis: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    actors: {
      type: DataTypes.STRING,
      allowNull: false
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('Want to watch', 'Have watched', 'Watching Tonight')
    }
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
  };
  return Movie;
};