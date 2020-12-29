'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shelf = sequelize.define('Shelf', {
    name: {
      type: DataTypes.ENUM('Want to watch', 'Have watched', 'Watching Tonight')
    },
    review: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER
  }, {});
  Shelf.associate = function(models) {
    // associations can be defined here
  };
  return Shelf;
};