'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', [
    {
      title: 'Invitation Game',
      description: 'During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code with help from fellow mathematicians.',
      actors: 'Benedict Cumberbatch, Keira Knightley, Matthew Goode',
      director: 'Morten Tyldum',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Rush Hour',
      description: 'A loyal and dedicated Hong Kong Inspector teams up with a reckless and loudmouthed L.A.P.D. detective to rescue the Chinese Consul\'s kidnapped daughter, while trying to arrest a dangerous crime lord along the way.',
      actors: 'Jackie Chan, Chris Tucker',
      director: 'Brett Ratner',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'House Party',
      description: 'Kid decides to go to his friend Play\'s house party, but neither of them can predict what\'s in store for them on what could be the wildest night of their lives.',
      actors: 'Christopher Reid, Robin Harris, Christopher Martin',
      director: 'Reginald Hudlin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Nightcrawler',
      description: 'When Louis Bloom, a con man desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant to become the star of his own story.',
      actors: 'Jake Gyllenhaal, Rene Russo, Bill Paxton',
      director: 'Dan Gilroy',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
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
    return queryInterface.bulkDelete('Movies');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
