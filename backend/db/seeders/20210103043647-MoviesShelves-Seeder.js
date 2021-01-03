'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const shelves = await queryInterface.bulkInsert('MoviesShelves', [
      {
        status: 'Watching Tonight',
        shelfId: 1,
        movieId: 1,
      },
      {
        status: 'Have Watched',
        shelfId: 2,
        movieId: 2,
      },
      {
        status: 'Want to Watch',
        shelfId: 3,
        movieId: 3,
      },
      {
        status: 'Want to Watch',
        shelfId: 4,
        movieId: 4,
      }
    ],
      {
        returning: true
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('MoviesShelves')
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
