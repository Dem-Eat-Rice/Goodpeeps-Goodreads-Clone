'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const shelves = await queryInterface.bulkInsert('Shelves', [
      { name: 'Want To Watch', userId: 1 },
      { name: 'Watched', userId: 1 },
      { name: 'Watching Tonight', userId: 1 },
      { name: 'Want To Watch', userId: 2 },
      { name: 'Watched', userId: 2 },
      { name: 'Watching Tonight', userId: 2 },
    ],
      {
        returning: true
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Shelves');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
