'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Shelves', [
      { name: 'Want to Watch', userId: 1 },
      { name: 'Have Watched', userId: 1 },
      { name: 'Watching Tonight', userId: 1 },
      { name: 'Want to Watch', userId: 2 },
      { name: 'Have Watched', userId: 2 },
      { name: 'Watching Tonight', userId: 2 },
    ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Shelves');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
