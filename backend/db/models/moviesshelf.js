'use strict';
module.exports = (sequelize, DataTypes) => {
  const MoviesShelf = sequelize.define('MoviesShelf', {
    status: DataTypes.STRING,
    review: DataTypes.TEXT,
    shelfId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER
  }, {});
  MoviesShelf.associate = function(models) {
    // associations can be defined here
    MoviesShelf.hasMany(models.Movie, { foreignKey: 'movieId' });
    MoviesShelf.hasMany(models.Shelf, { foreignKey: 'shelfId' });
  };
  return MoviesShelf;
};