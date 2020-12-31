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
    MoviesShelf.belongsTo(models.Movie, { foreignKey: 'movieId' });
    MoviesShelf.belongsTo(models.Shelf, { foreignKey: 'shelfId' });
  };
  return MoviesShelf;
};